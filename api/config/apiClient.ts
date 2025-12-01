import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const client = axios.create({
    baseURL: "https://reqres.in/api",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REQRES_API_KEY || ""
    }
});

export default {
    createUser: (payload: any) =>
        client.post("/users", payload),

    getUser: (id: number) =>
        client.get(`/users/${id}`)
};
