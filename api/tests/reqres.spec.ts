import { expect } from "chai";
import apiClient from "../config/apiClient";

describe("ReqRes API – Demo", () => {

    it("POST /users – should create a user", async () => {
        const payload = { name: "Sami", job: "QA Engineer" };
        const response = await apiClient.createUser(payload);

        expect(response.status).to.equal(201);
        expect(response.data).to.have.property("id");
        expect(response.data.name).to.equal("Sami");
    });

    it("GET /users/2 – should fetch an existing user", async () => {
        const response = await apiClient.getUser(2);

        expect(response.status).to.equal(200);
        expect(response.data.data.id).to.equal(2);
    });
});
