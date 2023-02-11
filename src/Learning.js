import React  from "react";
import CountDown from "./Countdown";
const Learning=()=>
{
    

  
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
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}> 
        <h1 style={{paddingRight:"15px"}}>
        {data.hours==0 && data.minutes==0 && data.seconds==0 ? <CountDown minutes={5}/>:<CountDown minutes={data.minutes} seconds={data.seconds}/>}
        </h1>                        
          </div>
        </>
     )
}
export default Learning;