const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },

    setAge (age: number): void {
        this.age = age;
    }
};

// destructuring = profile.age
// if we want to use destructuring, have to define structure - double up on destructuring 
// destructure: type of destructured property         
const { age }: { age: number } = profile;

// look inside coords property & pull out lat,lng
//                              property types:
const { coords: { lat, lng } }: { coords: { lat: number; lng: number }} = profile;