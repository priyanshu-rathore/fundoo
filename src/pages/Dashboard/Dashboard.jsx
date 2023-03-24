import React from 'react'
import Header from "../../components/Header/Header"
import TakeNoteTwo from '../../components/TakeNoteTwo/TakeNoteTwo'
import TakeNoteOne from '../../components/TakeNoteOne/TakeNoteOne'
import { getNotes } from '../../services/dataservice'
import TakeNoteThree from '../../components/TakeNoteThree/TakeNoteThree'
import "./Dashboard.css"
import NavDrawer from '../../components/NavDrawer/NavDrawer'

const Dashboard = () => {

    const[display,setDisplay] = React.useState(true)
    const[displayNav,setDisplayNav] = React.useState(false)
    const[typeOfNotes,setTypeOfNotes] = React.useState("notes")
    const [notes,setNotes] = React.useState([])
    const listenToTakeNoteOne = (a,b) => {
      setDisplay(false)
    }
    const loadData = async() => {
        let data = await getNotes()
        data = data.data.data.data
      //   data = data.filter(dt=>dt.isDeleted==true)
      //   console.log(data)
      //  setNotes(data)
      if(typeOfNotes === "notes"){
        // setNotes(data)
        setNotes(data.filter((noteObj)=>noteObj.isArchived === false && noteObj.isDeleted === false))

      }else if(typeOfNotes === "archive"){
        setNotes(data.filter((noteObj)=>noteObj.isArchived === true && noteObj.isDeleted === false))
      } else  if(typeOfNotes === "trash"){
        setNotes(data.filter((noteObj)=>noteObj.isArchived === false && noteObj.isDeleted === true))
      }
  
    }

   

    React.useEffect(()=> {
       
        loadData()
       
    },[typeOfNotes])

    

  return (
    <div>
        <Header setDisplayNav={setDisplayNav} displayNav={displayNav}/>
        <div className="main-component">
          <div className="side-bar">
          <NavDrawer displayNav={displayNav} setTypeOfNotes={setTypeOfNotes} />
          </div>
          <div className="right-main">
          { display ? 
        <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne}  /> 
        :
        <TakeNoteTwo setDisplay={setDisplay}/> }
        <div className='boxes'>
          {/* <TakeNoteThree/> */}
            {notes.map((note)=><TakeNoteThree notes={notes} title={note.title} description={note.description} color={note.color} id={note.id}
            />)}
          </div>
        </div>
        
        </div>
        
    </div>
  )
}

export default Dashboard