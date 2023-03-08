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
const TakeNoteTwo = ({setDisplay}) => {
  return (
    <ClickAwayListener onClickAway={()=>setDisplay(true)}>
    <div className="takeNoteTwo">
      <div className="toptakenotetwo">
        <input type="text" placeholder="Title" />
        <PushPinOutlinedIcon className="icontwo"/>
      </div>
      <div className="middletakenotetwo">
        <textarea placeholder="Take a note..."/>
      </div>
      <div className="bottomtakenotetwo">
        <div className="iconstakenotetwo">
        <AddAlertOutlinedIcon  className="icontwo"/>
        <PersonAddAltOutlinedIcon className="icontwo"/>
        <ColorLensOutlinedIcon className="icontwo"/>
        <InsertPhotoOutlinedIcon className="icontwo"/>
        <ArchiveOutlinedIcon className="icontwo"/>
        <MoreVertOutlinedIcon className="icontwo"/>
        <UndoOutlinedIcon className="ico"/>
        <RedoOutlinedIcon className="ico"/>

        </div>
        <div className="close">
            <span>Close</span>
        </div>
      </div>
    </div>
    </ClickAwayListener>
  );
};

export default TakeNoteTwo;
