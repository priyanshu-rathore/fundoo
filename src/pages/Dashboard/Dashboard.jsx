import React from 'react'
import Header from "../../components/Header/Header"
import TakeNoteTwo from '../../components/TakeNoteTwo/TakeNoteTwo'
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne'
import { getNotes } from '../../services/dataservice'

const Dashboard = () => {

    const[display,setDisplay] = React.useState(true)
    const [notes,setNotes] = React.useState([])
    const listenToTakeNoteOne = (a,b) => {
      setDisplay(false)
    }
    const loadData = async() => {
        let data = await getNotes()
       setNotes(data.data.data.data)
  
    }
    React.useEffect(()=> {
       loadData()
    },[])
  return (
    <div>
        <Header/>
        { display ? 
        <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne}  /> 
        :
        <TakeNoteTwo setDisplay={setDisplay}/> }
        <div>
        {notes.map((obj)=><div>{obj.title}</div>)}
        </div>
        
    </div>
  )
}

export default Dashboard