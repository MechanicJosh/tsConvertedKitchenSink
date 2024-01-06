
var myName = 'Josh';
const states = 50;
var result = (5 + 4);

 function sayHello(){
   alert("Hello World");
}
sayHello();

function checkAge(name, age){
    if(age<21){
        console.log('Sorry ' + name + " you aren't old enough to view this page!")
    }
}

checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John', 17);

let myVeggies = ['brussle sprouts', 'broccoli', 'corn'];

for (let i of myVeggies){
    console.log(i);
}

let pet = {
    name: 'Sandy',
    breed: 'Husky'
}

for (let i in pet){
    console.log(pet[i]);        
}

let myArray = [{name : 'Amber', age: 28},
               {name : 'Anthony', age: 29},
               {name : 'Sloan', age: 1},
               {name : 'Carter', age: 5},
               {name : 'Gary', age: 75}];


for (i=0; i < myArray.length; i++){
   checkAge(myArray[i].name, myArray[i].age);
};

function getLength(word){
  var stringLength = word.length; 
  console.log(stringLength);
    if (stringLength % 2 == 0){
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}

getLength('Hello World'); 



