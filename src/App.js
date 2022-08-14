import './App.css';
import Deck from "./deck.js"

//const myCardOne = document.querySelector(".myCardOne")

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

//myCardOne.appendChild(deck.cards[0].getHTML())

function App() {
  return (
    <div>
      <div className="reference"> </div>
      {/* <div className="myCardOne"> Card One</div> */}

      
      <div className="myCardTwo"> Card Two</div>
        <div className="myCardTwo red" data-value="9♥">
          ♥
        </div>

      <div className="myCardOne"></div>
        <div className="myCardOne red" data-value="9♥">
          ♥
        </div>


      {/* <div className="computer-deck deck">26</div>
      <div className="computer-card-slot card-slot"></div>
        <div className="card red" data-value="9♥">
          ♥
        </div>
      <div className="text">Text</div>
      <div className="player-deck deck">27</div>
      <div className="player-card-slot card-slot"></div> */}
      <div class = "lightRed"></div>
      <div class = "white"></div>
      <div class = "darkRed"></div>
      <div class = "circle"></div>
    </div>

  );
}

export default App;
