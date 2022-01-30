import converter from "../index";
converter.convert(12.8, "GBP", "CAD").then(console.log); /*
{
  from: 'GBP',
  to: 'CAD',
  amount: 12.8,
  rate: 1.709844,
  conversion: 21.886,
  updated: 2022-01-30T00:00:00.000Z
}
*/
converter.rate("GBP", "CAD").then(console.log); /*
{
  from: 'GBP',
  to: 'CAD',
  rate: 1.709843,
  updated: 2022-01-30T00:00:00.000Z
}
*/
