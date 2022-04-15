import { createDivElements, createDivContainer,playerMoves,calculateWin} from "./helper.js";

const dom = document;
const root = dom.getElementById("root");


//start on load
window.addEventListener("load", () => {
  const div = createDivElements();

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

      if(dom.getElementById(el.target.id).textContent.length > 0){
        return
      } else {
        player +=1;
        if(player % 2 === 0) {
          player = 2;
          text = 'O'
        } else {
          player = 1
          text = 'X'
        }
        
        dom.getElementById(el.target.id).textContent = text
        playerMoves([boxPos,boxNum],player)
        calculateWin(player)
      }
    });
  });

  // end on load
});
