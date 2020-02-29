interface Result {
	/** The first part of the regex. */
	main: string

	/** The second part of the regex. */
	options?: string
}

declare const regexParse: {
	/**
	 * Parse a regex into it's individual parts.
	 * @param regex The regex to parse.
	 * @example
	 * ```
     * const regexParse = require("regex-parse");
     *
     * regexParse(/a/g);
     * //=> { main: "a", options: "g" }
	 * ```
	*/
	(regex: RegExp | string): Result

	/**
	 * Convert a parsed regex back into the original regex.
	 * @param options The options to parse.
	 * @example
	 * ```
	 * const regexParse = require("regex-parse");
     *
     * regexParse.from({ main: "a", options: "g" })
     * //=> /a/g
	 * ```
	*/
	from(options: Result): RegExp
}

export = regexParse;
