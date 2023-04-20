const test = require('ava');
const otm = require('..');

const groundTruths = [

	[0,
		26.25,
		52.5,
		78.75,
		105,
		130,
		155,
		180,
		205,
		230,
		258.666_666_7,
		287.333_333_3,
		316,
		344.666_666_7,
		373.333_333_3,
		402,
		421.333_333_3,
		440.666_666_7,
		460,
		474.285_714_3,
		488.571_428_6,
		502.857_142_9,
		517.142_857_1,
		531.428_571_4,
		545.714_285_7,
		560,
		570,
		580,
		590,
		600],

];

// Example 1 idf1 = 0.5 and ideucl = 0.37
const predictionsA = [

	[0,
		26.25,
		52.5,
		78.75,
		10,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null],

	[null,
		null,
		null,
		null,
		105,
		130,
		155,
		180,
		205,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null],

	[null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		230,
		258.666_666_7,
		287.333_333_3,
		316,
		344.666_666_7,
		373.333_333_3,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null],

	[null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		402,
		421.333_333_3,
		440.666_666_7,
		460,
		474.285_714_3,
		488.571_428_6,
		502.857_142_9,
		517.142_857_1,
		531.428_571_4,
		545.714_285_7,
		560,
		570,
		580,
		590,
		600],
];

test('idEucl on track A', t => {
	const result = otm.idEucl({
		groundTruths,
		predictions: predictionsA,
		distFn: (a, b) => Math.abs(a - b),
		threshold: 0.5,
	});
	t.true(Math.abs(result - 0.37) < 1e-1);
});

// Example 2 idf1 = 0.5 and ideucl = 0.67

const predictionsB = [

	[0,
		26.25,
		52.5,
		78.75,
		105,
		130,
		155,
		180,
		205,
		230,
		258.666_666_7,
		287.333_333_3,
		316,
		344.666_666_7,
		373.333_333_3,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null],

	[null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		402,
		421.333_333_3,
		440.666_666_7,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null],

	[null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		460,
		474.285_714_3,
		488.571_428_6,
		502.857_142_9,
		517.142_857_1,
		531.428_571_4,
		545.714_285_7,
		null,
		null,
		null,
		null,
		null],

	[null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		560,
		570,
		580,
		590,
		600],
];

test('idEucl on track B', t => {
	const result = otm.idEucl({
		groundTruths,
		predictions: predictionsB,
		distFn: (a, b) => Math.abs(a - b),
		threshold: 0.5,
	});
	t.true(Math.abs(result - 0.62) < 1e-1);
});
