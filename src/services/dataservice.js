import axios from'axios'

let headerConfig  = {
    headers:{
        Authorization: localStorage.getItem("token")
    }
}

export const getNotes = async() => {
    let response  = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    return response
}