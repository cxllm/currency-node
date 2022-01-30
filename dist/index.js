"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("./lib/convert"));
const rate_1 = __importDefault(require("./lib/rate"));
exports.default = {
    rate: rate_1.default,
    convert: convert_1.default,
};
