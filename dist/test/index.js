"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
index_1.default.convert(12.8, "GBP", "CAD").then(console.log); /*
{
  from: 'GBP',
  to: 'CAD',
  amount: 12.8,
  rate: 1.709844,
  conversion: 21.886,
  updated: 2022-01-30T00:00:00.000Z
}
*/
index_1.default.rate("GBP", "CAD").then(console.log); /*
{
  from: 'GBP',
  to: 'CAD',
  rate: 1.709843,
  updated: 2022-01-30T00:00:00.000Z
}
*/
