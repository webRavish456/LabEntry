import React,{useEffect} from "react";
import "./index.css";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Component from "./Component";
import Container from "./Container";
import Password from "./Password";

function Lab() {

    let data=JSON.parse(localStorage.getItem("time"));

    if(data===null)
    {
        data={
            hours:"0",
            minutes:"0",
            seconds:"0"
        }
     
    }
   

  return (
    <>
       <div className="slider">
        <div className="left">
            <div className="move1">
              <h1>Java</h1>
              <span style={{color:"gray"}}>This course is provisioned by </span><span><b>Nexxt Labs</b></span>
              <nav className="nav">
                 <ul>
                  <li>Labs</li>
                  <li>Exercises</li>
                  <li>Do it Yourself</li>
                 </ul>
              </nav>
              <div>
            <Component name="EXERCISE" completed="completed out of 84" time="9" icon=<EmojiPeopleIcon style={{fontSize:"65px",color:"rgb(6, 246, 230)"}}/>/>
            <Component name="PROJECTS" completed="completed out of 6" time="2" icon=<BarChartIcon  style={{fontSize:"65px",color:"rgb(6, 246, 230)"}}/>/>
            <div style={{paddingBottom:"120px"}}>
            <Component name="TIME SPENT" completed="minutes till now" time="5" icon=<AccessTimeIcon  style={{fontSize:"65px",color:"rgb(6, 246, 230)"}}/>/>
            </div>
            </div>
        </div>
        </div>
        <div className="right">
         <div className="">
         <Container/>
          <div className="time">
          <h1 style={{fontSize:"28px",color:"rgb(6, 246, 230)"}} className="date">{data.hours}:{data.minutes}:{data.seconds} <span style={{color:"rgb(6, 246, 230)",fontSize:"25px"}}>minutes left</span> <div style={{fontSize:"20px",color:"gray"}}>out of 5 minutes</div></h1>
          </div>
          </div>
          <Password/>
        </div>
       </div>
    </>
   
  );
}

export default Lab;