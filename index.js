const faker = require('faker');
const myModule = require('./utilities/myModule');

const numbers = [1,2,3,5,8,13];
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

console.log(numbers);
console.log(person.foods);

console.log(myModule);

myModule.hello();
console.log(myModule.hello());

const fs = require('fs');

fs.readFile('story.txt', 'utf8', function(err, data){
    if(err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});

const http = require('http');

// http.createServer((req, res) => { 
//    res.write('Goodbye, World!');
//    res.end();
// })
// .listen(8000);

let randomName = faker.name.findName();
console.log(randomName);

const randomAddress = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode()
}
console.log(randomAddress);

const axios = require('axios'); // allows to make API calls and retrieve data...

// similar to fetch

axios.get('https://twitter.com/cicilunaa')
.then(function(response) {
    console.log(response.data);
})
.catch(function(err) {
    console.log(err);
});