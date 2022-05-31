interface Reportable {
    // name: string;
    // year: number;
    // broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic', 
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${drink.sugar} grams of calories.`
    }
}

const printSummary = (vehicle: Reportable): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken?: ${vehicle.broken}`);
    console.log(vehicle.summary());
}

printSummary(oldCivic);