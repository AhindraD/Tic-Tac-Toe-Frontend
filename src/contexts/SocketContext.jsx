import { createContext } from "react";
import io from "socket.io-client";

const socket = io("https://tictactoe-multiweb.onrender.com/", { transports: ['websocket'] });
const SocketContext = createContext(null);

export { socket, SocketContext };