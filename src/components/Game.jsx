import Board from "./Board";
import { useState, useContext, useEffect } from "react";
import Status from "./Status";
import History from "./History";
import { SocketContext } from '../contexts/SocketContext';

function Game(props) {
    const { socket } = useContext(SocketContext);
    let startingBoard = new Array(3).fill(0).map((el) => new Array(3).fill(' '));

    let [currBoard, setCurrBoard] = useState(startingBoard);
    let [ifXturn, setIfXturn] = useState(true);
    let [ifJoined, setIfJoined] = useState(false);
    let [status, setStatus] = useState('Game in Progress...');
    //let [history, setHistory] = useState([]);
    //function result
    //let historyIndex = 0;

    useEffect(() => {
        socket.on("oponent", (data) => {
            setIfJoined(() => true);
            console.log(data);
        })
    }, [])


    let handleClick = (row, col) => {
        //console.log([row, col]);
        let arrCopy = JSON.parse(JSON.stringify(currBoard));
        if (arrCopy[row][col] === ' ' && (status === 'Game in Progress...' || status === "Draw!")) {
            //let newHistory = history.slice();
            //newHistory.push([currBoard, ifXturn, status]);
            //setHistory(newHistory);
            //historyIndex++;


            arrCopy[row][col] = ifXturn ? 'X' : 'O';
            //console.log(arrCopy);
            setCurrBoard(arrCopy);
            setIfXturn(!ifXturn);
            setStatus(Status(arrCopy));
        }
    };

    /*
    let getBack = (index) => {
        let tempArr = JSON.parse(JSON.stringify(history[index][0]));
        console.log(tempArr);
        setCurrBoard(tempArr);
        setIfXturn(history[index][1]);
        setStatus(history[index][2]);
        let newHistory = history.slice(0, index);
        setHistory(newHistory);
    }
    */

    return (

        <div className="container">
            <main className="total-board ">
                <h1>Tic-Tac-Toe</h1>
                <h2>{ifJoined ? `Next Player: ${ifXturn ? 'X' : 'O'}` : `Waiting for opponent`}</h2>
                <Board currBoard={currBoard} handleClick={handleClick} />
                <h2 className="status">{status}</h2>
            </main>
            {/* <footer className="history">
                {history.map((elem, ind) => <History index={ind} getBack={getBack} />)}
            </footer> */}
        </div>
    )
}

export default Game;