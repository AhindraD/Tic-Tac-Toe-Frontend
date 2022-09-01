import React from 'react'
import Game from './components/Game';
import { Route, Routes } from 'react-router-dom';
import { socket, SocketContext } from './contexts/SocketContext';


export default function App() {
    console.log(socket);
    return (
        <SocketContext.Provider value={socket}>
            <div>App</div>
        </SocketContext.Provider>
    )
}
