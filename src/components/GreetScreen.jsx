import React from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../contexts/SocketContext';

export default function GreetScreen() {
    const socket = useContext(SocketContext);
    const goTo = useNavigate();
    let [randomKey, setRandomKey] = useState(null);
    let [joinID, setJoinID] = useState(null);

    function createRoom() {
        let randomK = Math.random().toString(36).substring(2, 13);
        //console.log(randomK);
        setRandomKey(() => randomK);
        goTo(`/${randomK}`);
    }

    function joinRoom() {

        goTo(`/${joinID}`);
    }

    return (
        <div className='cont'>
            <h1>Tic Tac Toe</h1>
            <div className="join">
                <input type="text" placeholder='Enter Room ID 🚀' onChange={(e) => {
                    setJoinID(() => e.target.value);
                }} />
                <button onClick={() => joinRoom()}>Join a room</button>
            </div>
            <button onClick={() => createRoom()}>Create a new Room</button>
        </div>
    )
}
