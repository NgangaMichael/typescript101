var names = ['mike', 'king', 'alex'];
// names.push(3)
names.push('carol');
var numbs = [1, 2, 4, 5, 6, 6];
// numbs.push('king')
numbs.push(9);
var mixed = [1, 2, 'king', 'queen', 3, false];
mixed.push(4);
mixed.push(true);
mixed.push('mike');
// Objects 
var ninja = {
    name: 'mike',
    age: 30,
    skills: ['kick', 'punch', 'kick'],
    isAlive: true,
    isDead: false
};
// ninja.age = 'mike'
ninja.age = 20;
// if you remove one key it raises an error 
// ninja = {
//     name: 'mike',
//     age: 30,
//     skills: ['kick', 'punch', 'kick'],
//     isAlive: true,
// }
