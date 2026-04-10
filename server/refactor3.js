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
  // Fix events renaming
  if (p.includes(path.join('application', 'events'))) {
    p = p.replace(path.join('application', 'events'), path.join('contexts', 'core', 'contracts', 'events'));
    p = p.replace('.event', '.integration-event');
    return p;
  }
  if (p.includes(path.join(src, 'application'))) {
    return p.replace(path.join(src, 'application'), path.join(src, 'contexts', 'core', 'application'));
  }
  if (p.includes(path.join(src, 'domain'))) {
    return p.replace(path.join(src, 'domain'), path.join(src, 'contexts', 'core', 'domain'));
  }
  if (p.includes(path.join(src, 'infrastructure'))) {
    return p.replace(path.join(src, 'infrastructure'), path.join(src, 'contexts', 'core', 'infrastructure'));
  }
  return p;
}

const fileData = [];
for (const oldP of allOldFiles) {
  fileData.push({
    old: oldP,
    new: getNewPath(oldP),
    content: fs.readFileSync(oldP, 'utf8')
  });
}

for (const item of fileData) {
  // Match `import ... from '...'` and `import { ... } from '...'`
  item.newContent = item.content.replace(/(from|import)\s+['"]([^'"]+)['"]/g, (match, keyword, importPath) => {
    if (!importPath.startsWith('.')) return match;
    
    let targetOldAbsolute = path.resolve(path.dirname(item.old), importPath);
    let targetNewAbsolute = getNewPath(targetOldAbsolute);
    
    let newRel = path.relative(path.dirname(item.new), targetNewAbsolute).replace(/\\/g, '/');
    if (!newRel.startsWith('.')) newRel = './' + newRel;
    
    return `${keyword} '${newRel}'`;
  });
}

function ensureDir(p) {
  const dir = path.dirname(p);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});
}

// Write/Delete files
for (const item of fileData) {
  ensureDir(item.new);
  fs.writeFileSync(item.new, item.newContent, 'utf8');
}
for (const item of fileData) {
  if (item.old !== item.new && fs.existsSync(item.old)) {
    fs.rmSync(item.old, { force: true });
  }
}

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
