# [@cxllm/currency](https://npmjs.com/@cxllm/currency)

This is a package that uses the [exchangerate.host](https://exchangerate.host) API for easy currency conversion within node.js. It contains methods for finding the rate and a conversion of a specific value between two different currencies.

## Installation

For installing this, please run:
`npm install @cxllm/currency`
Or, if you prefer the yarn package manager
`yarn install @cxllm/currency`

## Methods + Examples

In the examples below I will be using British Pounds (GBP) and Canadian Dollars (CAD), however they are interchangeable with other 3-character currency codes, e.g. USD (United States Dollar), TRY (Turkish Lira), AUD (Australian Dollar) etc. You can also use this library with TypeScript's import instead of require, however I just used require for the purpose of this example

### Convert Method

This is the method used for converting between 2 currencies with a specific value.
The arguments are as follows:

```js
convert(
    amount: number, // the amount to convert
    from: string, // the currency to convert from
    to: string // the currency to convert to
)

```

This returns a promise with an object containing values with these types:

```ts
from: string; // the currency converted from
to: string; // the currency converted to
amount: number; // the amount converted
rate: number; // the exchange rate
conversion: number; // the conversion of the amount
updated: Date; // the time it was last updated (a JavaScript Date object)
```

#### Example

```js
const converter = require("@cxllm/currency");
convertor.convert(12.8, "GBP", "CAD").then(console.log);
// { from: 'GBP', to: 'CAD', amount: 12.8, rate: 1.709844, conversion: 21.886, updated: 2022-01-30T00:00:00.000Z
```

### Rate Method

This is the method for finding the exchange rate between two currencies
The syntax is as follows:

```js
rate(
    from: string, // the currency to convert from
    to: string // the currency to convert to
);
```

This returns a promise with an object containing values with these types:

```ts
from: string; //the currency converted from
to: string; // the currency converted to
rate: number; // the exchange rate
updated: Date; // the time it was last updated (a JavaScript Date object)
```

#### Example

```js
const converter = require("@cxllm/currency");
convertor.rate("GBP", "CAD").then(console.log);
// { from: 'GBP', to: 'CAD', rate: 1.709844, updated: 2022-01-30T00:00:00.000Z }
```

## Support

If you require any further support, please contact me through the twitter and discord links listed [here](https://github.com/cxllm/)
