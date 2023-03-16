import React from 'react'
import Header from "../../components/Header/Header"
import TakeNoteTwo from '../../components/TakeNoteTwo/TakeNoteTwo'
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne'
import { getNotes } from '../../services/dataservice'
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree'
import "./Dashboard.css"

const Dashboard = () => {

    const[display,setDisplay] = React.useState(true)
    const [notes,setNotes] = React.useState([])
    const listenToTakeNoteOne = (a,b) => {
      setDisplay(false)
    }
    const loadData = async() => {
        let data = await getNotes()
        data = data.data.data.data
        data = data.filter(dt=>dt.isDeleted==true)
        console.log(data)
       setNotes(data)
  
    }

    const autoRefresh = () =>{
      loadData()
    }

    React.useEffect(()=> {
       loadData()

    })
  return (
    <div>
        <Header/>
        { display ? 
        <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne}  /> 
        :
        <TakeNoteTwo setDisplay={setDisplay}/> }
        <div className='boxes'>
          {/* <TakeNoteThree/> */}
            {notes.map((note)=><TakeNoteThree notes={notes} title={note.title} description={note.description} color={note.color} id={note.id}
            autoRefresh={autoRefresh} 
            />)}
        </div>
        
    </div>
  )
}

export default Dashboard