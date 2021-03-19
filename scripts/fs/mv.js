const fse = require('fs-extra');
const args = require('yargs').usage('Usage: $0 [source] [destination]').argv;

const [src, dest] = args._;

async function move() {
  try {
    await fse.move(src, dest, { overwrite: true });
  } catch (err) {
    console.log(err);
  }
}

if (src && dest) {
  move();
} else {
  console.log(`Usage: ${args.$0} [source] [destination]`);
}
