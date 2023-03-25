//This is my first javascript code
console.log('Hello word');

// ----->   Variables
let firstName = 'Shahzaib';
var lastName =' Islam'
console.log(firstName + lastName);

// ----->   Constant
const interestRate = 0.3;
// interestRate = 1; \\ it is error because value of constant variable doses not change throughout the program
console.log(interestRate);

// ----->   Primitive datatypes / value datatypes
let name = 'Shahzaib';
console.log(name);
let age = 21;
console.log(age);
let isApproved = true;
console.log(isApproved);
let fName = undefined;
console.log(fName);
let selectColor = null;
console.log(selectColor)

// ----->   Dynamic datatypes
console.log(typeof name);
name = 1;
console.log(typeof name);

// ----->   Objects
// let name1 = 'Shahzaib';
// let myAge = '21';
//same as below
let person = {
    name1: 'Shahzaib',
    myAge: 21
};
console.log(person);
// Dote notation
person.name1 = 'Islam';
console.log(person.name1);
// Bracket notation
person['name1'] = 'Shahzaib';
console.log(person['name1']);
// set value in name1 through other variable myName
let myName = 'name1';
person[myName] = 'Zohaib';
console.log(person['name1']);

// ----->   Arrays
let colorSelect = ['red','blue'];
console.log(colorSelect);
console.log(colorSelect[0]);
console.log(colorSelect[1]);
colorSelect[2] = 'yellow';
colorSelect[3] = 1;
console.log(colorSelect);
console.log(colorSelect.length);
console.log(colorSelect.indexOf('blue'));

// ----->   Function
// Performing a task
function greet()
{
    console.log('Hello World')
}
greet();

function greet1(name)
{
    console.log('Hello ' + name)
}
greet1('Shahzaib');

function greet2(fName, lName)
{
    console.log('Hello ' + fName + ' ' + lName)
}
greet2('Shahzaib','Islam');

// Calculate and return a value
function square(number)
{
    return number * number;
}
console.log(square(2))

// ----->   Operators
// (1) Arithmetic operator

let x = 10;
let y = 3;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);
//Increment (++)
x = 10;
console.log(++x);
x = 10;
console.log(x++);
console.log(x);
//Decrement (--)
x = 10;
console.log(--x);

// (2) Comparison operatior
x = 1;
//Relational operator
console.log(x>1);
console.log(x<1);
console.log(x>=1);
console.log(x<=1);
//Equality operator
//(1) Strict equlity (Value + type)
console.log(1===1);
console.log('1'===1);
//(2) Lose equality (value)
console.log(1==1);
console.log('1'==1);

// (3) Ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type)

// (4) Logical operator
// AND (&&)
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);
//OR (||)
let highIncome1 = true;
let goodCreditScore1 = false;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;
console.log('Eligible:', eligibleForLoan1);
//Non bollean value
let userColor = undefined;
let defaultColor = 'blue';
console.log(userColor || defaultColor);
//NOT (!)
let eligibleForLoan2 = ! eligibleForLoan1;
console.log('Applocation Refused:', eligibleForLoan2);

// (5) Bitwise operator
console.log(1 | 2);
console.log(1 & 2);

// example
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let permission = 0;

permission = permission | readPermission | writePermission;
let readMessage = (permission & readPermission) ? 'Yes' : 'No';
console.log('Read Permission:', readMessage);
let executeMessage = (permission & executePermission) ? 'Yes' : 'No';
console.log('Execute Permission:', executeMessage);

// ----->   Swapping variables
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// ----->   if else
let hour = 10;
if(hour>=6 && hour<12)
{
    console.log('Good morning');
}
else if(hour>=12 && hour < 18)
{
    console.log('Good afternoon');
}
else
{
    console.log('Good evening');
}

