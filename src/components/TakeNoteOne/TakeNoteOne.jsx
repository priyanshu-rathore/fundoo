import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import "./TakeNoteOne.css"

const TakeNoteOne = ({listenToTakeNoteOne}) => {
  return (
    <div className='takeNoteOne' onClick={()=>listenToTakeNoteOne("abn",123)}>
        <input type="text" placeholder='Take a note...' />
        <div className="right-icons">
            <CheckBoxOutlinedIcon  className='icon'/>
            <BrushOutlinedIcon className='icon'/>
            <InsertPhotoOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default TakeNoteOne