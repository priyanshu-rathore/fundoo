import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import "./TakeNoteOne.css"
import { Card } from '@mui/material';

const TakeNoteOne = ({listenToTakeNoteOne}) => {
  return (
    // <div className='takeNoteOne' onClick={()=>listenToTakeNoteOne("abn",123)}>
    <Card className='takeNoteOne' onClick={()=>listenToTakeNoteOne("abn",123)} sx={{width:{xs:'80%',md:'30%',sm:'60%',lg:'30%'}}}>
        <input type="text" placeholder='Take a note...' />
        <div className="right-icons">
            <CheckBoxOutlinedIcon  className='icon'/>
            <BrushOutlinedIcon className='icon'/>
            <InsertPhotoOutlinedIcon className='icon'/>
        </div>
        </Card>
    // </div>
  )
}

export default TakeNoteOne