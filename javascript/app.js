const btn=document.querySelector('#v2');

btn.onClick=function(){
    console.log("You clicked me");
    console.log("I hode it worked");
}

function scream(){
    console.log("AHHHH");
    console.log("Stop touching me");
}
btn.onmouseenter=scream;

document.querySelector('h1').onClick=()=>{
    alert('You Clicked on h1');
}

const btn3=document.querySelector('#v3');
btn3.addEventListener('dblclick',function(){
    alert('Clicked');
})

function twist(){
    console.log("TWIST");
}

function shout(){
    console.log("SHOUT!");
}

const tasbutton=document.querySelector('#tas');

// tasbutton.onClick=twist;
// tasbutton.onClick=shout;   //as we have given two onclick the console will give only shout as it is overwritten as it is just an object as we can't have two callback function


tasbutton.addEventListener('click',twist,{once:true});    //the once is a method where it will call only once once it is called then it deletes the eventlistener completely as it won't come again.
tasbutton.addEventListener('click',shout);    //if we use eventlistener we can use as manay callback as possible, the first is the event where u can use any event and the second argument is the callback function