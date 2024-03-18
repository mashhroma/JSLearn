const round = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchase) => round.plus(acc, purchase), 0);
    total = round.times(total, discount);
    return total;
};

module.exports = { calculateResultSum };