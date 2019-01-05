class API {

    static login(user) {
       return fetch('http://localhost:3000/api/v1/signin', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static signup(user) {
        return fetch('http://localhost:3000/api/v1/signup', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static validate() {
        return this.get('http://localhost:3000/api/v1/validate')
    }

    static get(url) {
        return fetch(url, {
            headers: {
                'Authorization': localStorage.getItem('token')
            },
        }).then(resp => resp.json())
    }

    static availabilities(id,date) {
        return fetch(`http://localhost:3000/api/v1/teachers/${id}/availabilities/${date}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
     }).then(resp => resp.json())
    }
    static destroyer (id) {
       return fetch(`http://localhost:3000/api/v1/lessons/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })}

}
export default API