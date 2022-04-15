
import {getStorageData,uploadStageData} from './util.js'

const dom = document
const storage = window.localStorage

export const createDivElements = () => {
    const divsArr = []
    for (let i = 0; i < 9; i++) {
     const div = dom.createElement('div')
        const exactPos = i+1;
        let boxNum;
        let boxPos; 
        //cell ids anjd position
        if(exactPos % 3 === 0) {
            boxNum = 3
        } else {
            boxNum = exactPos % 3
        }   
        if(exactPos - boxNum === 0) {
            boxPos = 1
        } 
        if(exactPos - boxNum === 3) {
            boxPos = 2
        } 
        if(exactPos - boxNum === 6) {
            boxPos = 3
        } 

        div.setAttribute('id',`cell${i+1}`)
        div.setAttribute('box',`${boxNum}`)
        div.setAttribute('boxpos',`${boxPos}`)
        
        div.setAttribute('class','tictacCell')
        divsArr.push(div)
    }   

    storage.setItem('playerOne',JSON.stringify([]))
    storage.setItem('playerTwo',JSON.stringify([]))
    storage.setItem('board',JSON.stringify([]))

    return divsArr;
}

export const createDivContainer = (classes,id) => {
     const div = dom.createElement('div')
     div.setAttribute('class',classes)
     div.setAttribute('id',id)
     return div
}


export const playerMoves = (boxNum, player) => {
    let storagePlayerUpdate; 
    if(player === 1) {
        storagePlayerUpdate = 'playerOne'
    }else {
        storagePlayerUpdate = 'playerTwo'
    }
    //upload playermoves
    uploadStageData(storagePlayerUpdate,boxNum)
    
}

export const calculateWin = (player) => {
    
    let checkPlayer; 
    if(player === 1) {
        checkPlayer = 'playerOne'
    }else {
        checkPlayer = 'playerTwo'
    }
    const currentMoves = getStorageData(checkPlayer);

   const board = [[],[],[]]
   
    currentMoves.forEach(e => {
        const v = e[0] -1
        const h = e[1]
        board[v].push(h)
    })

    checkBoard()

    function checkBoard() {

        board.forEach((e) => {
            
            const sorted = e.sort()
            const joined = +sorted.join("")
            console.log(joined)
    
        })

    }

    


}




