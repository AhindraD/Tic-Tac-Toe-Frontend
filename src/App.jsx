import React, { useContext } from 'react'
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import { socket, SocketContext } from './contexts/SocketContext';
import GreetScreen from './components/GreetScreen';
import { useEffect } from 'react';
import { useState } from 'react';


export default function App() {
    //console.log(socket);
    let [room, setRoom] = useState(null);
    useEffect(() => {
        socket.on("ID", (data) => {
            console.log(data);
        })
    }, [])
    return (
        <SocketContext.Provider value={{socket, room, setRoom}}>
            <Routes>
                <Route path='/' element={<GreetScreen />} />
                <Route path='/:roomID' element={<Game />} />
            </Routes>
        </SocketContext.Provider>
    )
}
