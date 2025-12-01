import axios from "axios";

const client = axios.create({
    baseURL: "https://reqres.in/api",
    adapter: "http", 
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

class ApiClient {
    async createUser(data: any) {
        return client.post("/users", data);
    }

    async getUser(id: number) {
        return client.get(`/users/${id}`);
    }
}

export default new ApiClient();
