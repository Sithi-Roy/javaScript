// object declar

let person = {
    firstName: 'Julekha',
    lastName: 'Begum',
    age: 29,
    isAdmin: true
    
};
// data add
person.nationality = 'Bangladeslhi';
// data update
person.firstName = "Rose";
// data delete
delete person.lastName;
console.log(person);
// console.log(person.firstName);
// dot notation
// let userName = person.firstName;

// bracket notation
// let userName = person['firstName'];
// console.log(userName);

let car = {
    carName: 'Royel Enfield',
    carType: 'Motorcycle',
    // nestate object
    carModel: {
        modelOne: {
            modelName: 'RoyelEnfieldBullet350',
            modelPrice: 410000,
            modelColor: 'Black'
        },
        modelTwo: {
            modelName: 'RoyelEnfieldClassic350',
            modelPrice: 405000,
            modelColor: 'SeaGreen'
        },
        modelThree: {
            modelName: 'RoyelEnfieldHunter350',
            modelPrice: 340000,
            modelColor: 'SkyBlue'
        },
        modelFour: {
            modelName: 'RoyelEnfieldMeteor350',
            modelPrice: 435000,
            modelColor: 'SkyBlue'
        }
    },
    carColor: 'Black',
    carPublishedDate: '21October,2024',
    carPrice: 410000
};
// let date = car['carPublishedDate'];
// console.log(car.carModel.modelTwo.modelPrice);
