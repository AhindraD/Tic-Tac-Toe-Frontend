function History(props) {
    return (
        <button className="history-button" onClick={(e) => props.getBack(props.index)}>
            Move # {props.index}
        </button>
    )
}


export default History;