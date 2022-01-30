import convert from "./convert";
/**
 * Find the rate of conversion from one currency to another
 * @param from The currency to convert from
 * @param to The currency to convert to
 * @example
 * const converter = require("@cxllm/currency")
 * convertor.rate("GBP", "CAD").then(console.log);
 * // returns { from: 'GBP', to: 'CAD', rate: 1.709844, updated: 2022-01-30T00:00:00.000Z }
 */
export default async function rate(
	from: string,
	to: string
): Promise<{
	from: string;
	to: string;
	rate: number;
	updated: Date;
}> {
	let data = await convert(1, from, to);
	return {
		from: data.from,
		to: data.to,
		rate: data.rate,
		updated: data.updated,
	};
}
