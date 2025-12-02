import { useContext } from 'react';
import { AppContext } from './App.jsx';
function GameOver() {
const {endGame, correctWord} = useContext(AppContext);
  return (
    <div>
        <h1>Game Over</h1>
        {endGame.guessedWord ? <h3>You guessed the word!</h3> : <h3>Sorry, you did not guess the word.</h3>}
        <h2>the word is {correctWord}</h2>
        <button className='buttonRestart' onClick={() => window.location.reload()}>
            Restart Game
        </button>
    </div>
  )
}
export default GameOver;