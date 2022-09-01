import Square from "./Square";


function Board(props) {
    return (
        <div className="board">
            <section className="rows">
                <Square row={0} col={0} updateBoard={props.handleClick} value={props.currBoard[0][0]} />
                <Square row={0} col={1} updateBoard={props.handleClick} value={props.currBoard[0][1]} />
                <Square row={0} col={2} updateBoard={props.handleClick} value={props.currBoard[0][2]} />
            </section>
            <section className="rows">
                <Square row={1} col={0} updateBoard={props.handleClick} value={props.currBoard[1][0]} />
                <Square row={1} col={1} updateBoard={props.handleClick} value={props.currBoard[1][1]} />
                <Square row={1} col={2} updateBoard={props.handleClick} value={props.currBoard[1][2]} />
            </section>
            <section className="rows">
                <Square row={2} col={0} updateBoard={props.handleClick} value={props.currBoard[2][0]} />
                <Square row={2} col={1} updateBoard={props.handleClick} value={props.currBoard[2][1]} />
                <Square row={2} col={2} updateBoard={props.handleClick} value={props.currBoard[2][2]} />
            </section>
        </div>
    )
}

export default Board;