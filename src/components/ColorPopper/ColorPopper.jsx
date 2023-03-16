import * as React from 'react';
import Box from '@mui/material/Box';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import Popper from '@mui/material/Popper';
import {changeColor} from '../../services/dataservice'

export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]

  const updateColor = async (color) => {
    // console.log(color,props.action)
    if(props.action == "create"){
        props.setData((prevState)=>({...prevState,color:color}))
    }else{
        let obj = {noteIdList:[props.id],color:color}
        let response = await changeColor(obj)
        console.log(response)
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
     
      <ColorLensOutlinedIcon className="icontwo" onClick={handleClick}/>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box  sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex" }}>
          {colors.map((color)=>(<div onClick={()=> updateColor(color)} style={{height:35,width:35,backgroundColor:color,margin:10,borderRadius:50}}></div>))}
        </Box>
      </Popper>
    </div>
  );
}