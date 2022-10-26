import { useState } from "react";
import ButtonGrid from "./Components/ButtonGrid";
import LetterGrid from "./letter-grid";

export default function GameBoard({ secretWord }) {
  const [guessedLetters, setGuessedLetters] = useState([]);
  let [count, setCount] = useState(5);


  function handleClick(e) {
    console.log(e.target.value);
    setGuessedLetters([...guessedLetters, e.target.value.toLowerCase()]);
    setCount(count - 1);

  }

  return (
    <div>
      <LetterGrid secretWord={secretWord} guessedLetters={guessedLetters} />
      {count > 0 && 
        <>
          <ButtonGrid handleClick={handleClick} />
          <div onClick={handleClick}>Lives remaining:{count}</div>
        </>
      }{count === 0 && <div>You are illiterate.</div>}
    </div>
  );
}
