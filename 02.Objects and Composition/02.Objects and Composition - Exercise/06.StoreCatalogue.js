function storeCatalogue(arr) {
    const productCatalogue = {};

    arr.forEach((el) => {
        let [productName, price] = el.split(' : ');
        price = Number(price);

        let index = productName[0]
        if (!productCatalogue[index]) {
            productCatalogue[index] = {};
        }
        productCatalogue[index][productName] = price;

    })
    let initialSort = Object.keys(productCatalogue).sort((a, b) => a.localeCompare(b));

    for (let key of initialSort) {
        let products = Object.entries(productCatalogue[key])
            .sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);
console.log('------------------------');
storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);