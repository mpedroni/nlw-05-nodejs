import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io"
import path from "path";

import "./database";
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.use(express.json());
app.use(routes);

const http = createServer(app); // criando protocolo http
const io = new Server(http);    // criando protocolo ws (websocket)

io.on("connection", (socket: Socket) => {
  // console.log("connected", socket.id);
});


export { http, io };