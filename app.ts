
var myName: string = 'Josh';
const states: number = 50;
var result: number = (5 + 4);

 function sayHello(): void{
   alert("Hello World");
}
sayHello();

function checkAge(name: string, age: number){
    if(age<21){
        console.log('Sorry ' + name + " you aren't old enough to view this page!")
    }
}

checkAge('Charles',21);
checkAge('Abby',27);
checkAge('James',18);
checkAge('John', 17);

let myVeggies: string[] = ['brussle sprouts', 'broccoli', 'corn'];

for (let i of myVeggies){
    console.log(i);
}

interface petObject {
    name: string;
    breed: string;
}

let pet: petObject = {
    name: 'Sandy',
    breed: 'Husky'
}

for (let i in pet){
    console.log(pet[i]);        
}

interface IArray {
    name: string;
    age: number;
}

let myArray: IArray[] = [
    {name : 'Amber', age: 28},
    {name : 'Anthony', age: 29},
    {name : 'Sloan', age: 1},
    {name : 'Carter', age: 5},
    {name : 'Gary', age: 75}
];


for(let i=0; i < myArray.length; i++){
   checkAge(myArray[i].name, myArray[i].age);
};

function getLength(word: string){
  var stringLength = word.length; 
  console.log(stringLength);
    if (stringLength % 2 == 0){
        console.log('The world is nice and even!');
    } else {
        console.log('The world is an odd place!');
    }
}

getLength('Hello World'); 