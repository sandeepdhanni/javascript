// const button=document.querySelector('button');
// const h1=document.querySelector('h1');

// button.addEventListener('click',function(){
//      const newColor=makeRandomColor();
//      document.body.style.backgroundColor= newColor;
//      h1.innerText=newColor;
// });

// const makeRandomColor=()=>{
//      const r=Math.floor(Math.random()*255);
//      const g=Math.floor(Math.random()*255);
//      const b=Math.floor(Math.random()*255);
//      return `rgb(${r},${g},${b})`;
// }




//        //events and this keyword
// const buttons=document.querySelectorAll('button');

// for(let button of buttons){
//      button.addEventListener('click',colorise)
// }


// const h1s=document.querySelectorAll('h1');
// for(let h1 of h1s){
//      h1.addEventListener('click',colorise)
// }

// function colorise(){
//      this.style.backgroundColor=makeRandomColor();
//      this.style.color=makeRandomColor();
// }




           //events object and keyboard event 
           //event object is something we have access to in every event handler.it is passed in automatically wher it contains properties,information about the event
           //with keyboard events with keydown and keyup we have the key itself,ehicjh is the letter or character or the thing that was generated, the end result verses the code that corresponds to an actual location on the keyboard actual littel physical keys
// document.querySelector('button').addEventListener('click',function(e){
//      console.log(e);
// });


// const input=document.querySelector('input');
// input.addEventListener('keydown',function(sam){
//      console.log(sam);                           //by passing the object in the callback gives u which key have u pressed in 
//      console.log(sam.key);                       //this will give u the key u have pressed
//      console.log(sam.code);                      //this will give u the code with key`WITH THE ACTUAL LOCATION OF THE KEYBOARD
// })
// input.addEventListener('keyup',function(){
//      console.log("KEYUP");
// })

// window.addEventListener('keydown',function(e){
//      // console.log(e);                               //THIS will show the key which u have typed in the whole window.if u pressed 'k' in keyboard not in the input but in the window it will show you.
//      // console.log(e.code);

//      switch(e.code){                             //suppose i don't want any key except particular key when that key is pressed and ignore other key we can use switch
//           case 'ArrowUp':                      //the arrowup should be same as in the event object u can't write lowercase.
//          console.log("UP!!");                  //we can also use if else statement 
//              break;
//          case 'ArrowDown':
//           console.log("DOWN!!!!");
//           break;
//           case 'ArrowLeft':
//           console.log("LEFT!!!!");
//           break;
//           case 'ArrowRight':
//           console.log("RIGHT!!!!");
//           break;
//           default:
//                console.log("IGNORED");
//      }
// })






             //Form events & prevent default:
             //this is wher we use that method,event.prevent default what it does is it prevents the default behaviour triggered by a event,so it is not specific to submitting the form.there are other events that have their own behaviour but this is most common one  
// const form=document.querySelector("#shelterForm");
// form.addEventListener('submit',function(e){
//      e.preventDefault();
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");
//      console.log("Submitted!!!!");                  //this will run and also give error because of the default behaviour it will show in a matter of seconds and shows error
// })





          //Practice problem form events and prevent default 
// const form=document.querySelector("#shelterForm");
// const input=document.querySelector("#catName");
// const list=document.querySelector("#cats");
// form.addEventListener("submit",function(e){
//      e.preventDefault();
//      const catName=input.value;
//      const newLi=document.createElement('li');
//      newLi.innerText=catName;
//      list.append(newLi);
//      input.value="";
// });




             //Practice problem form events and prevent default 2
// const tweetForm=document.querySelector('#tweetForm');
// const input=document.querySelector('#name');
// const input1=document.querySelector('#tweet');
// const tweet=document.querySelector('#event');
// tweetForm.addEventListener('submit',function(e){
//     e.preventDefault();
//     const Tweet1=input.value;
//     const tweet2=input1.value;
//     const newLi=document.createElement('li');
//     newLi.innerText=Tweet1;
//     newLi.innerText=tweet2;
//     tweet.append(newLi);
//     input.value="";
//     input1.value="";
// })


                          //solution 2 for the same problem
// const tweetForm=document.querySelector('#tweetForm');
// const tweetsContainer=document.querySelector('#tweets')
// tweetForm.addEventListener('submit',function(e){
//      e.preventDefault();
//      const usernameInput=tweetForm.elements.username;
//      const tweetInput=tweetForm.elements.tweet;
//      addTweet(usernameInput.value,tweetInput.value)
//      usernameInput.value="";
//      tweetInput.value="";
// });
// const addTweet=(username,tweet)=>{
//      const newTweet=document.createElement('li');
//      const bTag=document.createElement('b');
//      bTag.append(username);
//      newTweet.append(bTag);
//      newTweet.append(`-${tweet}`)
//      tweetsContainer.append(newTweet);
// }




                    //change and input events
                    //change
// const input=document.querySelector('input');
// input.addEventListener('change',function(e){
//      console.log("dcblsjdvb");
// })
          //input
// const input=document.querySelector('input');
// const h1=document.querySelector('h1');
// input.addEventListener('input',function(e){
//      h1.innerText=input.value;
// })






                    //Event bubling