// ----->   switch case
let role = 'guest';
switch(role)
{
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// ----->   Loops
// (1) for loop
for(let i = 0; i<5; i++)
{
    console.log(i,'Hello world');
}
// (2) while loop
let j = 0;
while(j<=5)
{
    if(j%2 !== 0)
    {
        console.log(j);
    }
    j++;
}
// (3) do while loop
j = 0;
do
{
    if(j%2 !== 0) console.log(j);
    j++;
}
while(j<=5);
// (4) for in loop
const p = {
    myName:'Shahzaib',
    myAge: 21
}
for(let i in p)
{
    console.log(i, p[i]);
}
const colors = ['red', 'green','blue'];
for(let i in colors)
{
    console.log(i, colors[i]);
}
// (5) for of loop
for(let i of colors)
{
    console.log(i);
}

// ----->   Excrcise 10.10
function max(num1,num2)
{
    let maximum;
    if(num1>num2) maximum = num1;
    else maximum = num2;
    return maximum;
}
console.log(max(10,11));

// ----->   Excrcise 11.11
console.log('Picture is landscape:', isLandscape(800,600));
function isLandscape(width,height)
{
    return(width>height);
}
// ----->   Excrcise 12.12
const output = fizzBuzz(true);
console.log(output);
function fizzBuzz(number)
{
    if(number % 3 === 0 && number % 5 === 0)
    {
        return 'FizzBuzz';
    }
    else if(number % 3 === 0)
    {
        return 'Fizz';
    }
    else if(number % 5 === 0)
    {
        return 'Buzz';
    }
    else if(typeof number === 'number')
    {
        return number;
    }
    else
    {
        return 'Not a number';
    }
}

// ----->   Excrcise 13.13
checkSpeed(129);
function checkSpeed(speed)
{
    if(speed <75) console.log('Ok');
    else if(speed>129) console.log('License suspended');
    else
    {
        let pointsValue = speed - 70;
        let points = pointsValue / 5;
        points = Math.floor(points);
        console.log('Points:', points);
    }
}
// ----->   Excrcise 14.14
showNumber(15);
function showNumber(limit)
{
    for(let i = 0; i<=limit; i++)
    {
        if(i%2 === 0) console.log(i,'EVEN')
        else console.log(i,'ODD')
    }
}

// ----->   Excrcise 15.15
const array = [0, null, undefined, 2, 3, 'Shahzaib'];
console.log(countTruthy(array));

function countTruthy(array)
{
    let count = 0;
    for(let i of array)
    {
        if(i) count++;
    }
    return count;
}

// ----->   Excrcise 16.16
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);
function showProperties(obj)
{
    for(let i in obj)
    {
        if(typeof obj[i]==='string')
            console.log(i, obj[i]);
    }
}

// ----->   Excrcise 17.17
console.log(sum(10));

function sum(limit)
{
    let countSum = 0;

    for(let i = 0; i<=limit; i++)
    {
        if(i%3===0 || i%5===0) countSum = countSum + i;
    }

    return countSum;
}

// ----->   Excrcise 18.18
const marks = [80, 80, 50];
console.log(calculateGrade(marks));
function calculateGrade(marks)
{
    let totalNumber = 0;
    for(let i of marks)
    {
        totalNumber += i;
    }
    let average = Math.floor(totalNumber/marks.length);
    if(average>0 && average<60) return 'F';
    else if(average>=60 && average<70) return 'D';
    else if(average>=70 && average<80) return 'C';
    else if(average>=80 && average<90) return 'B';
    else if(average>=90 && average<=100) return 'A';
    else return 'Wrong input';
}

// ----->   Excrcise 19.19
showStars(10);
function showStars(rows)
{
    for(let i = 1; i <= rows; i++)
    {
        let pattern = '';
        for(let j = 0; j < i; j++)
        {
            pattern += '*';
        }
        console.log(pattern);
    }
}

// ----->   Excrcise 20.20
showPrime(20);
function showPrime(limit)
{
    for(let i = 2; i <= limit; i++)
    {
        let flag = false;
        for(let j = 2 ; j < i; j++)
        {
            if(i % j === 0)
            {
                flag = true;
                break;
            }
        }
        if(flag === false) console.log(i);
    }
}

// ----->   Objects lecture 5
// Basics
const circle  = {
    radious:1,
    location:{
        x:1,
        y:1
    },
    draw: function()
    {
        console.log('Draw')
    }
};
circle.draw();

// ----->   Factory function
//big way to write code
function createCircle(radious,location)
{
    const circle_obj  = {
        radious:radious,
        location:location,
        draw: function()
        {
            console.log('Draw')
        }
    };
    return circle_obj;
}

const circle1 = createCircle(1,1);
console.log(circle1);
circle1.draw();
console.log(circle1.radious);
//little way to write same above factory function
function createCircle1(radious,location)
{
    return {
        radious,// directoly assign value to radious variable because variable and parameter have same name
        location,
        draw()//short way
        {
            console.log('Draw')
        }
    };
}
//object one / function call
const circle2 = createCircle1(2,1);
console.log(circle2);
circle2.draw();
console.log(circle2.radious);
//object two / function call again
const circle3 = createCircle1(3,2);
console.log(circle3);
circle3.draw();
console.log(circle3.radious);
console.log(circle3.location);

