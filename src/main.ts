import { setupContainer } from "./logic";
import "./style.css";

document.querySelector<HTMLDivElement>(
  "#app"
)!.innerHTML = ` <div id='container'>
<div class="play-area">
        <h1 class="title">Rock, Paper, Scissors 👊📄✂</h1>
        <div class="options-container" data-options>
          <button data-option value="rock">👊Rock</button>
          <button data-option value="paper">📄Paper</button>
          <button data-option value="scissors">✂Scissors</button>
        </div>
        <div class="players">
          <span>Your choice: <b data-you>null</b></span>
          <span>Computer choice: <b data-computer>null</b></span>
        </div>
        <h1 data-winner aria-hidden="true" class="winner"></h1>
      </div>
      <div class="score-area">
        <h2>Your score: <b data-player-score>0</b></h2>
        <h2>Computer score: <b data-computer-score>0</b></h2>
      </div>
      <span class="winning-info"
        ><b>💡 Tip: </b>First to reach 20 points wins!!!</span
      ></div>`;

setupContainer(document.querySelector<HTMLDivElement>("#container")!);
