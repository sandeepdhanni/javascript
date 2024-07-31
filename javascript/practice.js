// const value = prompt("Enter the day: ");

// if (value === "friday") {
//     console.log("friday is fun");
// } else if (value === "saturday") {
//     console.log("saturday is also fun day");
// }


// const pass = prompt("Enter your password: ");

// if (pass.length >= 6 && pass.indexOf(' ') === -1) {
//     console.log("password is valid...");
// } else {
//     console.log("password is invalid...");
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`i is ${i}`);
//     for (let j = 2; j <= 4; j++) {
//         console.log(`   j is ${j}`);
//     }
// }

// const seatingNum = [
//     ['sandeep', 'rohit', 'ravi'],
//     ['siri', 'sharanya', 'swapna'],
//     ['mahima', 'prafulla', 'hrithik']
// ];
// for (let i = 0; i < seatingNum.length; i++) {
//     const row = seatingNum[i];
//     console.log(`ROW is ${i+1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }



// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }


//hoisting: 
// sayHello();
// function sayHello(){
//     console.log("hello");
// }


// const secret = ["BabyHippo", "Baby", "Sam", "Mahi"];
// let guess = prompt("Enter the secret code:");
// while (!secret.includes(guess)) {
//     guess = prompt("Enter the secret code correctly..");
// }
// console.log("congrats...the code is correct...");

// const sandeep = ["sandeep","dhanni","chethan","rohit"];
// let prompt1=prompt("Please enter the correct name");
// while(sandeep.includes(prompt1)){
//     console.log("you have entered the correct name..");
// }
// console.log("you have entered the wrong name....please enter the correct name...")


// const secret = ["BabyHippo"];
// let guess = prompt("Enter the secret code:");
// while (guess !== secret) {
//     guess = prompt("Enter the secret code correctly..");
// }
// console.log("congrats...the code is correct...");


// let input = prompt("hey.say something..");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() == 'stop copying me') break;
// }
// console.log("Okk...you win");



// for (let i = 1; i <= 1000; i++) {
//     if (i === 100) break;
//     console.log(i)
// }




