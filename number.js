console.log('-----------Desending Order---------------');

let arr=[8,45,65,12,23,18,5,32,1,22,3]
arr.sort((a,b)=>b-a)
console.log(arr);
console.log('');
console.log('-----------------Assending Order------------------');
arr.reverse()
console.log(arr);
console.log();
console.log('-----------------Dublicate values count------------------');
let aarr= [1,1,2,5,5,2,2,3,3,4,5,5]
 
let counts={};
aarr.forEach((x) => {
    
    counts[x]=(counts[x] || 0)+1;
    
});
console.log(counts);
// console.log(JSON.stringify(counts));

// const arr1 = [1,1,2,2,2,3,3,4,5,5,5,5]
// const counts = [];
// arr1.forEach((x) => {
//   counts[x] = (counts[x] || 0) + 1;
// });
// console.log(counts)





console.log('-----------------------Assignment Q/A----------------------------');

document.getElementById("welcm").innerText = "welcome to java script"




console.log("-----------------1. Find Largest number in an Array?  ----------------");
// or  largest number in an array 
let arr1 = [3, 6, 2, 56, 32, 5, 89, 32];
let large = arr1.sort((a, b) => {
  return b - a;
})[0];
console.log("Largest number of an array is", large);



console.log("-----------------2. Find Second Largest number in an Array?  ----------------");
// second largest number  
let secarr = [3, 6, 2, 56, 32, 5, 89, 32];

let seclarge = secarr.sort((a, b) => b - a)[1];

console.log(" Second largest number of an array is", seclarge);

console.log("----------------3.	Find the Factorial of a Number?--------------------------");
// find factorial
console.log('named functiom');
function fact(num) {
  fact = 1
  for (let i = 1; i <= num; i++) {    //here it execute from 1 to n
    fact = fact * i
  }
  console.log(fact);
}
fact(3)

console.log("------------------------ 4. Give me Random number using a Function? --------------------");
// random number using function  
function random() {
  let ram = document.getElementById("random").innerText = Math.floor(Math.random() * 1 + 2);
  console.log(ram);
}
document.getElementById("random").innerText = Math.floor(Math.random() * 10)

console.log(`----------------5.	Find the Prime numbers in an given array? 
And Check whether the given number is prime or not?--------------------`);
const ar1 = [-1, -4, 5,8,28,31,26,2,4,6]
const ress1= []
const ress2= []
function isPrime(num) {
    if(num<2){
       return false
    }else{
        for(i=2; i<num;i++){
            if(num%i===0){
                return false
            }
        }
       return true 
    }
}
ar1.forEach(function(element){
    const prime = isPrime(element)
    if(prime){
        ress1.push(element)
    }
    else{
        ress2.push(element)
    }
})
console.log(ress1);
console.log(ress2);

console.log("---------- 6.	Find the fibonocci series of the given number?----------");
// fibonocci series
function fiboSer1(num) {
  let a = 0;
  let b = 1;
  str = "";
  for (let i = 0; i < num; i++) {
    str += String(a);
    str += " ";
    c = a + b;
    a = b;
    b = c;
  }
  console.log(`for input ${num} the fibonoci series is ${str}`);
}
fiboSer1(3);


console.log("----------- 7.	Bubble sort programme?------------");
//bubble sort 
function bbsort1(bsArry) {
  for (let i = 0; i <= bsArry.length; i++) {
    for (let j = 0; j <= bsArry.length - i - 1; j++) {
      if (bsArry[j] > bsArry[j + 1]) {
        let temp = bsArry[j];
        bsArry[j] = bsArry[j + 1];
        bsArry[j + 1] = temp;
      }
    }
  }

  console.log(`the sorted array is ${bsArry}}`);
}
bbsort1([20, 3, 25, 6, 9, 8, 0, 53]);


console.log("---------- 8.	Find whether the given number is Palindrome or not?-----------------");
// polindrum 
var isPalindrome = function (entervalue) {
  if (entervalue == entervalue.split('').reverse().join('')) {
    console.log('is polinderr');
  } else {
    console.log('is not polinderr');
  }
};
isPalindrome("soos")

console.log("-----------9. Print pattern-------------");
// loop the pattern 
function pattern() {
  var n = "*"
  for (var i = 1; i <= 4; i++) {
    console.log(n.repeat(i));
  }
}



console.log("---------------10. Object Iteration Programs-------------");
// object iteration program  
const object = {
  a: 1,
  b: 2,
  c: 3
};
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}



console.log("****fetch post****");
const url='http://jsonplaceholder.typicode.com/posts'
const  fetchPosts=()=>{
    fetch(url).then((respose)=>{
        // console.log('response',respose);
        console.log( respose);
        return respose.json()
    }).then((data)=>{
        console.log('respose.json() :',data);
        return data
    })
    .then((hhh)=>{
        console.log('>>',hhh[2]);
        return hhh[2]
    }).then((srinivas)=>{
        console.log('title ',srinivas.title);
    })
    .catch(err=>{
        console.log( err);
        console.error(err.message);
    })
}
fetchPosts()








