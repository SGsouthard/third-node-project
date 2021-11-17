const faker = require('faker');

function helloRando() {
    let x = faker.name.findName();
    return "Hello there, " + x + ".";
}

function goodbyeRando() {
    let x = faker.name.findName();
    return "Goodbye then, " + x + ".";
}

function addNumbers(num1, num2) {
    num1 = 69;
    num2 = 420;
    return num1 + num2;
}

const person = {
    name: faker.name.findName(),
    age: 30,
    foods: ["hot dog", "french fry"],
    address: {
        streetAddress: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode() 
    }
}

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.introduction = function () {
            return 'hi';
        }
    }
}

module.exports = {
    hello: helloRando,
    goodbye: goodbyeRando,
    add: addNumbers,
    human: Human,
    person
}