//guess the number game
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter the valid number!"));
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let guess = parseInt(prompt("Enter the number..(type 'q' to quit)"));
// let attempt = 1;
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     if (guess < targetNum) {
//         guess = prompt("Too low...Enter the new guess");
//         attempt++;
//     } else if(guess > targetNum) {
//         guess = prompt("Too high...Enter the new guess");
//         attempt++;
//     }else{
//         guess = prompt("Invalid guess...Please enter the number or type 'q' to quit...");
//     }
// }
// if (guess == "q") {
//     console.log("You quited...");
// } else {
//     console.log("You Win....")
//     console.log(`Congrats....you guessed the number in ${attempt} guesses`);
// }


// const secret = ["BabyHippo", "Baby", "Sam", "Mahi"];
// for (let sam of secret) {
//     console.log(sam);
// }


// for (let char of "Hello World") {
//     console.log(char);
// }



// const testScores = {
//     keemo: 30,
//     sofie: 10,
//     karem: 50,
//     sabie: 60,
//     seema: 100,
//     mon: 200
// }
// for (let person in testScores) {
//     console.log(person);
// }
// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

// const studentMarks={
//     sandeep: 50,
//     sofie:60,
//     rohit:80,
//     karem:70
// }
// for(let student in studentMarks){
//     console.log(studentMarks[student]);
// }

// let total = 0;
// let scores = Object.values(testScores);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);
/* Object.keys(testScores)
(6) ['keemo', 'sofie', 'karem', 'sabie', 'seema', 'mon']
Object.values(testScores)
(6) [30, 10, 50, 60, 100, 200]
Object.entries(testScores)
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0
: 
(2) ['keemo', 30]
1
: 
(2) ['sofie', 10]
2
: 
(2) ['karem', 50]
3
: 
(2) ['sabie', 60]
4
: 
(2) ['seema', 100]
5
: 
(2) ['mon', 200]
length
: 
6
[[Prototype]]
: 
Array(0)*/





//functions
// function singSong() {
//     console.log('sam');
//     console.log('dhanni');
//     console.log('esha');
// }

// function greet(firstName) {
//     console.log(`Hey there, ${firstName}!`);
//     //console.log('Hi!');
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}..`);
// }

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);
// }



// function add(x, y) {
//     let sum = x + y;
//     return sum;
//     console.log("end of the function");//it will not execute because it stops the execution when u return and the return will work whatever you do..
// }


// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         return false;
//     }
//     return x + y;
// }


// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }
// function collectEggs() {
//     let totalEggs = 6;
// }
// console.log(totalEggs);//if we give the output outside of the function it gives an error as variable name is declared inside.so it gives an error..because the function is not even declared yet.so it gives an error
// function collectEggs() {
//     let totalEggs = 6;
// }
// collectEggs();
// console.log(totalEggs);//if we call the function it will also gives an error..so this is function scope...
//function scope:  variables declared inside the function where we actually use let keyword where we use let keyword we define that value of that variable in the function.they are scoped to that function so i don'nt have acces to totalEggs as totalEggs lives inside that function only..if u need access to tatalEggs u need to declare it outside...  
// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scalet Macaw';
// function birdWatch() {
//     // let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// // birdWatch();
// console.log(bird);



                //Block scope
/* let radius=8;
if(radius>0){
    const PI=3.14159;
    let msg='Hii';
    console.log(msg);
}
console.log(radius);//this will print 8
console.log(msg);//it will give error as msg is inside the condition...if we console it inside the condition it will giveoutput as it is inside the block..
*/

/* for(let i=0;i<5;i++){
    var msg='asfhgfjsegf';//if i use 'var' for variable and if i console log it will print it...if we use let and const inside the condition it will show error as they are block scoped
    console.log(msg);
}
console.log(msg);
console.log(i);  */


                  
                 //lexical scope
        //an inner function nested inside of some parent function has access to the scope or to the variable to find the outer function,,the inner function has access to the same staff as the parent function or grandparents or how many more functions
/* function bankRobbery(){
    const heros=['spiderman','wolverine','black panter']
    function cryForHelp(){
        let color='purple';//this is the main point if i defined a variable in cryforhelp then i'll have access to that inside of inner but not outside..bankrobbery has no access of that variable
        function inner(){
            for(let hero of heros){
                console.log(`please help us, ${hero.toUpperCase()}`);
              }
        }
        inner();
    }
    cryForHelp();
}  */


                      //function expression
// function add(x,y){
//     return x+y;
// }
//now this is a function expression, so this right side after the equal sign creates a function and i am storing that in a variable just like how i would store an object or an array or a number..it is the same exact concept...
/*  const add=function(x,y){         //function:A function is a value that can be stored in a variable like let
    return x+y;         //while declaring the function in the console u can use add which u have declared 'add()' and give values.. it will word...
 }   */
 

                        //higher order functions: 
// function that work with other functions so they operate on or with other functions...this mainly comes with two main things.
//    * functions that accept other functions as arguments and do something with them
//    * functions that can return a function
/* function callTwice(func){
 func();
 func();
}
function callTenTimes(f){
    for(let i=0;i<10;i++){
      f();
    }
}
function rollDie(){
    const roll=Math.floor(Math.random()*6)+1;
    console.log(roll);
}
callTwice(rollDie()); */


                       //returning functions
/* function makeMysteryFunc(){
      const rand=Math.random();
      if(rand>0.5){
          return function(){
            console.log("consgrats, i am a good function!");
            console.log("you win a million dollars!!");
          }
      }else{
        return function(){
            alert ("you have been infected by a computer virus!");
            alert ("stop trying to close this window");
            alert ("stop trying to close this window");
            alert ("stop trying to close this window");
            alert ("stop trying to close this window");
            alert ("stop trying to close this window");
        }
      }
} */

                         //factory function:it is a function that will make the function for me
/* function makeBetweenFunc(min,max){
   return function(num){
    return num>=min && num<=max;
   }
}  */

// function isBetween(num){
//     return num>50 && num<100
// }
// function isBetween2(num){
//     return num>=1 && num<=10
// }




                             //function and objects:
              //method:  A method is simply a function that has been placed as a property on an object.we can simply add functions as aproperty on object.
// const  myMath={
//     PI: 3.14159,
//     square: function(num){
//        return num*num;
//     },
//     cube: function(num){
//         return num**3;
//     }
// }
//shortcut of the above code of using methods and functions'
// const  myMath={
//     PI: 3.14159,
//     square(num){
//        return num*num;
//     },
//     cube(num){
//         return num**3;
//     }
// }




                                //this keyword:this is something that we use inside an object in a method..
//it refers to the inside of this method,it refer to the cat object itself.
// const cat={
//     name: 'blue',
//     color: 'grey',
//     breed: 'scottish folt',
//     meow(){
//         console.log("this is", this);
//         console.log(`${this.color} says meawww`);
//     }
// } 
// const meaw2=cat.meow;



                                    //try,catch:they have to do with catching errors and prevent them from breaking the execution of our code.eg: if an error occurs i want u to catch it and stop it for crashing the code.
   //hello.toUpperCase();
/* try{
    hello.toUpperCase();
}catch{
    console.log('error');
}
console.log("after"); */
/* function yell(msg){
    try{
    console.log(msg.toUpperCase().repeat(3));
    }
    catch(e){
        console.log(e);
       console.log('Please pass a string');
    }
}  */




                              //foreach:   accepts a callback function..calls the funnction once per element...
/* const numbers=[1,4,3,7,2,4,3,98];
function print(element){
    console.log(element);
}
numbers.forEach(function(el){
    if(el%2==0){
   console.log(el);
    }
});  */
/* const movies=[
    {
        title:'Antman',
        score:20
    },
    {
        title:'batman',
        score:30
    },
    {
        title:'spiderman',
        score:40
    },
    {
        title:'ironman',
        score:100
    },
    {
        title:'thor',
        score:80
    },
    {
        title:'scaleWitch',
        score:90
    },
    {
        title:'mamaearth',
        score:10
    }
]
movies.forEach(function (movie){
    // console.log(movie);
    console.log(`${movie.title} - ${movie.score}/100`);
})     */


                       
                                 //map: it is similar to foreach..it accecpts a callback functions and it runs that function once per element in the array but wgatts different is it generate a new array using the result
// const numbers=[1,4,3,7,2,4,3,98];
// const array=numbers.map(function(num){
//     return num*2;
// })

/* const movies=[
    {
        title:'Antman',
        score:20
    },
    {
        title:'batman',
        score:30
    },
    {
        title:'spiderman',
        score:40
    },
    {
        title:'ironman',
        score:100
    },
    {
        title:'thor',
        score:80
    },
    {
        title:'scaleWitch',
        score:90
    },
    {
        title:'mamaearth',
        score:10
    }
]
const title=movies.map(function (movie){
    // return movie.title.toUpperCase();
    return movie.title.repeat(2);
})    */




                            //arrow function:arrrow functions are the newer functions for defining a function...they are used to create a expressions
// const add=function(x,y){
//     return x+y;
// }
/* const add = (x,y) => {
    return x+y;
}
const square=(x)=>{
    return x*x;
}

//arrow functions which does not have argument
const rollDie=()=>{
    return Math.floor(Math.random()*6); 
}  */



 
                         //arrrow functions implicit returns: if we replace curly braces with paranthesis this is the new syntax for arrow functions to make an implicit return.this tells javascript i'am returning this one thing.I don'nt need to write the return keyword just automatically implicit result it for me.They r useful to shorted the code..implicit return only works when there is only one statement,one expression in the body of thew function
/* const rollDie=()=>(
    Math.floor(Math.random()*6)+1
)
const isEven=function(num){//regular function expression
    return num%2==0;
}
const isEven1=(num)=>{//arrow function with paranthesis around paranthesis
    return num%2==0;
}
const isEven2=num=>{//no parenthesis around param
     num%2==0;
}
const isEven3=num=> num%2==0;//one liner implicit return */


/* const rollDie=()=>(  //gives error as only one expression can be done in implicit return 
    let msg='asdfv'  
    Math.floor(Math.random()*6)+1
) */


                        

                         //arrow function wrapup: 
/* const movies=[
    {
        title:'Antman',
        score:20
    },
    {
        title:'batman',
        score:30
    },
    {
        title:'spiderman',
        score:40
    },
    {
        title:'ironman',
        score:100
    },
    {
        title:'thor',
        score:80
    },
    {
        title:'scaleWitch',
        score:90
    },
    {
        title:'mamaearth',
        score:10
    }
    ]

const newMovies= movies.map(movie=>(
     `${movie.title} - ${movie.score / 10}`
)) */



                //the next methods haveto do with delaying,waiting,passing execuytionand postponing execution for a later date
                //setTimeout and setInterval:
                //settime out expects you to add two things,first is callback and second is the number of milliseconds to delay the execution of thye function
                //setinterval:setinterval will call the functionthat we passed in it..it will call a callback every x number of milliseconds so that we can repeat something at an interval.we can repeat something at an interval
/* setTimeout(()=>{
    console.log("Hello");
},3000);

const id= setInterval(()=>{  //as it contineously keep running one way to stop it is to use clearInterval(id) with an id which u have declared setInteval
  console.log(Math.random());//clearInterval(id);
},2000);  */




                 
                   //filter method: it can be used on arrays to create a new array containing only the elements that meet a certain condition. It takes a callback function as an argument, which is called on each element of the array. The callback function can return a boolean value, which determines whether the element should be included in the new array or not.
                    //or u can say we pass in a function that need to return true or false if it ever returns true for a given element that element is added into the new filtered array that is created.
/* const numbers=[1,2,3,4,5,6,7,8,9,,23,43,5,65,677,34];
numbers.filter(n=>{
    return n<10;
});
const movies=[
    {
        title:'batman',
        score:90,
        year:2020
    },
    {
        title:'superman',
        score:80,
        year:2010
    },
    {
        title:'ironman',
        score:100,
        year:2021
    },
    {
        title:'scarletwitch',
        score:95,
        year:2022
    },
    {
        title:'openheimer',
        score:97,
        year:2023
    },
    {
        title:'antman',
        score:50,
        year:2019
    },
];
const goodmovie=movies.filter(m=>m.score>80);//which is implicit return
const goodtitle=goodmovie.map(m=>m.title);//if we want only titles in goog movies we can write like this
movies.filter(m=>m.score>80).map(m=>m.title);//instead of writing 2 variables we can do in one line

const badmovie=movies.filter(m=>m.score<80);
const recentmovie=movies.filter(m=>m.year>2000);  */





                        //some and every methods:they both are similar.They are boolean methods,meaning they return tru or false.unlike filter or map which return new array it always return true or false.And there are ways to test if every element in an array passes some tests
/* const exams=[80,77,69,90,86,85,98,99,73];
const sam=exams.every(score=>score>=70);//in this it checks for every functions as all are abopve 70 it returns true and if either if the value is below 70 then it returns false
                        //some: similar to very but returns true if any of the array elements pass the test functions
const exams1=[80,77,69,90,86,85,98,99,73];
const sam1=exams.every(score=>score>=70);
const movies=[
    {
        title:'batman',
        score:90,
        year:2020
    },
    {
        title:'superman',
        score:80,
        year:2010
    },
    {
        title:'ironman',
        score:100,
        year:2010
    },
    {
        title:'scarletwitch',
        score:95,
        year:2022
    },
    {
        title:'openheimer',
        score:97,
        year:2023
    },
    {
        title:'antman',
        score:50,
        year:2019
    },
];
movies.some(movie=>movie.year>2015); */






                          //reduce function: the reduce  method in JavaScript is a method that can be used on arrays to apply a function to each element of the array and reduce it to a single value. It is similar to the  method, but instead of just executing a function on each element, it accumulates the return values of the function and returns a single value at the end.The  method takes two arguments: a callback function and an initial value. The callback function is called on each element of the array, and the return value of the function is used to accumulate the result. The initial value is the starting value for the accumulation.
/* const prices=[9,99,1.50,19.90,30.45,49.99];

// let totla=0;
// for(price of prices){
//     total+=price;
// }
// console.log(total);

// const total=prices.reduce((total,price)=>{
//     return total+price;
// });
const total=prices.reduce((total,price)=> total*price);//implocit return

prices.reduce((min,price)=>{
    if(price>min){
        return price;
    }return min;
});

const movies=[
    {
        title:'batman',
        score:90,
        year:2020
    },
    {
        title:'superman',
        score:80,
        year:2010
    },
    {
        title:'ironman',
        score:100,
        year:2010
    },
    {
        title:'scarletwitch',
        score:95,
        year:2022
    },
    {
        title:'openheimer',
        score:97,
        year:2023
    },
    {
        title:'antman',
        score:50,
        year:2019
    },
];
const hightstreated=movies.reduce((bestmovie,curmovie)=>{
    if(curmovie.score>bestmovie.score){
        return curmovie;
    }
    return bestmovie;
});

const event=[2,4,6,7,4,3];
event.reduce((sum,num)=>sum+num,100);//we can also give second argument we can specify and it will be the initial value
*/





                //arow function and this:arrow functions behave very differently in terms of the value fot he keyword this inside of an arrow function vs a non arrow function or just traditional function
/*  const person={
    firstname:'sam',
    lastname:'dhanni',
    // fullname:function(){
        fullname:()=>{//if i give an arrow function it gives undefined so what happened is this is going to refer to the scope that it is creted in,so that means this keyword refers to the window object 
        console.log(this);//in the console it gives window object..the keyword this has nothing to do with scope wher function is created ,it has to do with how the function is executed.that is not how arrow functions work
            return `${this.firstname}${this.lastname}`;//the keyword this refers to whatever,in this case comes to the left of the function,so that mean the object person
        
    },
    shoutname:function(){
        // setTimeout(function(){//this will show error it has to do with the execution content because settimeout is a method on window
        //     console.log(this);
        //     console.log(this.fullname())
        // },3000)
        setTimeout(()=>{//in case of arrow function in will print corrctly
            console.log(this);
            console.log(this.fullname())
        },3000)
    }
}   */

//this keywork this behaves differently in arrow function rather than in a regullar functions. we can't use arrow function to definr a method









                            
                            //default parameters:
// function rollDie(numSlides){
//     if(numSlides===undefined){
//         numSlides=6;
//     }
//   return Math.floor(Math.random()*numSlides)+1;
// }


// function rollDie(numSlides=2){
//   return Math.floor(Math.random()*numSlides)+1;
// }

// function greet(firstName,lastName="mahima",punc='!'){
//    return `Welcome ${firstName},your last name is ${lastName}${punc}`;
// }




                          //spread in function call:spread syntax allow an iterable such as an array to be expanded in places where zero or more arguments or elements are expected in places where zero or more key-value pairs are expected..
// spread syntax which is '...' is used to spread the array into seperate arguments
// const num=[21,434,667,21,87,1243];
// console.log(Math.max(...num));
// console.log(Math.min(...num));
// console.log("Hello");
// console.log(..."Dhanni");//this will spread each individual character into seperate argument





                          //spread in array literals:
// const cats=["blue","sam","tom","jerry"];
// const dogs=["violet","billie","broke"];
// console.log(...cats);
// const allpets=[...cats];//this will create a copy of an array.if u try to push elements in allpets and console it it will add but when u look at cats it won't show the elements that has added.
// const allpets1=[1,2,5,2,...cats,...dogs,"sam"];
//              //one thing to remember is we are not limited to arrays as there are other literals like strings
// const name=[..."sandeep"];
// console.log(name);

                          ///spread in object literals:
// const fenine={legs:4,family:"dhanni"};
// const kanine={isfurry:true,family:"patel"};
// const catDog={...fenine,...kanine};//there will be a conflict where both have family property..in that case the order matters,so fanine will be copied first and then kanine.so when there is a conflict kanine is going to win because it comes secondand it overwrites the family
// const dogCat={...kanine,...fenine};
// const catdog1={...kanine,...fenine,family:"dhannipatel"};
//      //if u try to spread an array into a object, the indices are used as a key same as strings
// const array={...[2,4,6,3,7]};
// const stri={..."hello"};

// const dataform={
//     email:"sammahi@gmail.com",
//     password:"sam",
//     username:"sandep"
// }
// const newuser={...dataform,id:211,isAdmin:false};


 

                               //rest parameter:
                               //arguments objects:it acts like an array.it is a array like object.we can use indices to access the elements out except it does not have access to array methods like push,pop,reduce etc..it automatically will hold all the arguments passed to a function
// function sum(){
// return arguments.reduce((total,el)=>total+el);//this will show an error as arguments is not an array and it does't have reduce method.
// }
                               //rest parameter: this is where rest comes in which is '...' goes in our paremeter list and it is going to collect all the arguments in an actual array.
// function sum(...nums){        //this will store all the values passed in 
//     return nums.reduce((total,el)=>total+el);
// }

// function raceResult(gold,silver,...everyOneelse){
//    console.log(`gold medal goes to ${gold}`);
//    console.log(`silver medal goes to ${silver}`);
//    console.log(`rest of the medal goes to ${everyOneelse}`);
// }
//one thing to keep in mind about arguments is that it does'nt word inside of arrow functions at all..inthat case we can use rest parameters...there is a difference between rest and spread..spread will spread the elements where rest will collect things into single parameter



                                //destruction:it is the nice way of unpaacking or extracting or singling out values from arrays or objects and we can unpack them s
// const scores=[7234,7139,6789,6492,6021,5334,5046,4639,4039];
// const highScores=scores[0];
// const secondScores=scores[1];

// const [gold,silver,bronze,...everyoneelse]=scores;//we can write like this
                //destructing using objects:
// const user={
//     email:"sam@gmail.com",
//     password:'sam',
//     firstname:'sandeep',
//     lastname:'dhanni',
//     born:2001,
//     died:2090,
//     bio:'a passionate software developer ',
//     city:'hyderabad',
//     state:'telangana'
// }
// // const firstName=user.firstname;
// // const lastName=user.lastname;
// // const Email=user.email;
//     //instead of using the above lines we can destructure them something like
// const {email,firstname,lastname,city,bio} = user            //inside of curly braces include property..the order does not matter in destructing like it does in array
// const {born:birthdate,died:deathyear= 'N/A'}=user;


// const user={
//         email:"sam@gmail.com",
//         password:'sam',
//         firstname:'sandeep',
//         lastname:'dhanni',
//         born:2001,
//         died:2090,
//         bio:'a passionate software developer ',
//         city:'hyderabad',
//         state:'telangana'
//     }
//     const user2={
//         email:"mahima@gmail.com",
//         firstname:'mahima',
//         lastname:'patel',
//         born:2000,
//         city:'bangalore',
//         state:'karnataka'
//     }
//     const {city,state,died='N/A'} =user2;   //in this we can give a default value as user 2 does not have a died



                               
                        //destructing parameters:we can destructure the values that are passed in and it is most frequently used in objects
// const user={
//         email:"sam@gmail.com",
//         password:'sam',
//         firstname:'sandeep',
//         lastname:'dhanni',
//         born:2001,
//         died:2090,
//         bio:'a passionate software developer ',
//         city:'hyderabad',
//         state:'telangana'
//     }
//     const user2={
//         email:"mahima@gmail.com",
//         firstname:'mahima',
//         lastname:'patel',
//         born:2000,
//         city:'bangalore',
//         state:'karnataka'
//     }
// //     function fullName(user){
// //     return `${user.firstname} ${user.lastname}`
// // }
//     //we can use destructing this like
//     // function fullName(user){
//     //         const {firstname,lastname}=user;
//     //         return `${firstname} ${lastname}`
//     //     }
//     //if we only want firstname and lastname not all can also destructure them onto the function
// function fullName({firstname,lastname='patel'}){   //we can also give default value like this 
//    return `${firstname} ${lastname}`;
// }


// const movies=[
//     {
//         title:'batman',
//         score:90,
//         year:2020
//     },
//     {
//         title:'superman',
//         score:80,
//         year:2010
//     },
//     {
//         title:'ironman',
//         score:100,
//         year:2010
//     },
//     {
//         title:'scarletwitch',
//         score:95,
//         year:2022
//     },
//     {
//         title:'openheimer',
//         score:97,
//         year:2023
//     },
//     {
//         title:'antman',
//         score:50,
//         year:2019
//     },
// ];
// movies.filter((movie)=>movie.score>=90);
// movies.filter(({score})=>score>=90);  //we can destructure them like this

// movies.map(movie=>{
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })  
    //we could destructure like this
    // movies.map(( {title,score,year})=>{
    //     return `${title} (${year}) is rated ${score}`
    // })  


    





    //closures: closures are defined when a function defines another function and its inner function has access to
    //the variables in outer function, even after the outer function has finished executing.. 
    function makemultiplier(x){
        function multiplt(y){
            return x*y;
        }
        return multiplt;
    }
    const multiplyby2=makemultiplier(2);
    const multiplyby3=makemultiplier(5);
    console.log(multiplyby2(3));
    console.log(multiplyby3(4));