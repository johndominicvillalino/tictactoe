import { createDivElements, createDivContainer,playerMoves,calculateWin,createSpan} from "./helper.js";

const dom = document;
const root = dom.getElementById("root");
let winner;

//start on load
window.addEventListener("load", () => {
  const div = createDivElements();

  //title
  const titleDiv = createDivContainer('title','title')
  const tic = createSpan('tic','tic')
  const tac = createSpan('tac','tac')
  const toe = createSpan('toe','toe')
  tic.innerText = 'Tic '
  tac.innerText = 'Tac '
  toe.innerText = 'Toe '
  titleDiv.appendChild(tic)
  titleDiv.appendChild(tac)
  titleDiv.appendChild(toe)
  titleDiv.innerHTML += 'By John V'

  root.appendChild(titleDiv);

  //init board
  const container = createDivContainer("gridContainer", "board");
  root.appendChild(container);
  div.forEach((e) => {
    dom.getElementById("board").appendChild(e);
  });
  
  const tictacCell = dom.querySelectorAll(".tictacCell");

  let player = 0;
  tictacCell.forEach((e) => {
    e.addEventListener("click", (el) => {
      let text;
      const boxNum = el.target.getAttribute("box");
      const boxPos = el.target.getAttribute("boxpos");
      let color;

      if(dom.getElementById(el.target.id).textContent.length > 0){
        return
      } else {
        player +=1;
        if(player % 2 === 0) {
          player = 2;
          text = 'O'
          color = 'yellow'
        } else {
          player = 1
          text = 'X'
          color = 'red'
        }
      
        //stop if winner detected
        if(winner) {
          return
        }
       
        dom.getElementById(el.target.id).textContent = text
        dom.getElementById(el.target.id).style.color = color
        playerMoves([boxPos,boxNum],player)
        const result = calculateWin(player)
        if(result) {
          let announce;
          if(result.includes('playerOne')){
            announce = 'Player One Won!'
          }
          if(result.includes('playerTwo')){
            announce = 'Player Two Won!'
          }
          titleDiv.innerText = announce
          winner = result
        }
        
      }
    });
  });

  // end on load
});
