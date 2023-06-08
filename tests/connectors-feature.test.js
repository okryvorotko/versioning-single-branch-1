const { parseVersion } = require('../utils');
const appVersion = parseVersion(process.env.APP_VERSION);
const connectorsVersion = parseVersion(process.env.CONNECTORS_VERSION);

describe('Connectors suite @connectors', function () {
	if (appVersion <= parseVersion('2.8'))
		it(`connectors test 1 <=v2.8/any`, async function () {});
	else
		it(`connectors test 1 >v2.8/any`, async function () {});

	if (appVersion <= parseVersion('2.9'))
		if (connectorsVersion <= parseVersion('4.0'))
			it(`connectors test 2 <=v2.9/<=v4.0`, async function () {});
		else
			it(`connectors test 2 >v2.9/>v4.1`, async function () {});

	it(`connectors test 3 any/any`, async function () {});
	it(`connectors test 4 any/any`, async function () {});
	it(`connectors test 5 any/any`, async function () {});
});
