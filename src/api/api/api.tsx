import axios from "axios";

const ApiClientManager = () => {
    const apiClientManager = new _ApiClientManager();
    return apiClientManager;
};

class _ApiClientManager {
    path: string;
    token: string;

    constructor() {
        this.path = "https://jsonplaceholder.typicode.com/";
        this.token = "";
    }

    _renderHeader() {
        const _options = {
            headers: {
                Authorization: `${this.token}`,
            },
        };
        return _options;
    }

    get(endpoint: string, query: string) {
        console.log("body", endpoint, query);
        const endpointQuery: string = endpoint + "/" + query
        return axios
            .get(this.path + endpointQuery, this._renderHeader())
            .then((response) => {
                console.log("[GET] response", endpointQuery, response.data);
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    post(endpoint: string, data: object = {}) {
        console.log("body", endpoint, data);
        return axios
            .post(this.path + endpoint, data, this._renderHeader())
            .then((response) => {
                console.log("[POST] response", endpoint, response.data);
                return response;
            })
            .catch((error) => {
                return error;
            });
    }

    patch(endpoint: string, query: string, data: object = {}) {
        console.log("body", endpoint, data)
        const endpointQuery: string = endpoint + (query ? '/' + query : '')
        return axios.patch(this.path + endpointQuery, data, this._renderHeader())
            .then(response => {
                console.log("[PATCH] response", endpointQuery, response.data)
                return response;
            }).catch((error) => {
                return error;
            })
    }

    delete(endpoint: string, query: string) {
        console.log("body", endpoint, query)
        const endpointQuery: string = endpoint + '/' + query
        return axios.delete(this.path + endpointQuery, this._renderHeader())
            .then(response => {
                console.log("[DELETE] response", endpointQuery, response.data)
                return response;
            }).catch((error) => {
                return error;
            })
    }
}

export default ApiClientManager