// ----->   constructor function
function Circle(r,l)
{
    this.r=r;
    this.l=l;
    this.draw = function()
    {
        console.log('draw');
    }
}
const c1 = new Circle(1,1);
console.log(c1);

// ----->   Dynamic nature of objects
const circle4 = {
    radious4:1
};
//It will show error beacause type of circle4 is constant then not assign new object to corcle4 variable
// circle4 = { 
//     radious5:2
// };
circle4.color = 'yellow';
circle4.draw4 = function(){
    console.log('draw');
}
console.log(circle4);
circle4.draw4();

delete circle4.color;
delete circle4.draw4;
console.log(circle4);

// ----->   Value vs reference type
// Example 1
console.log('Value type');
let x1 = 10;
let y1 = x1;
x1 = 20;
console.log(x1);
console.log(y1);
console.log('Reference type');
let x2 = {value:10};
let y2 = x2;
x2.value = 20;
console.log(x2);
console.log(y2);
// Example 2
console.log('Value type');
let n = 10;
function increase(n)
{
    n++;
}
increase(n);
console.log(n);
console.log('Reference type');
let n1 ={value:10};
function increase(n1)
{
    n1.value++;
}
increase(n1);
console.log(n1);

// ----->   Enumerating properties of an object
const circle5 = {
    radious5 : 1,
    draw5(){
        console.log('draw');
    }
};
for (let key in circle5)
{
    console.log(key, circle5[key]);
}
for (let key of Object.keys(circle5))
{
    console.log(key, circle5[key]);
}
for (let entry of Object.entries(circle5))
{
    console.log(entry);
}

if('radious5' in circle5) console.log('yes');
if('color' in circle5) console.log('yes');// color is not property of circle5 then this condition of if is false

// ----->   Clone an object
// use circle5 oject
// one way
const another = {};
for (let key in circle5)
    another[key] = circle5[key];
console.log(another);
// second way
const another1 = Object.assign({}, circle5);
console.log(another1);
// third way
const another2 = {...circle5};
console.log(another2);

// ----->   Math
console.log(Math.random());
// Get rendom value between 20 and 30
function getRandomArbitrary(min,max)
{
    return Math.random()*(max-min)+min;
}
console.log(getRandomArbitrary(20,30));
console.log(Math.round(1.9));
console.log(Math.round(1.3));
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

// ----->   String
// (1) String primitive
let message = ' This is my first message ';
console.log(message);
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('y'));
console.log(message.includes('not'));
console.log(message.startsWith('T'));
console.log(message.startsWith('t'));
message = message.trim();
console.log(message);
console.log(message.split(' '));

// ----->   Template literals

const m =
`Hi john
Thank you for joining`;
console.log(m);
// with variables and expressions
const name2 = 'john';
const m1 =
`Hi ${name2} ${2+3},
Thank you for joining`;
console.log(m1);

// ----->   Date
// object creation
const date1 = new Date();
console.log(date1);
console.log(date1.toDateString());
// object creation
const date2 = new Date('August 21 2022 09:41');
console.log(date2);
// object creation
const date3 = new Date(2022,7,21,9,42);
console.log(date3);
console.log(date3.getFullYear());
date3.setFullYear(2021);
console.log(date3);
console.log(date3.getFullYear());
date3.setFullYear(2022);
console.log(date3);

// ----->   Excrcise 15.15 Address object
const address = {
    streat : 51,
    city : 'Lahore',
    zipCode : 5100
};
function showAddress(address)
{
    for(let i in address)
        console.log(i,':', address[i]);
}
showAddress(address);

// ----->   Excrcise 16.16 Factory And constructor Function
// Factory function
function addressFactory(streat,city,zipCode)
{
    return {
        streat,
        city,
        zipCode,
    };
}

const addressF = addressFactory(51,'Lahore',5100);
console.log(addressF);
// constructor
function AddressConstructor(streat,city,zipCode)
{
    this.streat = streat;
    this.city = city;
    this.zipCode = zipCode;
}
const addressC = new AddressConstructor(51,'Lahore',5100);
console.log(addressC);

