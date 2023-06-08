const { parseVersion } = require('../utils');
const appVersion = parseVersion(process.env.APP_VERSION);

describe('App suite @app', function () {
	if (appVersion <= parseVersion('2.8'))
		it('app test 1 <=2.8', async function () {});

	if (appVersion <= parseVersion('2.9'))
		it('app test 1 <=2.9', async function () {});

	it('app test 2 any', async function () {});
	it('app test 3 any', async function () {});
});
