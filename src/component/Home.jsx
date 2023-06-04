import React from "react";
import Typewriter from "typewriter-effect";
import zurag1 from '../images/profile.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import Menu from './Menu.jsx';
import '../home.css';


function Home(){
    return <div className="homePage" id="home">
    <Menu />
     <div className="img">
         <img className="tseejZurag1" src={zurag1} alt="hha"/>
     </div>


     <div className="text" >

         <div className="hello">
             <h3> Hello!  Welcome to my personal web. </h3>
         </div>

         <div className="Bi">
             <h1> I&apos;m
             <span className="majorName">
             <Typewriter 
             options={{
                 strings: [
                     " Sarnai .",
                     " a front-end developer.",
                     " a software engineer.",
                   ],
                   autoStart: true,
                   loop: true,
             }}
             /> 
             </span>
             </h1>
         </div>
         <p className="towch-taniltsuulga">
             I&apos;m software engineer based in Ulaanbaatar, Mongolia. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
         </p>
         <div className="btn">
             <a href="#aboutMe"><button href='#aboutMe' className="button1"><span><PersonIcon/> &nbsp; About me</span></button></a>
             <a href="https://github.com/Sarnai1008"><button className="button2"><span><GitHubIcon /> &nbsp;My github </span></button></a>
         </div>
    </div>
    </div>
}
export default Home;