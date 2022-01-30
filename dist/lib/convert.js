"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * Convert an amount from one currency to another
 * @param amount The amount to convert
 * @param from The currency to convert from
 * @param to The currency to convert to
 * @example
 * const converter = require("@cxllm/currency")
 * convertor.convert(12.8, "GBP", "CAD").then(console.log);
 * // returns { from: 'GBP', to: 'CAD', amount: 12.8, rate: 1.709844, conversion: 21.886, updated: 2022-01-30T00:00:00.000Z }
 */
async function convert(amount, from, to) {
    const { data } = await axios_1.default.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
    if (data.info.rate == null) {
        throw new TypeError("Invalid currency code entered.");
    }
    if (data.query.amount == null) {
        throw new TypeError("Invalid amount entered");
    }
    return {
        from: data.query.from,
        to: data.query.to,
        amount: data.query.amount,
        rate: data.info.rate,
        conversion: data.result,
        updated: new Date(data.date),
    };
}
exports.default = convert;
