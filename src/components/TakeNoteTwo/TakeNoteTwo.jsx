import React from "react";
import "./TakeNoteTwo.css";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { addNotes } from "../../services/dataservice";
import ColorPopper from "../ColorPopper/ColorPopper";
import { Card } from "@mui/material";


const TakeNoteTwo = ({setDisplay}) => {
  const [data,setData] = React.useState({title:"",description:"",isArchived:false,color:""})

  const submit = async () =>{
    // console.log("Notes added successfully")
   let response = await addNotes(data)
   console.log(response)
   
  }
  return (
    <ClickAwayListener onClickAway={()=>{setDisplay(true);submit()}}>
    {/* <div className="takeNoteTwo" style={{backgroundColor:data.color}}> */}
    <Card className="takeNoteTwo" style={{backgroundColor:data.color}} sx={{width:{xs:'80%',md:'30%',sm:'60%',lg:'30%'}}}>
      <div className="toptakenotetwo">
        <input type="text" placeholder="Title" onChange={e=>setData((prev)=>({...prev,title:e.target.value}))} />
        <PushPinOutlinedIcon className="icontwo"/>
      </div>
      <div className="middletakenotetwo">
        <TextareaAutosize placeholder="Take a note..." onChange={e=>setData((prev)=>({...prev,description:e.target.value}))} />
      </div>
      <div className="bottomtakenotetwo">
        <div className="iconstakenotetwo">
        <AddAlertOutlinedIcon  className="icontwo"/>
        <PersonAddAltOutlinedIcon className="icontwo"/>
        <ColorPopper  className="icontwo" action="create" setData={setData} />
        <InsertPhotoOutlinedIcon className="icontwo"/>
        <ArchiveOutlinedIcon className="icontwo" onClick={()=>setData((prev)=>({...prev,isArchived:!prev.isArchived}))}/>
        <MoreVertOutlinedIcon className="icontwo"/>
        <UndoOutlinedIcon className="ico"/>
        <RedoOutlinedIcon className="ico"/>

        </div>
        <div className="close">
            <span onClick={()=>{setDisplay(true);submit()}}>Close</span>
        </div>
      </div>
      </Card>
    {/* </div> */}
    </ClickAwayListener>
  );
};

export default TakeNoteTwo;
