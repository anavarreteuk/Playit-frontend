class API {
    static signin(user) {
       return fetch('http://localhost:3000/api/v1/signin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }
}
export default API