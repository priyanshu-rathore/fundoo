import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./TakeNoteThree.css"
import { archiveNotes, getNotes } from '../../services/dataservice';
import ColorPopper from '../ColorPopper/ColorPopper';
import MorePopper from '../MorePopper/MorePopper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { editNotes } from '../../services/dataservice';
import { trashNotes } from '../../services/dataservice';
import { Card } from '@mui/material';

const TakeNoteThree = ({title,description,color,id,autoRefresh}) => {
  const [input,setInput] = React.useState(title)

  const [open, setOpen] = React.useState(false);
  const [editNote,setEditNote] = React.useState({})
  const handleOpen = (obj) => {setEditNote(obj);
  setOpen(true)};
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const changeInputHandler = (event) => {
    console.log(event)
    setInput(event.target.value)
  }

  const [desc,setDesc] = React.useState(description)

  const changeDescHandler = (event) => {
    setDesc(event.target.value)
  }

  const [noteData,setNoteData] = React.useState({noteIdList:[],isArchived:false})

  const submittwo = async () => {
    let response = await editNotes(editNote)
    console.log(response)
  }

  const loadData = async () =>{
   let data = await getNotes()
   data = data.data.data.data
   for(let i = 0;i<data.length;i++){
    if(data[i].title == title && data[i].description == description){
      setNoteData({noteIdList:[data[i].id],isArchived:true})
    }
 }
  }

  React.useEffect(()=>{
    loadData()
  },[title,description])

  const submit = () =>{
    setNoteData((prev)=>({...prev,isArchived:!noteData.isArchived}))
    console.log(noteData)
    archiveNotes(noteData).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  const deleteNote = async () => {
    let delNote = {noteIdList:[id],isDeleted:true}
    console.log(delNote)
    let response = await trashNotes(delNote)
    console.log(response)
  }
  

  return (
    // <div className='takenotethree' style={{backgroundColor:color}}>
    <Card style={{backgroundColor:color,margin:'1rem',padding:'1rem',height:'100%'}}>
        <div className="toptakenotethree" onClick={()=>handleOpen({title:title,description:description,noteId:id})}>
          <input type="text" placeholder='Title' value={input}  onChange={changeInputHandler}/>
          <PushPinOutlinedIcon className='icon tnti'/>
        </div>
        <div className="middletakenotethree" onClick={()=>handleOpen({title:title,description:description,noteId:id})}>
          <TextareaAutosize placeholder='' onChange={changeDescHandler} value={desc} className="tarea"/>
        </div>
        <div className="bottomtakenotethree" style={{}}>
          <AddAlertOutlinedIcon  className="icon tnti"/>
        <PersonAddAltOutlinedIcon className="icon tnti"/>
        <ColorPopper className="icon tnti" action="edit" id={id} style={{color:'black'}}/>
        <DeleteOutlineIcon onClick={deleteNote} className="icon tnti"/>
        
        <ArchiveOutlinedIcon className="icon tnti" onClick={submit}/>
        <MorePopper noteId={id}/>          
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='modal'
      >
        <Box sx={style} >
        
          <input type="text" defaultValue={editNote.title} onChange={(e)=>setEditNote((prevState)=>({...prevState,title:e.target.value}))}/>
          <TextareaAutosize type="text" defaultValue={editNote.description} onChange={(e)=>setEditNote((prevState)=>({...prevState,description:e.target.value}))} />
          <div className="bottomtakenotethree">
          <AddAlertOutlinedIcon  className="icon tnti"/>
        <PersonAddAltOutlinedIcon className="icon tnti"/>
        <ColorPopper className="icon tnti" action="edit" id={id} style={{color:'black'}}/>
        {/* <InsertPhotoOutlinedIcon className="icon tnti"/> */}
        <DeleteOutlineIcon onClick={deleteNote} className="icon tnti"/>
        <ArchiveOutlinedIcon className="icon tnti" onClick={submit}/>
        <MorePopper/>     
        <span onClick={submittwo} >Close</span>

        </div>
        </Box>
      </Modal>
      </Card>
    // </div>
  )
}




export default TakeNoteThree