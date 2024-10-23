

// let buttons= document.querySelectorAll(`button`)





// buttons[0].addEventListener(`click`, ()=>(
//     h1.style.color=`red`
// ))
// buttons[1].addEventListener(`click`, ()=>(
//     h1.style.color=`blue`
// ))
// buttons[2].addEventListener(`click`, ()=>(
//     h1.style.color=`green`
// ))
// buttons[3].addEventListener(`click`, ()=>(
//     h1.style.color=`yellow`
// ))


let h1 = document.querySelector(`h1`)
let body = document.querySelector(`body`)
body.style.background = `black`

let bod = prompt(`enter body's background color`)
let text = prompt(`enter text's color`)


body.style.background = `${bod}`
h1.style.color = `${ text }`