// const button=document.querySelector('#changeColor');
// const container=document.querySelector('#container');

// // button.addEventListener('click',function(){
// //      container.style.backgroundColor = makeRandomColor();
// // })	
// container.addEventListener('click',function(){
//       container.classList.toggle('hide');                              //if we click on change color.that will hide but not change the color.if u inspect it it will the the random color but not in the page.this is called event bubling.we click on the button and our event handler runs for the buttonbut then it bubbles up that event keeps going up because this div has its own click listener because we did click on that div too.yes we clicked on the button,but it's inside of the div.so we clicked on it too.if i want to stop that or to stop bubling it we can do that.
// }); 


                         
//                         button.addEventListener('click',function(e){
//                                  container.style.backgroundColor = makeRandomColor();            //if i want to stop that or to stop bubling it we can do that by doing  on the event object there is a method just like preventDefault there is one called stopPropogation.this will prevent this function from bubling up
//                                   e.stopPropagation();
//                               })	

// const makeRandomColor=()=>{
//      const r=Math.floor(Math.random()*255);
//      const g=Math.floor(Math.random()*255);
//      const b=Math.floor(Math.random()*255);
//      return `rgb(${r},${g},${b})`;
// }








                          //event deligation: these are used in situation where we have elements that may not be on the page at the time our event listener are added,so we cwn add event listener to some parent elements
// const lis=document.querySelectorAll('li');
// for(let li of lis){
//      li.addEventListener('click',function(){
//           li.remove();                                           //in this i we tried to delete the list and it does but if i add a new tweets it won't delete because these li were on the page it can't predict the future.it can't say for evenry li that may be added in the future.the new tweets don't have any sort of event listener.there is no click listener on them because they are created after the fact.so the solution is event deligaion
//      })
// }

// const tweetForm=document.querySelector('#tweetForm');
// const tweetsContainer=document.querySelector('#tweets')
// tweetForm.addEventListener('submit',function(e){
//      e.preventDefault();
// const usernameInput=tweetForm.elements.username;
// const tweetInput=tweetForm.elements.tweet;
//      addTweet(usernameInput.value,tweetInput.value)
//           usernameInput.value="";
//           tweetInput.value="";
//      });
//      const addTweet=(username,tweet)=>{
//      const newTweet=document.createElement('li');
//      const bTag=document.createElement('b');
//      bTag.append(username);
//      newTweet.append(bTag);
//      newTweet.append(`-${tweet}`)
//      tweetsContainer.append(newTweet);
// }               
//                        tweetsContainer.addEventListener('click',function(e){
//                          // console.log("Click on ul!");
//                          // console.log(e);                        //this will tell which li have i clicked. u can see if u toggle on target which li have u clicked.so we can delete it using e.target
//                          // console.dir(e.target);                     
//                          e.target.nodeName === 'LI' && e.target.remove();         //this will show which element exactly have u clicked
//                          e.target.remove();    
//                     })







                             //call stack
// const multiply=(x,y)=>x*y;
// const square=x=>multiply(x,x);
// const isRightTriangle=(a,b,c)=>{
//     return square(a)+square(b)===square(c);                    //isRightTriangle(3,4,5)-true .this is what happens behind the scene,javascript adds those function calls to the call stack and then it removes them whenever a value is returned,so the answer  we get is true.u can play it in console by selecting break point and seeing the call stack
// }
// console.log("before");
// isRightTriangle(3,4,5);
// console.log("Done");




  
                             //web API and single threaded
// console.log("Sending to the server");
// setTimeout(()=>{
//    console.log("Her is your data from the server...");               //this should actually not print as it is a single threaded but it print...why?because the browser is doing the work not javascript.the browser u use is typically written in language like c++ and it can do things javascript can't do.so what happens is js is going to hand off certain tasks to the browser to take care of,browsers come with somethiing called webapi and thse webapi are generally methods,thinigs that we call from javascript that basically are handed to the browser..and these things happen in the background.js does'nt really have to care about it as they've handed to the browser which include things like set timeout(),but also making requests
// },3000);                                                             //so how it works is that the call stack in js is able to recognise these special these webapi functions and it can pass them off to the browser.so it says,here you go,remind me in three seconds to take care of this.and when the browser finishes those tasks,they are added to the call stack,then js takes over again and execute the approriate code.so these browsers come with these functions,these things that browsers can do for us for js and second is call back of passing a function that is not executed right away,but instead executed later
// console.log("I am at the end of the file");





                              //callBack:
// setTimeout(()=>{
//     document.body.style.backgroundColor='red';
//     setTimeout(()=>{
//         document.body.style.backgroundColor='blue';
//         setTimeout(()=>{
//             document.body.style.backgroundColor='orange';
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='green';
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor='purple';
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

const delayedColorChange=(newColor,delay,doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor=newColor;
        doNext();
    },delay)
}
delayedColorChange('olive',3000,()=>{
    console.log("INSIDE CALLBACK");
    delayedColorChange('red',1000,()=>{
        delayedColorChange('blue',1000,()=>{
            delayedColorChange('orange',1000,()=>{
                delayedColorChange('green',1000,()=>{
                    delayedColorChange('purple',1000,()=>{
        
                    })     
                })
            })
        })
    })
});



