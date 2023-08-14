import { io } from "socket.io-client";

export const socket = io("http://localhost:8000/"); // Localhost Endpoint
//export const socket = io("backend-secondhand-production.up.railway.app"); // Localhost Endpoint
//export const socket = io("https://secondhand3.herokuapp.com/"); // Heroku Endpoint