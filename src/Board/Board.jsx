import Letter from "./letter.jsx";
function Board() {
return (
  <div className="board">
    <div className="rowWord">
        <Letter col={0} row={0}/>
        <Letter col={1} row={0}/>
        <Letter col={2} row={0}/>
        <Letter col={3} row={0}/>
        <Letter col={4} row={0}/>
    </div>
    <div className="rowWord">
        <Letter col={0} row={1}/>
        <Letter col={1} row={1}/>
        <Letter col={2} row={1}/>
        <Letter col={3} row={1}/>
        <Letter col={4} row={1}/>
    </div>
    <div className="rowWord">
        <Letter col={0} row={2}/>
        <Letter col={1} row={2}/>
        <Letter col={2} row={2}/>
        <Letter col={3} row={2}/>
        <Letter col={4} row={2}/>
    </div>
    <div className="rowWord">
        <Letter col={0} row={3}/>
        <Letter col={1} row={3}/>
        <Letter col={2} row={3}/>
        <Letter col={3} row={3}/>
        <Letter col={4} row={3}/>
    </div>
    <div className="rowWord">
        <Letter col={0} row={4}/>
        <Letter col={1} row={4}/>
        <Letter col={2} row={4}/>
        <Letter col={3} row={4}/>
        <Letter col={4} row={4}/>
    </div>
    <div className="rowWord">
        <Letter col={0} row={5}/>
        <Letter col={1} row={5}/>
        <Letter col={2} row={5}/>
        <Letter col={3} row={5}/>
        <Letter col={4} row={5}/>
    </div>
  </div>
);
}
export default Board
