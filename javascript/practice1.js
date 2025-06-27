console.log(add());
function add(){
    const num1=120;
    const num2=20;
    function sum(){
        return `${num1} scored ${num2}`;
    }
    return sum();
}



const one=function(name){
    const two=function (){
        return name;
    }
    return two
}
const three=one("sam");
console.log(three());