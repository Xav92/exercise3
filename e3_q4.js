class Shape {
    constructor() {
        if(new.target === Shape) {
            throw new Error ("You cannot create an abstract class directly"); 
        
        }
    }

    area() {
        throw new Error("Implement area ");
    }

    perimeter() {
        throw new Error("Implement perimeter");
    }
}

class Square extends Shape {
    constructor(sideLength){
        super();
        this.sideLength = sideLength;
    }

    area() {
        return this.sideLength * this.sideLength;
    }

    perimeter() {
        return 4 * this.sideLength;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

try {
    const shape = new Shape();
} catch (e) {
    console.log(e)
}