// ----->   Excrcise 17.17
// use AddressConstructor
const add1 = new AddressConstructor('a','b','c');
const add2 = new AddressConstructor('a','b','c');
const add3 = add1;

function isEqual(add1,add2)
{
    return add1.streat === add2.streat && add1.city === add2.city  && add1.zipCode === add2.zipCode;   
}

function isSame(add1,add2)
{
    return add1 === add2;
}
console.log(isEqual(add1,add2));
console.log(isSame(add1,add2));
console.log(isSame(add1,add3));

// ----->   Excrcise 18.18
let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'a', body: 'b'}
    ],
    isLive: true
};
console.log(post);

// ----->   Excrcise 20.20
let priceRange = [
    { lable: '$', tooltip: 'Inexpensive', min: 0, max: 10},
    { lable: '$$', tooltip: 'Moderator ', min: 11, max: 20},
    { lable: '$$$', tooltip: 'Expensive', min: 21, max: 30},
];
console.log(priceRange[0]);
console.log(priceRange[1]);
console.log(priceRange[2]);
console.log(typeof priceRange[0]);

// Array section 6
// ----->   Adding element
const numbers = [3,4];
// end
numbers.push(5,6);
console.log(numbers);
//begining
numbers.unshift(1,2);
console.log(numbers);
// Middle
numbers.splice(4,0,'a','b',1);
console.log(numbers);

// ----->   Finding element (Primitive)
console.log(numbers.indexOf(1));
console.log(numbers.indexOf('1'));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
console.log(numbers.includes(10));
console.log(numbers.indexOf(1,3));

// ----->   Finding element (Reference type)
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 1, name: 'd'},
];

const result = courses.find(function(course)
{
    return course.name === 'a';
});
console.log(result);
const result1 = courses.find(function(course)
{
    return course.name === 'b';
});
console.log(result1);
const result2 = courses.find(function(course)
{
    return course.name === 'c';
});x
console.log(result2);
const indexResult = courses.findIndex(function(course)
{
    return course.name === 'b';
});
console.log(indexResult);

// ----->   Arrow function
const indexResult1 = courses.findIndex((course)=>course.name === 'b');
console.log(indexResult);

// ----->   Removing element
const numbers1 = [1,2,3,4,5];
// End
const last = numbers1.pop();
console.log(last,numbers1);
// Beginning
const start = numbers1.shift();
console.log(start,numbers1);
//Middle
console.log(numbers1);

// ----->   Combinning and slicing
let first = [1,2,3,4];
let second = [5,6];

let combine = first.concat(second);
console.log(combine);
// Slicing
let slice = combine.slice(2,4);
console.log(slice);
slice = combine.slice(2);
console.log(slice);
slice = combine.slice();
console.log(slice);

// ----->   Spread operator
// use first and second array of previous lecture
console.log('Spread operator');
combine = [...first,...second,'a','b'];
console.log(combine);
//copy
let copy = [...combine];
console.log(copy);

// ----->   Iterating an array
// use combine array 
for(let i of combine)
    console.log(i);
// with forEach function
combine.forEach(function(number)
{
    console.log(number);
});
// same function with arrow function
combine.forEach((number,index)=> console.log(index,number));

// ----->   Joining arrays
let numbers2 = [1,2,3];
let joined = numbers2.join(',');
console.log(joined);

let message1 = 'This is my first message';
let parts = message1.split(' ');
console.log(parts);
joined = parts.join('-');
console.log(joined);

// ----->   Sorting arrays
numbers2 = [2,3,1];
numbers2.sort();
console.log(numbers2);
numbers2.reverse();
console.log(numbers2);
// Sorting with objects
let courses1 = [
    {id:1, name:'Node.js'},
    {id:2, name:'javaScript'},
];
courses1.sort(function(a,b){
    //Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses1);

// ----->   Testing thr elements of an array
let numberArray = [1,2,3];
// every()
let allPositive = numberArray.every(function(value)
{
    return value >= 0;
});
console.log(allPositive);

let numberArray1 = [1,-2,2,3];
allPositive = numberArray1.every(function(value)
{
    return value >= 0;
});
console.log(allPositive);
// some() work with numberArray1
let atLeastOnePositive = numberArray1.some(function(value)
{
    return value >= 0;
});
console.log(atLeastOnePositive);

// ----->   Filter an array
// use numberArray1 for this code

let filteredArray = numberArray1.filter( v => v >= 0);// Filter positive number
console.log(filteredArray);
filteredArray = numberArray1.filter( v => v < 0);// Filter negative number
console.log(filteredArray);

// ----->   Mapping an array
numberArray1 = [1,-2,2,3];
filteredArray = numberArray1.filter( v => v >= 0);
let items = filteredArray.map(n => '<li>' + n + '</li>');
console.log(items);
let html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// chaning method
let items1 = numberArray1
    .filter( v => v >= 0)
    .map(n => ({value:n}))
    .map(obj => obj.value);
console.log(items1);

// ----->   Reducing an array
numberArray1 = [1,-1,2,3];
let sum1 = 0;

for(let i of numberArray1)
    sum1 += i;
console.log(sum1);

// With reduce function in which use numberArray
let sum2 = numberArray.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
},0);
console.log(sum2);
// without assign value to accumulator parameter 
sum2 = numberArray1.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
});
console.log(sum2);

