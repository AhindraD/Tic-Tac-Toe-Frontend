function Square(props) {
    return (
        <button className="square" onClick={(e) => props.updateBoard(props.row, props.col)}>
            {props.value}
        </button>
    )
}

export default Square;
