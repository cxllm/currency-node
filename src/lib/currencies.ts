// https://api.exchangerate.host/symbols

type Currency = {
	name: string;
	code: string;
};
import axios from "axios";
/**
 * List all the supported currency codes with their names
 * @example
 * const converter = require("@cxllm/currency")
 * convertor.currencies().then(console.log);
 * // returns [ { name: 'United Arab Emirates Dirham', code: 'AED' }, { name: 'Afghan Afghani', code: 'AFN' }, ... etc ]
 */
export default async function convert(): Promise<Currency[]> {
	const { data } = await axios.get("https://api.exchangerate.host/symbols");
	let currencies: Currency[] = [];
	for (const currency in data.symbols) {
		let info = data.symbols[currency];
		currencies.push({
			name: info.description,
			code: info.code,
		});
	}
	return currencies;
}
convert().then((c) => console.log(c.slice(0, 3)));
