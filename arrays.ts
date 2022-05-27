const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with map, forEach, reduce
carMakers.map((car:string): string => {return car.toUpperCase()});

// flexible (multiple types)
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');