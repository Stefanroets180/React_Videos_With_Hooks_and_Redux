// console.log('destructuring');

// const person = {
//   name: 'Stefan',
//   age: 34,
//   location: {
//     city: 'Vanderbijlpark',
//     temp: 32
//   }
// };

// const {name = 'anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);


// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: '12 Rules for Life',
//   author: 'Jordan Peterson',
//   publisher: {
//     // name: 'Random House Canada Penguin Allen Lane'
//   }
// };

// const { name: publisherName = 'Self-Published'}  = book.publisher;

// console.log(publisherName); // Random House Canada Penguin Allen Lane, Self-Published

// const address = ['15 Reunert Street', 'Vanderbijlpark', '1911'];

// const [, city, province = 'Gauteng'] = address;

//console.log(`You are in ${city} ${province}.`);

const item = ['coffee', 'R22.00', 'R25.00', 'R28.00'];

const [itemName, small , medium, large] = item;

console.log(`A medium ${itemName} costs ${medium}`);






