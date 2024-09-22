var myName = 'Josh';
var states = 50;
var result = (5 + 4);
function sayHello() {
    alert("Hello World");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + " you aren't old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var myVeggies = ['brussle sprouts', 'broccoli', 'corn'];
for (var _i = 0, myVeggies_1 = myVeggies; _i < myVeggies_1.length; _i++) {
    var i = myVeggies_1[_i];
    console.log(i);
}
var pet = {
    name: 'Sandy',
    breed: 'Husky'
};
for (var i in pet) {
    console.log(pet[i]);
}
var myArray = [
    { name: 'Amber', age: 28 },
    { name: 'Anthony', age: 29 },
    { name: 'Sloan', age: 1 },
    { name: 'Carter', age: 5 },
    { name: 'Gary', age: 75 }
];
for (var i = 0; i < myArray.length; i++) {
    checkAge(myArray[i].name, myArray[i].age);
}
;
function getLength(word) {
    var stringLength = word.length;
    console.log(stringLength);
    if (stringLength % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
getLength('Hello World');
