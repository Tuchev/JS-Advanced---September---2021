function calcFruits(fruit, weight, price) {
    const moneyNeeded = (weight / 1000) * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}

calcFruits('orange', 2500, 1.80)