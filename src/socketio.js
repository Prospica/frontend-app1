import { io } from "socket.io-client";

//export const socket = io("http://localhost:8000/"); // Localhost Endpoint
//export const socket = io("backend-secondhand-production.up.railway.app"); // Localhost Endpoint
  export const socket = io("https://backend-app1-4601f9513a01.herokuapp.com/"); // Heroku Endpoint
