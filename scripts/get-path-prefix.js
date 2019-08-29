const getPathPrefix = pkg => {
	if (process.env.PREFIX_PATH !== 'true') {
		return '';
	}
	const { name, gatsby } = pkg;
	if (gatsby && 'pathPrefix' in gatsby) {
		return `/${gatsby.pathPrefix}`;
	}
	return `/${name}`;
};

module.exports = getPathPrefix;
