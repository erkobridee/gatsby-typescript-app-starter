const args = require('yargs').options({
	fontname: { alias: 'f', describe: 'define the fontname', demandOption: true },
	cssfontsurl: {
		alias: 'c',
		describe:
			"define the css fonts urls defined on the output styles file (default value: 'assets/icons/generated/')",
		demandOption: false,
	},
}).argv;

const [source] = args._;
const { fontname, cssfontsurl = '/generated/fonticons/' } = args;

if (!source || !fontname) {
	console.log(`Usage: ${args.$0} [source] -f [fontname]`);
	process.exit();
}

const webfontsGenerator = require('webfonts-generator');
const fs = require('fs');
const path = require('path');

const svgRegExp = /\.svg$/;
const destinationFolder = path.resolve(source);
const iconsFolder = path.resolve('.build/icons/', 'compressed');
const destinationCss = path.join(destinationFolder, `${fontname}.scss`);

fs.readdir(iconsFolder, (err, files) => {
	files = files.filter(file => file.match(svgRegExp));
	files = files.map(file => path.join(iconsFolder, file));

	if (err) {
		console.log(err);
		process.exit();
	}

	webfontsGenerator(
		{
			files,
			dest: destinationFolder,
			fontName: fontname,
			cssDest: destinationCss,
			cssFontsUrl: cssfontsurl,
		},
		function(err) {
			if (err) {
				console.log('Font generation failed.', err);
			} else {
				console.log('Font generation succesful.');
			}
		}
	);
});
