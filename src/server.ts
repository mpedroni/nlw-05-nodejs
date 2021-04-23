import { http } from "./http";
import "./websocket/client";

http.listen(3333, () => console.log("server is running on port 3333")); // também inicializa o io