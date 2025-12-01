import { useContext, useEffect } from 'react';
import { AppContext } from '../App.jsx';
function Letter({col,row}) {
const { board,correctWord, curAttempt, setyellowKeys, setgreenKeys, setgreyedKeys} = useContext(AppContext);
const letter = board[row][col];
const correct = correctWord[col] === letter;
const present = !correct && correctWord.includes(letter);
const letterState = curAttempt.row > row 
  ? (correct ? "correct" : present ? "present" : "absent")
  : "";

useEffect(() => {
  if (letter !== "" && correct)
  {setgreenKeys((prev) => [...prev, letter]);}
  else if (letter !== "" && present)
  {setyellowKeys((prev) => [...prev, letter]);}
  else if (letter !== "" && !correct && !present)
  {setgreyedKeys((prev) => [...prev, letter]);}
}, [curAttempt.row]);

return (
  <div className="letter" id={letterState}>
    <h2>{letter}</h2>
  </div>
);
}
export default Letter
