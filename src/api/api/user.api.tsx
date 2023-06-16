/* eslint-disable @typescript-eslint/no-explicit-any */
import ApiClientManager from "./api";

const ApiManagerUser = () => {
    const client = ApiClientManager()
    const apiManager = new ApiManager(client)
    return apiManager
}

class ApiManager {
    client: any;
    route: string;

    constructor(client: any) {
        this.client = client;
        this.route = "users"
    }

    getAllUsers() {
        const result = this.client.get(this.route)
        return result;
    }

    getUserById(userId: string) {
        const result = this.client.get(this.route, userId)
        return result;
    }
}


export default ApiManagerUser