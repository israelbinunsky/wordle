import { createContext, useEffect, useState } from 'react';
import { boardDefault, generateWordSet } from './words.jsx';
import Board from "./Board/Board.jsx";
import Keyboard from './keyboard/keyboard.jsx';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [curAttempt, setCurAttempt] = useState({ row: 0, cul: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [greyedKeys, setgreyedKeys] = useState([]);
  const [yellowKeys, setyellowKeys] = useState([]);
  const [greenKeys, setgreenKeys] = useState([]);

  const endkeys = { 'מ': 'ם', 'נ': 'ן', 'כ': 'ך', 'פ': 'ף', 'צ': 'ץ' };
  const [correctWord, setCorrectWord] = useState("תפוח");

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    if (curAttempt.cul < 4) return;
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[curAttempt.row][i];
    }
    if (wordSet.has(currWord)) {
      setCurAttempt({ ...curAttempt, row: curAttempt.row + 1, cul: 0 });
    } else {
      alert("המילה לא קיימת במאגר");
    }
  };

  const onDelete = () => {
    const newBoard = [...board];
    newBoard[curAttempt.row][curAttempt.cul] = '';
    setBoard(newBoard);
    setCurAttempt({ ...curAttempt, cul: curAttempt.cul - 1 });
  };

  const onCelectLetter = (keyVal) => {
    const newBoard = [...board];
    if (curAttempt.cul === 4 && Object.keys(endkeys).includes(keyVal)) {
      keyVal = endkeys[keyVal];
    }
    newBoard[curAttempt.row][curAttempt.cul] = keyVal;
    setBoard(newBoard);
    if (curAttempt.cul < 4) {
      setCurAttempt({ ...curAttempt, cul: curAttempt.cul + 1 });
    }
  };

  return (
    <div className="App">
      <h1 className='title'>WORDLE</h1>
      <AppContext.Provider value={{ board, setBoard, curAttempt, setCurAttempt, onEnter, onDelete, onCelectLetter, correctWord, endkeys, greyedKeys, setgreyedKeys, yellowKeys, setyellowKeys, greenKeys, setgreenKeys }}>
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;

