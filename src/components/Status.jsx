function Status(board) {
    // write your code here
    let result = "";
    if (
        ((board[0][0] === "X") && (board[0][1] === "X") && (board[0][2] === "X")) ||
        ((board[1][0] === "X") && (board[1][1] === "X") && (board[1][2] === "X")) || // rows matching
        ((board[2][0] === "X") && (board[2][1] === "X") && (board[2][2] === "X")) ||

        ((board[0][0] === "X") && (board[1][0] === "X") && (board[2][0] === "X")) ||
        ((board[0][1] === "X") && (board[1][1] === "X") && (board[2][1] === "X")) || // columns matching
        ((board[0][2] === "X") && (board[1][2] === "X") && (board[2][2] === "X")) ||

        ((board[0][0] === "X") && (board[1][1] === "X") && (board[2][2] === "X")) || // diagonals
        ((board[0][2] === "X") && (board[1][1] === "X") && (board[2][0] === "X"))) {
        result = "X wins";
    } else if (
        ((board[0][0] === "O") && (board[0][1] === "O") && (board[0][2] === "O")) ||
        ((board[1][0] === "O") && (board[1][1] === "O") && (board[1][2] === "O")) || // rows matching
        ((board[2][0] === "O") && (board[2][1] === "O") && (board[2][2] === "O")) ||

        ((board[0][0] === "O") && (board[1][0] === "O") && (board[2][0] === "O")) ||
        ((board[0][1] === "O") && (board[1][1] === "O") && (board[2][1] === "O")) || // columns matching
        ((board[0][2] === "O") && (board[1][2] === "O") && (board[2][2] === "O")) ||

        ((board[0][0] === "O") && (board[1][1] === "O") && (board[2][2] === "O")) || // diagonals
        ((board[0][2] === "O") && (board[1][1] === "O") && (board[2][0] === "O"))) {
        result = "O wins";
    } else if (
        board.some((row) => row.includes(' '))
    ) { result = 'Game in Progress...'; }
    else { result = "Draw!" }

    return result;
}

export default Status;
