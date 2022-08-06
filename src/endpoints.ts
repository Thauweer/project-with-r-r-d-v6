
export const fetchUsers =  async() => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => {return response.json()})
}

export const getUser =  async(id:any) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then( (response) => {return response.json()})
}
