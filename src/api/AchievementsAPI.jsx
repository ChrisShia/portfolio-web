export default {
    get: () =>{
        return fetch('http://localhost:8080/achievements').then(res=> res.json()).catch((error) => {
            console.log(error)
        })
    }
}