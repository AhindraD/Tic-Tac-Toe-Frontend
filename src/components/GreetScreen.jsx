import React from 'react'
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../contexts/SocketContext';

export default function GreetScreen() {
    const { socket, room, setRoom, ifX, setIfX } = useContext(SocketContext);
    const goTo = useNavigate();
    let [randomKey, setRandomKey] = useState(null);
    let [joinID, setJoinID] = useState(null);

    function createRoom() {
        let randomK = Math.random().toString(36).substring(2, 13);
        //console.log(randomK);
        setRandomKey(() => randomK);
        socket.emit("create-room", { roomID: randomK, owner: socket.id });
        setRoom(() => randomK);
        setIfX(() => true);
        goTo(`/${randomK}`);
    }

    function joinRoom() {
        socket.emit("join-room", { roomID: joinID, joiner: socket.id });
        socket.on("join-access", (data) => {
            if (data.valid) {
                setRoom(() => joinID)
                goTo(`/${joinID}`);
                console.log(data.resp);
            }
            else {
                alert(data.resp);
                console.log(data.resp);
            }
        })
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
