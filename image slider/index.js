const prevbtn=document.querySelector('.prev')
const nextbtn=document.querySelector('.next')

nextbtn.addEventListener("click",()=>{
    const menu=document.querySelector('menu')
    const cards=document.querySelectorAll('li')

    menu.appendChild(cards[0]);
})

prevbtn.addEventListener("click",()=>{
    const menu=document.querySelector('menu')
    const cards=document.querySelectorAll('li')

    menu.prepend(cards[cards.length-1]);
})