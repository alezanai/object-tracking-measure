const otm = require('..');
const test = require('ava');
const groundTruths = [
	[
		[22, 33, 20, 20], // X, y, w, h
		[22, 33, 20, 20],
		[22, 33, 20, 20],
		[22, 33, 20, 20]
	],
	[
		[22, 33, 20, 20], // X, y, w, h
		null,
		[25, 35, 20, 20],
		[39, 41, 20, 20]
	]
];

const predictions = [
	[
		[23, 33, 22, 20], // X, y, w, h
		[21, 35, 20, 26],
		[23, 33, 22, 20],
		[21, 35, 20, 26]
	],
	[
		[23, 33, 20, 20], // X, y, w, h
		null,
		[23, 35, 22, 20],
		[39, 35, 20, 26]
	]
];

const expected = '--\nGroundTruth[0]\u001B[32m✓\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m✓\u001B[39m\nPrediction[0] \u001B[32m✓\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m✓\u001B[39m\n              |----------------------------|----------------------------|---------------------------\n              0                            1                            2                           \n\n--\nGroundTruth[1]\u001B[32m✓\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m✓\u001B[39m\u001B[37m?\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m?\u001B[39m\u001B[32m✓\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m✓\u001B[39m\nPrediction[1] \u001B[32m✓\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m✓\u001B[39m\u001B[37m?\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m―\u001B[39m\u001B[37m?\u001B[39m\u001B[32m✓\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m―\u001B[39m\u001B[32m✓\u001B[39m\n              |----------------------------|----------------------------|---------------------------\n              0                            1                            2                           \n\n';

test('idInspect on simple example', t => {
	const result = otm.idDetails({
		groundTruths,
		predictions
	});

	const string1 = otm.idInspect(Object.assign({}, result, {
		columns: 100
	}));
	t.is(typeof (string1), 'string');
	t.is(string1, expected);
});