// ----->   Exercise 17.17
let result3 = arrayFromRange(-10,-4);
console.log(result3);
function arrayFromRange(min,max)
{
    let output = [];
    for(let i = min; i <= max ; i++)
        output.push(i);
    return output;
}

// ----->   Exercise 18.18  
let numb = [1,2,3,4];
console.log(include(numb,1));
function include(array,searchElement)
{
    for(let i of array)
        if(i === searchElement)
            return true;
    return false;
}

// ----->   Exercise 19.19
numb = [1,2,3,4,1,1];
let exceptOutput = except(numb,[1,2]);
console.log(exceptOutput);
function except(array, excluded)
{
    let output =[];
    for(let i of array)
    {
        if(!excluded.includes(i)) output.push(i);
    }
    return output;
}

// ----->   Exercise 20.20
numb = [1,2,3,4];
let moveOutput = move(numb,3,-3);
console.log(moveOutput);
function move(array, index, offset)
{
    let output = [...array];
    if((index + offset)>= array.length ||(index + offset)<0 )
    {
        console.error('Invalid offset');
        return;
    }
    let element = output.splice(index,1)[0];//[0] is not understard
    console.log(element);
    output.splice(index+offset,0,element);
    return output; 
}

// ----->   Exercise 21.21
numb = [1,2,3,4,1];
const count = countOccurrences(numb,1);
console.log(count);
function countOccurrences(array, searchElement)
{
    return array.reduce((accumulator, current) =>{
        let occurrence = (current === searchElement)? 1 : 0;
        return accumulator + occurrence;
    },0);
}

// ----->   Exercise 22.22
numb = [1,2,3,4,5];
let maximum = getMax(numb);
console.log(maximum);
function getMax(array)
{
    // if(array.length===0) return undefined;
    // let value = array[0];
    // for(let i of array)
    // {
    //     if(value < i)
    //     {
    //         value  = i;
    //     }
    // }
    // return value;
    // other way with reduce function
    // let maxValue = 0;
    // return array.reduce((accumulator, current)=>{
    //     maxValue = (current > maxValue)? current : maxValue;
    //     return maxValue + 0;
    // },0)
    // Same as above but short code
    return array.reduce((accumulator, current)=>(accumulator > current)? accumulator : current);
}

// ----->   Exercise 23.23
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);

// Functions section 7
// ----->   Function declaration vs expressions
// Function declaration
function walk()
{
    console.log('walk');
}
walk();
let move2 = walk;
move2();
// Anonynous function expression
let run = function()
{
    console.log('run');
}
run();
let move1 = run;
move1();
// Named function expression
let run1 = function run2()
{
    console.log('runnnnnn');
}
run1();
console.log(run1.name);//return name of function

// ----->   Arguments
function sum(a,b)
{
    return a + b;
}
console.log(sum(2,3));
console.log(sum(2));
console.log(sum(1,2,3,4,5));
console.log(sum());
// Pass more the required parameters
console.log('Pass more the required parameters');
function totalSum(a,b)
{
    let total = 0;
    // console.log(arguments);
    for(let i of arguments)
        total += i;
    return total;
}
console.log(totalSum(1,2,3,4,5));

// ----->   The rest operator
console.log('The rest operator');
// example 1
function totalOfValues(...args)
{
    return args.reduce((a,b) => a + b);
}
console.log(totalOfValues(1,2,3,4,5));
// example 2
function totalPrice(discount, ...prices)
{
    let total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}
console.log(totalPrice(0.1,20,30));

