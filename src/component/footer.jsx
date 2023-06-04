import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../footer.css';

function Footer(){
    return <div className="footer">
   <div className="social">
    <a href="https://www.facebook.com/profile.php?id=100022057230699&sk=about"><FacebookIcon className="icon1" /></a>
    <a href="https://www.instagram.com/s_rn_i_8/"><InstagramIcon  className="icon1"/></a>
    <a href="https://github.com/Sarnai1008"> <GitHubIcon className="icon1"/></a>
    </div>
    <div>
    <p className='copyright'><CopyrightIcon className='icon2'/>2023</p> 
    </div>
    </div>;
}
export default Footer;