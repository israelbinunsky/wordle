import { useContext } from 'react';
import { AppContext } from '../App.jsx';

function Key({keyVal, bigKey, greyed, yellowed, greened}) {
    const {onEnter, onDelete, onCelectLetter} = useContext(AppContext);
    const celectLetter = () => {
        if (keyVal === 'Enter') {
            onEnter();
        } else if (keyVal === 'Delete') {
            onDelete();
        } else {
            onCelectLetter(keyVal);
        }
    }
    const classes = [
        'key',
        bigKey ? 'big' : '',
        greyed ? 'greyed' : '',
        yellowed ? 'yellowed' : '',
        greened ? 'greened' : ''
    ].join(' ');

    return (
        <div className={classes}
 onClick={celectLetter}>
            {keyVal}
        </div>
    );}
export default Key;