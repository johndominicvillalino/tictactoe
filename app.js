import { createDivElements,createDivContainer } from "./helper.js";

const dom = document
const root = dom.getElementById('root')

window.addEventListener('load', () => {
    const  div = createDivElements()

    //init board
    const container = createDivContainer('gridContainer','board')
    root.appendChild(container)
    div.forEach(e => {
        dom.getElementById('board').appendChild(e)
    })



    
})

