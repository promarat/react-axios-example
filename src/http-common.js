import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL: "https://7ae4-188-43-136-44.ngrok.io/api",
    headers: {
        "Content-type": "application/json"
    }
});