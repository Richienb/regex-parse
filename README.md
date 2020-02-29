# Regex Parse [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/regex-parse/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/regex-parse)

Parse a regex into it's individual parts.

[![NPM Badge](https://nodei.co/npm/regex-parse.png)](https://npmjs.com/package/regex-parse)

## Install

```sh
npm install regex-parse
```

## Usage

```js
const regexParse = require("regex-parse");

regexParse(/a/g);
//=> { main: "a", options: "g" }

regexParse.from({ main: "a", options: "g" })
//=> /a/g
```

## API

### regexParse(regex)

#### regex

Type: `RegExp | string`

The regex to parse.

### regexParser.from(options)

#### options

Type: `object`

##### main

Type: `string`

The first part of the regex.

##### options

Type: `string`

The second part of the regex.
