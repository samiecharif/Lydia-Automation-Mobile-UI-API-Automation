import { describe, it } from "mocha";
import { expect } from "chai";
import axios from "axios";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" }
});

describe("JSONPlaceholder API Demo", () => {

    it("POST /posts – should create a fake post", async () => {
        const payload = { title: "QA Engineer", body: "Automation test", userId: 1 };

        const response = await client.post("/posts", payload);

        expect(response.status).to.equal(201);
        expect(response.data).to.have.property("id");
        expect(response.data.title).to.equal(payload.title);
    });

    it("GET /users/1 – should fetch an existing user", async () => {
        const response = await client.get("/users/1");

        expect(response.status).to.equal(200);
        expect(response.data).to.have.property("id", 1);
        expect(response.data).to.have.property("email");
    });

});
