import React from "react";
import "../about.css";

import Card from "./Card";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { SkillBars } from 'react-skills';

const skillsData1= [
  {
    name: 'HTML',
    level: 100,
    color: '#9acd32',
  },
  {
    name: 'CSS',
    level: 90,
    color: '#9acd32',
  },
  {
    name: 'JAVASCRIPT',
    level: 80,
    color: '#9acd32',
  }
]
const skillsData2= [
    {
      name: 'JAVA',
      level: 85,
      color: '#9acd32',
    },
    {
      name: 'C/C++',
      level: 70,
      color: '#9acd32',
    },
    {
      name: 'SQL',
      level: 100,
      color: '#9acd32',
    }
  ]
  const skillsData3= [
    {
      name: 'REACT',
      level: 80,
      color: '#9acd32',
    },
    {
      name: 'GITHUB',
      level: 75,
      color: '#9acd32',
    },
    {
      name: 'MSSQL',
      level: 90,
      color: '#9acd32',
    }
  ]


function Aboutme(){
    
return <div id="aboutMe" className="about">
    <div className="Header">
        <h1>ABOUT <span className="headMe">ME</span></h1>
        <p>I CAN DO ALL. &nbsp; JUST BELIEVE ME.</p>
    </div>
   
    
    <div className="personalInfo">
        <div className="info2">
           <p> <label>Frist name </label>&emsp; Sarnai</p>
           <p> <label>Last name </label> &emsp;Gantulga</p>
           <p> <label>Birthdate </label> &emsp;08 Oct 2002</p>
           <p> <label>Nationality </label>&emsp; Mongolian</p>
           <p> <label>University </label>&emsp; NUM</p>
        </div>
        <div className="info1">
          <p> <label>Major </label>&emsp; Software engineer</p>
          <p> <label>From</label>&emsp; Zavkhan, Mongolia</p>
          <p> <label>Age</label> &emsp;21</p>
          <p> <label>Freelance</label> &emsp;Available</p>
          <p> <label>Marital status</label> &emsp;Single</p>
        </div>
        <div className="info3">
          <p><label>Advantages</label></p>
            <p>Critical thinking </p>
            <p>Adaptability</p>
            <p>Self-management</p>
            <p>Creativity</p>
        </div>
    </div>
    <div className="cv">
    <a href="../images/cv.JPEG" download>
      <button className="button"><span>DOWNLOAD MY CV</span></button>
    </a>
    </div>
    <div className="zuraas">
        <hr className="hr1" />
    </div>

    <div className="Resume">
         <div className="edu">
            <h2>EDUCATION</h2>
            <ul>
                <li>
                <Card 
                    icon={<CalendarMonthIcon/>}
                    icon2={<SchoolIcon />}
                    date="2009-2021"
                    title="HIGHSCHOOL"
                    context="I gradudated at the HighSchool of Ikh-Uul soum in Zavkhan province. When I was in highshool, I loved my science subject, such as mathemathics and physics."
                />
                </li>
                <li>
                    <Card 
                        icon2={<SchoolIcon />}
                        icon={<CalendarMonthIcon/>}
                        date="2021 - NOW"
                        title="BACHELOR'S DEGREE - SOFTWARE ENGINEER"
                        context="I am currently studying as a software engineer at the School of Applied Science and Engineering of the NUM"
                    />
                </li>
            </ul>
        </div>
        <div className="exp">
            <h2>EXPERIENCE</h2>
            <ul>
                <li>
                <Card 
                    icon={<CalendarMonthIcon/>}
                    icon2={<CodeIcon/>}
                    date="2022 - NOW"
                    title="HACKUM CLUB- ACTIVITY MEMBER"
                    context="This club is a community of coding students from my  university. Since joining this club, I have participated in many workshops, increased my technological knowledge, and developed my skills such as organizing competitions and teamwork. "
                />
                </li>
                <li>
                <Card 
                icon={<CalendarMonthIcon/>}
                    icon2={<VolunteerActivismIcon />}
                    date="2021 - NOW "
                    title="NUM VOLUNTEER CLUB -  MEMBER"
                    context="I joined this club when I just enrolled the  university because I love volunteering. After joining this club and doing  dozens of volunteer work, I am still learning a lot about how to properly interact with nature, wildlife, and people."
                />
                </li>
            </ul>
        </div>
        <div className="skills">
        <h2>SKILLS</h2>
            <div className="bar1">
                <SkillBars  skills={skillsData1} />
            </div>
            <div className="bar1">
                <SkillBars  skills={skillsData2} />
            </div>
            <div className="bar1">
                <SkillBars  skills={skillsData3} />
            </div>
        
        </div>
    </div>
    <div className="zuraas">
        <hr className="hr1" />
    </div>
</div>

}
export default Aboutme;