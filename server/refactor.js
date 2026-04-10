const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.resolve(dir, file);
      if (fs.statSync(file).isDirectory()) {
         results = results.concat(walk(file));
      } else if (file.endsWith('.ts')) {
         results.push(file);
      }
    });
  } catch(e){}
  return results;
}

const rootDir = path.join(__dirname, 'src');
const newCoreAppDir = path.join(rootDir, 'contexts', 'core', 'application');
const newCoreDomainDir = path.join(rootDir, 'contexts', 'core', 'domain');
const newCoreInfraDir = path.join(rootDir, 'contexts', 'core', 'infrastructure');
const newCoreEventsDir = path.join(rootDir, 'contexts', 'core', 'contracts', 'events');

// Files from old locations
const oldRoots = {
  'application': newCoreAppDir,
  'domain': newCoreDomainDir,
  'infrastructure': newCoreInfraDir
};

function fixImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replace import statements generically
  content = content.replace(/from\s+['"]([^'"]+)['"]/g, (match, importPath) => {
    if (!importPath.startsWith('.')) return match; // third-party or absolute

    // Calculate what absolute path this old import pointed to
    const oldAbsolute = path.resolve(path.dirname(filePath), importPath);
    
    // Check if it pointed to old global application/domain/infrastructure
    const oldApp = path.join(rootDir, 'application');
    const oldDomain = path.join(rootDir, 'domain');
    const oldInfra = path.join(rootDir, 'infrastructure');
    
    let newAbsoluteTarget = null;
    
    if (oldAbsolute.startsWith(oldApp)) {
      newAbsoluteTarget = oldAbsolute.replace(oldApp, newCoreAppDir);
      // Wait, there's also the event file which moved into contracts!
      const oldEventPattern = path.join(oldApp, 'events', 'user-registered.event').toLowerCase();
      const oldEventPattern2 = path.join(oldApp, 'events', 'user-registered.integration-event').toLowerCase();
      if (oldAbsolute.toLowerCase() === oldEventPattern || oldAbsolute.toLowerCase() === oldEventPattern2) {
          newAbsoluteTarget = path.join(newCoreEventsDir, 'user-registered.integration-event');
      }
    } else if (oldAbsolute.startsWith(oldDomain)) {
      newAbsoluteTarget = oldAbsolute.replace(oldDomain, newCoreDomainDir);
    } else if (oldAbsolute.startsWith(oldInfra)) {
      newAbsoluteTarget = oldAbsolute.replace(oldInfra, newCoreInfraDir);
    } else {
      // What if the file WE ARE IN moved, but the target did NOT move?
      // e.g. Prisma or Config. We are in `contexts/core/infrastructure`, 
      // old directory was `infrastructure`. The target is `prisma`.
      if (filePath.startsWith(newCoreAppDir) || filePath.startsWith(newCoreDomainDir) || filePath.startsWith(newCoreInfraDir)) {
        // Find old location of this file
        let oldFilePath = filePath
           .replace(newCoreAppDir, oldApp)
           .replace(newCoreDomainDir, oldDomain)
           .replace(newCoreInfraDir, oldInfra);
        
        let oldTargetAbsolute = path.resolve(path.dirname(oldFilePath), importPath);
        
        // Let's compute the new relative path from current new filePath to oldTargetAbsolute (which didn't move)
        let newRel = path.relative(path.dirname(filePath), oldTargetAbsolute).replace(/\\/g, '/');
        if (!newRel.startsWith('.')) newRel = './' + newRel;
        return `from '${newRel}'`;
      }
    }
    
    if (newAbsoluteTarget) {
      let newRel = path.relative(path.dirname(filePath), newAbsoluteTarget).replace(/\\/g, '/');
      if (!newRel.startsWith('.')) newRel = './' + newRel;
      return `from '${newRel}'`;
    }
    
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', path.relative(rootDir, filePath));
  }
}

// 1. Move directories
function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, {recursive: true}); }

ensureDir(newCoreAppDir);
ensureDir(newCoreDomainDir);
ensureDir(newCoreInfraDir);
ensureDir(newCoreEventsDir);

function mv(src, dest) {
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
  }
}

const oldApp = path.join(rootDir, 'application');
const oldDomain = path.join(rootDir, 'domain');
const oldInfra = path.join(rootDir, 'infrastructure');

mv(oldApp, newCoreAppDir);
mv(oldDomain, newCoreDomainDir);
mv(oldInfra, newCoreInfraDir);

// Now move events to contracts/events!
const oldEventDir = path.join(newCoreAppDir, 'events');
if (fs.existsSync(oldEventDir)) {
   ensureDir(newCoreEventsDir);
   fs.readdirSync(oldEventDir).forEach(f => {
      // Also rename it to .integration-event.ts since someone changed it midway
      let newFname = f.replace('.event.ts', '.integration-event.ts');
      mv(path.join(oldEventDir, f), path.join(newCoreEventsDir, newFname));
   });
   fs.rmdirSync(oldEventDir);
}

const files = walk(rootDir);
files.forEach(fixImportsInFile);

