console.clear();

function cakes(recipe, available) {
    let minProducts = Infinity;
    Object.keys(recipe).forEach(key => {
        if (available[key] === undefined){
            minProducts = 0;
        } 
        const products = Math.trunc(available[key] / recipe[key]);
        if (products < minProducts) {
            minProducts = products;
        }
    });
    return minProducts;
}

// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); 
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})); 
