// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var unitOfCurrency = {
    "H": 50,
    "Q": 25,
    "D": 10,
    "N": 5,
    "P": 1
  };

  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  }

  var coins = {};
  var currentCurrency = currency;

  for (var key in unitOfCurrency) {
    if (currentCurrency >= unitOfCurrency[key]) {
      var value = Math.floor(currentCurrency / unitOfCurrency[key]);
      coins[key] = value;
      currentCurrency -= value * unitOfCurrency[key];
    }
  }

  return coins;
}
