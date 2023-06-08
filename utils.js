function parseVersion(version) {
	return Number(version.replace('.', ''));
}

module.exports = {
	parseVersion
}
