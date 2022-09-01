import React, { useContext } from 'react'
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import { socket, SocketContext } from './contexts/SocketContext';
import GreetScreen from './components/GreetScreen';
import { useEffect } from 'react';


export default function App() {
    //console.log(socket);
    useEffect(() => {
        socket.on("ID", (data) => {
            console.log(data);
        })
    }, [])
    return (
        <SocketContext.Provider value={socket}>
            <Routes>
                <Route path='/' element={<GreetScreen />} />
                <Route path='/:roomID' element={<Game />} />
            </Routes>
        </SocketContext.Provider>
    )
}
