class Car {
    // name: string;
    // acceleration: number;

    // constructor(name: string) {
    //     this.name = name;
    //     this.acceleration = 0;
    // }
    constructor(public name: string, public acceleration: number = 0) {

    }

    honk(): void {
        console.log(`${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

let car: Car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
