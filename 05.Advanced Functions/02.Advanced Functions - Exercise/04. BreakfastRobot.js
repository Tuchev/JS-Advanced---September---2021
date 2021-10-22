function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function act(command) {
        const tokens = command.split(' ');
        action = tokens[0];

        if (action === 'restock') {
            const element = tokens[1];
            const quantity = Number(tokens[2]);
            ingredients[element] += quantity;
            return 'Success';
        } else if (action === 'prepare') {
            const product = tokens[1];
            const quantity = tokens[2];
            const recipe = recipes[product];

            for (const ingredient of Object.keys(recipe)) {
                const availableQuantity = ingredients[ingredient];
                const neededQuantity = recipe[ingredient] * quantity;

                if (availableQuantity < neededQuantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const ingredient of Object.keys(recipe)) {
                const neededQuantity = recipe[ingredient] * quantity;
                ingredients[ingredient] -= neededQuantity;
            }
            return 'Success';
        } else {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }

    return act;
}

let manager = solution();
console.log(manager('restock flavour 50'));
console.log(manager('prepare lemonade 4'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));