console.log("************ change the by dropdown ************");
//change the color by dropdown
function changeme(color) {
  document.body.style.background = color
}


//change color by taking input value
function changecol() {
  let co = document.getElementById('changecolorofcolor').value;
  document.body.style.backgroundColor = co;
  document.getElementById("changecolor").value = co
  document.body.style.color = "white"
}

console.log("************  store the even and odd in different array ************");
// store the array into even and odd in separate array
var h = [06, 03, 02, 13, 04, 05, 12, 07, 09, 01, 11, 22];
console.log('main array ', h);
o = [];
e = [];
for (var i = 0; i < h.length; ++i) {
  if (h[i] % 2 == 0) {
    e.push(h[i]);
  } else {
    o.push(h[i]);
  }
}
console.log('even number ', e);
console.log('odd number', o);


st = []
// take input
let inp = document.getElementById('inpu')
function valiinput() {
  if (!st.includes(inpu.value)) {
    st.push(inpu.value)
    console.log(st);
  }
}

console.log("*****convert the entire array into even number******");
//convert the array into the even
const arrr = [1, 25, 1, 36, 4, 7, 8, 69, 45]
newArr = arrr.map((value) => {
  if (value % 2 != 0) {
    return value + 1
  } else {
    return value
  }
})
console.log(newArr);

let con = arrr.indexOf(4)
console.log(con);


//print the perticular div or perticular section based on requirement

function print() {
  let printdiv = document.getElementById("lorems");
  let printarea = window.open();
  printarea.document.write(printdiv.innerHTML);
  printarea.document.close();
  printarea.focus();
  printarea.print();
  printarea.close();
}


console.log("****generate id  randomly *****");
//generate id by clicking 
function gen() {
  const jobs = ['DEV', 'TES', 'PRM', 'TCL']
  const job = Math.floor(Math.random() * jobs.length)
  let ran = Math.floor(Math.random() * 253)

  let nameId = document.getElementById("generateIds").value

  let nameValue = ''
  for (let i = 0; i < 3; i++) {
    nameValue += nameId[i]
  }
  document.getElementById("para").innerText = nameValue.toUpperCase() + "" + jobs[job] + ran

}

//print the full name
function pr() {
  document.getElementById("result").innerHTML = document.getElementById('fname').value + " " + document.getElementById('mname').value + " " + document.getElementById('lname').value;

}


//! filter the duplecates in an array by filter method
const arr2 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
function fx(arr2) {
  return arr2.filter((va, ind) =>
    arr2.indexOf(va) == ind
  )
}
console.log("filtered array", fx(arr2));








console.log("*****object destructruing*****");
const person = {
  firstName: 'srinivas',
  lastName: 'k',
  age: 10,
  hobbies: ['cricket', 'singing'],
  address: {
    state: 'karnataka',
    pincode: 573111,
    city: 'chikkarasanahalli'
  }
}
const { firstName, lastName } = person
console.log('first name', firstName);
console.log('last name', lastName);
//multiple level
const { hobbies, address: { state, city } } = person
console.log('hobbiess', hobbies);
console.log('state', state);
console.log('city', city);


console.log('--------------array destructuring-----------------');

const fruits = ['applel', 'pine apple', 'orange', 'banana']
const [fruits1, fruits2] = fruits
console.log(fruits1);
console.log(fruits2);

console.log('********** for in loop ***********');
var persons = {
  firstName: 'srinivas', // loop through an object
  lastName: 'c r',
  age: 22,
  gender: 'male'
}
for (var mykey in persons) {
  console.log(`${mykey}:-${persons[mykey]}`);
}


console.log("****for of loop****"); 
var myFruits=['apple','pine Apple','kashmir Apple','mango']
for (var fruitsz of myFruits){
    console.log(fruitsz);
}


// get value when we click the button
function getvalue() {
  let gets = "srinivas c r"
  document.getElementById("getvalue").value = gets
}


// const arr3 = [1, 2, 2, 3, 3, 3, 3, 4, 4]
//   let filArr = arr2.filter((va) => {
//     if (arr2.indexOf(va) == va) {
//       console.log(va); 
//     }
//   }) 
  // const convObj = [1, 2, 2, 3, 3, 3, 3, 4, 4]
  // let reobj = Object.assign({}, convObj)// Array is convert to object
  // console.log(reobj);
  // let jobj = JSON.stringify(reobj)
  // console.log(jobj)
// debugger
  const arr3 = [1, 2, 2, 3, 3, 3, 3, 4, 4] 
  let myObject=new Object();
  for (i=0;i<arr3.length;i++){
    if(arr3[i] !==arr3[i-1]){
      let values=arr3.filter((val,ind,arr)=> val ==arr3[i]).length;
      myObject[arr3[i]]=values;
      // console.log( myObject); 
    }
  }
  console.log( myObject);
  let tojson=JSON.stringify(myObject)
  console.log( tojson);
