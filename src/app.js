
import GameBoard from "./game-board";
import './app.css'

const words = [
  'keyboard',
  'monitor',
  'laptop',
  'desk',
  'window',
]



export default function App() {
 
   let word = words[Math.floor(Math.random() * 10)];
 
   console.log(word)
  

  return (
    <div>
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play a game?</p>


      <div>
        <GameBoard secretWord={word} />
      </div>
    </div>
  );
}
