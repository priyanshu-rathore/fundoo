import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./MorePopper.css"
import { trashNotes } from '../../services/dataservice';

export default function MorePopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const deleteNote = async (id) => {
    let delNote = {noteIdList:[id],isDeleted:true}
    console.log(delNote)
    let response = await trashNotes(delNote)
    props.autoRefresh()
    console.log(response)
  }

  return (
    <div>
              <MoreVertOutlinedIcon className="icon tnti" onClick={handleClick}/>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border:"1px solid rgb(200, 198, 198)" , borderRadius:"7px",width:"100%", bgcolor: 'background.paper' }}>
          <div>
            <ul className='more-list'>
                <li className='more-list-item' onClick={()=>deleteNote(props.noteId)}>Delete note</li>
                <li className='more-list-item'>Add label</li>
                <li className='more-list-item'>Add drawing</li>
                <li className='more-list-item'>Make a copy</li>
                <li className='more-list-item'>Show checkboxes</li>
                <li className='more-list-item'>Copy to Google Docs</li>
            </ul>
          </div>
        </Box>
      </Popper>
    </div>
  );
}