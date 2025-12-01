import { useEffect, useCallback, useContext} from "react";
import { AppContext } from "../App.jsx";
import Key from "./Key.jsx";

function Keyboard() {
const keys1 = ['ק', 'ר', 'א', 'ט', 'ו', 'פ'];
const keys2 = ['ש', 'ד', 'ג', 'כ', 'ע','י', 'ח', 'ל'];
const keys3 = ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת'];
const endkeyslist = ['ם', 'ן', 'ך', 'ף', 'ץ'];

const { onEnter, onDelete, onCelectLetter, greyedKeys, yellowKeys, greenKeys } = useContext(AppContext);

const handleKeyboard = useCallback((event) => {
    if (event.key === 'Enter') { onEnter(); }
    else if (event.key === 'Backspace') { onDelete(); }
    else {
        const key = event.key;
        if (keys1.includes(key) || keys2.includes(key) || keys3.includes(key) || endkeyslist.includes(key)) {
            onCelectLetter(key);
        }
    }
});
useEffect(() => {
    document.addEventListener('keydown', handleKeyboard)
    return () => {
        document.removeEventListener('keydown', handleKeyboard)
    };}
    , [handleKeyboard]);

return (
    <div className="keyboard" onKeyDown={handleKeyboard}> 
        <div className="rowKeyboard">
            <Key keyVal={'Delete'} bigKey />
            {keys1.map((key) => (<Key key={key} keyVal={key} 
            greyed={greyedKeys.includes(key)}
            yellowed={yellowKeys.includes(key)}
            greened={greenKeys.includes(key)}/>))}
            <Key keyVal={'Enter'} bigKey/>
        </div>
        <div className="rowKeyboard">
            {keys2.map((key) => (<Key key={key} keyVal={key} 
            greyed={greyedKeys.includes(key)}
            yellowed={yellowKeys.includes(key)}
            greened={greenKeys.includes(key)}/>))}
        </div>
        <div className="rowKeyboard">
            {keys3.map((key) => (<Key key={key} keyVal={key} 
            greyed={greyedKeys.includes(key)}
            yellowed={yellowKeys.includes(key)}
            greened={greenKeys.includes(key)}/>))}
        </div>
    </div>
);}
export default Keyboard;
