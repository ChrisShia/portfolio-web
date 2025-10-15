export default {
    getCoding: () => {
        return fetch("http://localhost:8080/codingSkills").then(res => res.json()).catch((error) => {
            console.log(error)
        })
    },
    getGeneral: () => {
        return fetch("http://localhost:8080/generalSkills").then(res => res.json()).catch((error) => {
            console.log(error)
        })
    }
}