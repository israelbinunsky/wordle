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
    return (
        <div className={'key'} id={bigKey ? 'big' : greyed ? 'greyed' : yellowed ? 'yellowed' : greened ? 'greened' : ''}
 onClick={celectLetter}>
            {keyVal}
        </div>
    );}
export default Key;