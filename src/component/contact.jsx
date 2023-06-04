import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import '../contact.css';

function Contact(){
    return <div className='contact' id='contactMe'>
    <h1 className='Header2'>CONTACT <span className='headMe2'>ME</span> </h1>
    <div className='info'>
    <div>
        <a>
            
        </a>
    </div>
        <div className='card1'>

             <CallIcon className='icon'/>
                <h4 className='attr'>Phone</h4>
                <p className='value'>+976 94363309</p>
                
        </div>
        <div className='card2'>
            <EmailIcon className='icon' />
            <h4 className='attr'>Email</h4>
            <p className='value'>gantulgasarnai0@gmail.com </p>
                
        </div>
        <div className='card1'>
            <FmdGoodIcon className='icon'/>
            <h4 className='attr' >Address</h4>
            <p className='value'>  Khunnu villa residence, 4th khoroo, Khan-Uul district</p>
        </div>
        <div className='card2'>
            <AlarmOnIcon className='icon'/>
            <h4 className='attr'>Freelance Available</h4>
            <p className='value'>I am available <br /> for Freelance hire</p>
               
        </div>
        
    </div>
    <div className='form'>
    <h2>CONTACTS FORM</h2>
    <form>
        <input className='name' type='text' placeholder='Name'/>
        <input className='email' type='text' placeholder='Email'/>
        <input className='msg' type='text' placeholder='Message'/>
        <p className='button3'><button className='button4'>Send message</button></p>
    </form>
    </div>
    </div>;
}

export default Contact;