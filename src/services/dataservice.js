import axios from'axios'

let headerConfig  = {
    headers:{
        Authorization: localStorage.getItem("token"),
        "Access-Control-Allow-Origin": "true"
    }
}

export const getNotes = async() => {
    let response  = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    return response
}

export const addNotes = async (data) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",data,headerConfig)
    return response
}

export const archiveNotes = async data =>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",data,headerConfig)
    return response
}

export const changeColor = async (data) =>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",data,headerConfig)
    return response
}

export const trashNotes = async (data) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",data,headerConfig)
    return response
}

export const editNotes = async (data) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",data,headerConfig)
    return response
}