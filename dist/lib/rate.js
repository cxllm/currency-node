"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./convert"));
/**
 * Find the rate of conversion from one currency to another
 * @param from The currency to convert from
 * @param to The currency to convert to
 * @example
 * const converter = require("@cxllm/currency")
 * convertor.rate("GBP", "CAD").then(console.log);
 * // returns { from: 'GBP', to: 'CAD', rate: 1.709844, updated: 2022-01-30T00:00:00.000Z }
 */
async function rate(from, to) {
    let data = await (0, convert_1.default)(1, from, to);
    return {
        from: data.from,
        to: data.to,
        rate: data.rate,
        updated: data.updated,
    };
}
exports.default = rate;
