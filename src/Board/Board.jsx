import Letter from "./letter.jsx";
function Board() {
return (
  <div className="board">
    <div className="rowWord">
        <Letter cul={0} row={0}/>
        <Letter cul={1} row={0}/>
        <Letter cul={2} row={0}/>
        <Letter cul={3} row={0}/>
        <Letter cul={4} row={0}/>
    </div>
    <div className="rowWord">
        <Letter cul={0} row={1}/>
        <Letter cul={1} row={1}/>
        <Letter cul={2} row={1}/>
        <Letter cul={3} row={1}/>
        <Letter cul={4} row={1}/>
    </div>
    <div className="rowWord">
        <Letter cul={0} row={2}/>
        <Letter cul={1} row={2}/>
        <Letter cul={2} row={2}/>
        <Letter cul={3} row={2}/>
        <Letter cul={4} row={2}/>
    </div>
    <div className="rowWord">
        <Letter cul={0} row={3}/>
        <Letter cul={1} row={3}/>
        <Letter cul={2} row={3}/>
        <Letter cul={3} row={3}/>
        <Letter cul={4} row={3}/>
    </div>
    <div className="rowWord">
        <Letter cul={0} row={4}/>
        <Letter cul={1} row={4}/>
        <Letter cul={2} row={4}/>
        <Letter cul={3} row={4}/>
        <Letter cul={4} row={4}/>
    </div>
    <div className="rowWord">
        <Letter cul={0} row={5}/>
        <Letter cul={1} row={5}/>
        <Letter cul={2} row={5}/>
        <Letter cul={3} row={5}/>
        <Letter cul={4} row={5}/>
    </div>
  </div>
);
}
export default Board
