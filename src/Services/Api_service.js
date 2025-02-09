class Api_service {
    static baseServer = 'http://localhost:3005';

    static call(endpoint, method = 'GET', body = null, queryParams = {}) {
        const queryString = new URLSearchParams(queryParams).toString();
        const url = queryString ? `${this.baseServer}${endpoint}?${queryString}` : `${this.baseServer}${endpoint}`;

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            ...(body && { body: JSON.stringify(body) }),
        };

        return fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(`HTTP ${method} request failed:`, error);
                throw error;
            });
    }
}

export default Api_service;
