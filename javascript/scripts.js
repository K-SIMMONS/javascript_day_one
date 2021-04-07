// primitive data types
const no = false;
const yes = true;
const count = 9;
const strings = 'abc';

let score = 0;
score = 10.5;


//complex data types ( groups )
const object = {
    no : false,
    yes : true,
    number: 1,
    strings : 'abc',
}


//array notation
const array = [false, true, 1, 'abc', object];


//dot notation
alert(object.number);

//bracket notation
alert(object['number'])


h1.style.color = color;
h1.classlist.add('active')
h1.innerHTML = 'intro to cool websites that do things';

console.log(h1);
let howManyClicks = 0;


//listener
h1.addEventListener('click');

//functions
function addAClick() {
    howManyClicks += 1;
    alert(howManyClicks);
}



//to troubleshoot an error, inspect your browser and click on the console tab which will then display the error. It will show you the exact line the error is found