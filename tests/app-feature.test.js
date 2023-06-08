const { parseVersion } = require('../utils');
const appVersion = parseVersion(process.env.APP_VERSION);

describe('App suite @app', function () {
	it('old test any version', async function () {});

	if (appVersion <= parseVersion('2.8'))
		it('update statistics <=2.8', async function () {});

	if (appVersion <= parseVersion('2.9'))
		it('alerter test <=2.9', async function () {});

	if (appVersion >= parseVersion('2.10')) {
		it('new test 1 >=2.10', async function () {});
		it('new test 2 >=2.10', async function () {});
	}
});
