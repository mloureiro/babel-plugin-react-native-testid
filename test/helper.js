const fs = require('fs')
const path = require('path')

const fixturesPath = path.join(__dirname, '__fixtures__')

function readFile(file) {
	return fs
		.readFileSync(file)
		.toString()
		.trim()
}

function buildTestArguments({ type }) {
	return fs.readdirSync(fixturesPath).map(directory => {
		try {
			return ({
				code: readFile(path.join(fixturesPath, directory, 'code.js')),
				name: directory,
				output: readFile(
					path.join(fixturesPath, directory, `${type}.output.js`)
				)
			})
		} catch (e) {
			return null
		}
	})
		.filter(Boolean)
}

module.exports = { buildTestArguments }
