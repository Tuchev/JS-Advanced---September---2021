class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw new TypeError('Radius must be a number.')
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Diameter must be a number.');
        }
        this._radius = value / 2;
    }

    get area() {
        return this._radius ** 2 * Math.PI;
    }
}

// const c = new Circle(4);
// console.log(c);
// console.log(c.radius);
//
// console.log(c.diameter);
// console.log(c.area);
//
// c.diameter = 5;
// console.log(c);
//
// c.diameter = 'aha';

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
