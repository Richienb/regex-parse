"use strict"

// Adapted from: https://github.com/IonicaBizau/regex-parser.js/blob/a5746771c0ee2e1a3ab1557905ef734c047da0d5/lib/index.js

module.exports = (regex) => {
	const matches = regex.toString().match(/(\/?)(?<main>.+)\1(?<options>[a-z]*)/i)

	if (matches === null) throw new SyntaxError("Unable to parse regex")

	if (matches.groups.options && !(/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(matches.groups.options))) throw new SyntaxError("Invalid regular expression flags")

	return matches.groups
}

module.exports.from = ({ main, options } = {}) => new RegExp(main, options)
