module.exports = {
	"configuration": {
		"reportManager": {
			"reporter": [
				{ "type": "Spec", "progress": false },
				{ "type": "List", "progress": false },
				{ "type": "Duration" },
				{ "type": "Junit", path: "junit.xml" },
				{ "type": "Tap", path: "tap.txt" }
			]
		},
		"coverage": {
			"active": true, // Activate coverage

			"path": "./coverage" // This is the default path
			// Add here any other coverage configuration.
			// See below for more information
		}
	},

	"tasks": [
		[{
			"type": "mocha",
			"title": "Everything",
			"suite": true,
			"configuration": {
				"paths": [__dirname + "/mocha/test1.js"]
			}
		},
		{
			"type": "mocha",
			"title": "Calculations",
			"suite": true,
			"configuration": {
				"paths": [__dirname + "/mocha/test2.js"]
			}
		}],
		{
			"type": "mocha",
			"title": "Phrasing",
			"suite": true,
			"configuration": {
				"paths": [__dirname + "/mocha/test3.js"]
			}
		}
	]
};