// ----->   Default parameters
console.log('Default parameters')
// (1) in old version
function interest(principal,rate,years)
{
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}
console.log(interest(10000));
// (2) in new version
function interest1(principal,rate = 3.5,years = 5)
{
    return principal * rate / 100 * years;
}
console.log(interest1(10000));
// Also write default parameters at the end of parameter list
function interest2(principal,rate = 3.5,years)
{
    return principal * rate / 100 * years;
}
console.log(interest2(10000,5));
console.log(interest2(10000,undefined,5));

// ----->   Setter and Getter
console.log('Setter and Getter');
let dataOFPerson = {
    firstName: 'Shahzaib',
    lastName: 'Islam',
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value)
    {
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(dataOFPerson.fullName);
dataOFPerson.fullName = 'Haider Saeed';
console.log(dataOFPerson.fullName);
console.log(dataOFPerson);

// ----->   try and catch
console.log('Try and Catch');
let dataOFPerson1 = {
    firstName: 'Shahzaib',
    lastName: 'Islam',
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value)
    {
        if(typeof value !== 'string')
            throw new Error('Value is not a string');
        
        let parts = value.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter a first and last name.');
        
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(dataOFPerson1.fullName);
try{
    dataOFPerson1.fullName = 'Haider Saeed';
}
catch(e)
{
    alert(e);
}
console.log(dataOFPerson1.fullName);
console.log(dataOFPerson1);

// ----->   let and var
function start1()
{
    for(var i = 0; i<5; i++)
    {
        console.log(i);
    }
    console.log(i);
}

start1();
function start2()
{
    for(var i = 0; i<5; i++)
    {
        if(true)
        {
            var color = 'red';
        }
    }
    console.log(color);
}
start2();

var color = 'yellow';
let age1 = 21;
console.log(window.color);
console.log(window.age);

// ----->   The this keyword
// method of a object
const video = {
    title: 'a',
    play()
    {
        console.log(this);
    }
}
video.play();

video.stop = function()
{
    console.log(this);
}
video.stop();
// regular function
function playVideo()
{
    console.log(this)
}
playVideo();

// constructor
function Video(title)
{
    this.title = title;
    console.log(this);
}
const v = new Video('b');

// with callback function
const video2 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags()
    {
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
};
video2.showTags();

// ----->   changing this
console.log('Self approach');
const video3 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags()
    {
        const self = this;
        this.tags.forEach(function(tag){
            console.log(self.title,tag);
        });
    }
};
video3.showTags();
// bind method
console.log('bind() method');
const video4 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags()
    {

        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        }.bind(this));
    }
};
video4.showTags();
// arrow function
console.log('arrow function');
const video5 = {
    title: 'a',
    tags: ['a','b','c'],
    showTags()
    {

        this.tags.forEach(tag => {
            console.log(this.title,tag);
        });
    }
};
video5.showTags();

// call, apply and bind methods

function myVideo()
{
    console.log(this);
}
myVideo.call({name:'a'});
myVideo.apply({name:'b'});
const fn = myVideo.bind({name:'c'});
fn();
myVideo();

// ----->   Excercise 12.12
console.log('Excercise 12.12');
console.log(sumOf12(1,2,3,4));
function sumOf12(...args)
{
    if(args.length === 1 && Array.isArray(args[0]))
    {
        args = [...args[0]];
    }
    return args.reduce((a,b) => a+b );
}

// ----->   Excercise 13.13
console.log('Excercise 13.13');
const areaOfCircle = {
    radious: 1,
    get area()
    {
        return Math.PI * this.radious *this.radious;
    }
};
console.log(areaOfCircle.area);
areaOfCircle.area = 20;
console.log(areaOfCircle.area);
areaOfCircle.radious = 30;
console.log(areaOfCircle.area);

// ----->   Excercise 14.14
console.log('Excercise 14.14');
try{
    numb = [1,2,3,4,1];
    const countNumbers = countOccurrences1(true,1);
    console.log(countNumbers);
}
catch(e)
{
    console.log(e.message);
}
function countOccurrences1(array, searchElement)
{
    if(!Array.isArray(array))
        throw new Error('Invalid array');

    return array.reduce((accumulator, current) =>{
        let occurrence = (current === searchElement)? 1 : 0;
        return accumulator + occurrence;
    },0);
}

// tonary operator

const ok = 5 > 3;
console.log(ok);

console.log((ok)? 'T' : 'F');