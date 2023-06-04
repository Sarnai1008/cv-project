import React from "react";
import '../menu.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SpeedDial from '@mui/material/SpeedDial';
import { SpeedDialAction } from "@mui/material";


const actions = [
    { icon:   <a href="#home"><HomeIcon /></a>, name: "Home"},
    { icon:  <a href="#aboutMe"><PersonIcon /></a>, name: "About me"},
    {icon:  <a href="#"><CodeIcon /></a>, name:"What I do"},
    { icon:   <a href="#contactMe"><ContactPageIcon /></a>, name: "Contact me"}
  ];  

function Menu(){
   return <div className="MenuBar">               
      <SpeedDial
      className="MenuButton"
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', top: 16, left: 16 , '& .MuiFab-primary': { backgroundColor: '#BFCCB5', color: 'white' , '&:hover': {backgroundColor: 'black', color: 'white'} } }}
        icon={<MenuIcon style={{color:"white"}}/>}
        direction="down"
      >
        {actions.map((action) => (
           <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
   </div>;
}

export default Menu;