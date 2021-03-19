const fse = require('fs-extra');
const args = require('yargs').usage('Usage: $0 [directory name]').argv;

const [dirname] = args._;

async function createDirectory() {
  try {
    await fse.ensureDir(dirname);
  } catch (err) {
    console.log(err);
  }
}

if (dirname) {
  createDirectory();
} else {
  console.log(`Usage: ${args.$0} [directory name]`);
}
