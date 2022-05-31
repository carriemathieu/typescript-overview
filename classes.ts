class Vehicle {
    // color: string; // color: string = 'red'... if no constructor

    // public drive(): void {
    //     console.log('chugga chugga');
    // }

    // 'public color' is same as initilizing (color: string - at top) and assigning in constructor (this.color = color)
    constructor(public color: string) {
        // this.color = color;
    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange'); // if we want to pass in an argument, need constructor

class Car extends Vehicle {

    constructor(public wheels: number, color: string) {
        super(color); // required bc parent has constructor
    }

    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
};

// const vehicle = new Vehicle();
// vehicle.drive(); // chugga chugga
// vehicle.honk(); // beep

const car = new Car(4, 'red'); // Car = child class
// car.drive(); // vroom
car.startDrivingProcess();
// car.honk(); // beep
// run in terminal: ts-node classes.ts