const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');

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

const allOldFiles = walk(src);

function getNewPath(p) {
  if (p.startsWith(path.join(src, 'application', 'events'))) {
    return p.replace(path.join(src, 'application', 'events'), path.join(src, 'contexts', 'core', 'contracts', 'events')).replace('.event.ts', '.integration-event.ts');
  }
  if (p.startsWith(path.join(src, 'application'))) {
    return p.replace(path.join(src, 'application'), path.join(src, 'contexts', 'core', 'application'));
  }
  if (p.startsWith(path.join(src, 'domain'))) {
    return p.replace(path.join(src, 'domain'), path.join(src, 'contexts', 'core', 'domain'));
  }
  if (p.startsWith(path.join(src, 'infrastructure'))) {
    return p.replace(path.join(src, 'infrastructure'), path.join(src, 'contexts', 'core', 'infrastructure'));
  }
  return p; // unchanged
}

// 1. Build a map of old paths -> contents
const fileData = [];
for (const oldP of allOldFiles) {
  fileData.push({
    old: oldP,
    new: getNewPath(oldP),
    content: fs.readFileSync(oldP, 'utf8')
  });
}

// 2. Perform replacements in memory
for (const item of fileData) {
  let newContent = item.content.replace(/from\s+['"]([^'"]+)['"]/g, (match, importPath) => {
    if (!importPath.startsWith('.')) return match;
    
    // Resolve old absolute target
    let targetOldAbsolute = path.resolve(path.dirname(item.old), importPath);
    
    // Some imports omit .ts extension or point to a directory with index.ts
    // We only need the base path manipulation to be correct.
    // Let's assume targetOldAbsolute maps perfectly via getNewPath if we just pass it
    // But getNewPath is expecting an exact prefix match, which it does based on string replacement!
    
    let targetNewAbsolute = getNewPath(targetOldAbsolute);
    
    // Calculate new relative path from the NEW file path to the NEW target
    let newRel = path.relative(path.dirname(item.new), targetNewAbsolute).replace(/\\/g, '/');
    if (!newRel.startsWith('.')) newRel = './' + newRel;
    
    return `from '${newRel}'`;
  });
  
  item.newContent = newContent;
}

// 3. Commit changes to file system
function ensureDir(p) {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});
}

// Move/write files
for (const item of fileData) {
  if (item.old !== item.new) {
    if (fs.existsSync(item.old)) {
      fs.rmSync(item.old, { force: true });
    }
  }
}

for (const item of fileData) {
  ensureDir(item.new);
  fs.writeFileSync(item.new, item.newContent, 'utf8');
  if (item.content !== item.newContent) {
    console.log('Updated imports in', item.new);
  }
}

// Clean up old directories
function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeEmptyDirs(fullPath);
    }
  }
  if (fs.readdirSync(dir).length === 0) {
    fs.rmdirSync(dir);
  }
}
removeEmptyDirs(path.join(src, 'application'));
removeEmptyDirs(path.join(src, 'domain'));
removeEmptyDirs(path.join(src, 'infrastructure'));

console.log('Refactoring complete!');
