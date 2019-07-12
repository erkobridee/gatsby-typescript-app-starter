const fse = require('fs-extra');
const args = require('yargs').usage('Usage: $0 [path]').argv;

const [path] = args._;

async function remove() {
	try {
		await fse.remove(path);
	} catch (err) {
		console.log(err);
	}
}

if (path) {
	remove();
} else {
	console.log(`Usage: ${args.$0} [path]`);
}
