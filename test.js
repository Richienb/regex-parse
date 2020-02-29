const test = require("ava")
const regexParse = require("regex-parse");

test("regexParse", (t) => {
	t.deepEqual(regexParse(/a/g), { main: "a", options: "g" })
	t.deepEqual(regexParse("/a/g"), { main: "a", options: "g" })
})

test("regexParse.from", (t) => {
	t.is(regexParse.from({ main: "a", options: "g" }), /a/g)
})
