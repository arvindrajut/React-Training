type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Arvind",
    age: 25
};

console.log(user);

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10));

interface Vehicle {
    brand: string;
    speed: number;
    drive(): string;
}

class Car implements Vehicle {
    brand: string;
    speed: number;
    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        return `${this.brand} is driving at ${this.speed} km/h`;
    }
}

const car = new Car("Tesla", 120);
console.log(car.drive());

type Status = "success" | "error";
let response: Status = "success";
console.log(response);

function fetchData(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}

fetchData().then(console.log);

enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up);

function logMessage(message: string | number): void {
    console.log(message);
}

logMessage("Hello");
logMessage(123);

type OptionalUser = {
    name: string;
    age?: number;
};

const optionalUser: OptionalUser = {
    name: "John"
};
console.log(optionalUser);

function processInput(input: unknown) {
    if (typeof input === "string") {
        console.log("Input is a string", input);
    } else if (typeof input === "number") {
        console.log("Input is a number", input);
    }
}

processInput("Test");
processInput(42);

const readonlyArray: readonly number[] = [10, 20, 30];
console.log(readonlyArray);

type Point = { x: number; y: number };
const point: Point = { x: 5, y: 10 };
console.log(point);

const tuple: [string, number] = ["Age", 30];
console.log(tuple);

class Singleton {
    private static instance: Singleton;
    private constructor() {}
    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2);

async function asyncFunction() {
    const result = await fetchData();
    console.log(result);
}

asyncFunction();
