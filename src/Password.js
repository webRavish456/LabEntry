import React, {useState } from "react";
import "./index.css"
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useNavigate } from "react-router-dom";


 const Password=()=>
{
   const [user,setuser]=useState({
    password:""
   })
   

   let data=JSON.parse(localStorage.getItem("time"));

   if(data===null)
   {
       data={
           hours:"0",
           minutes:"0",
           seconds:"0"
       }
    
   }
   
  
   const handleinput=(e)=>
   {
        const name=e.target.name;
        const value=e.target.value;
        setuser({...user,[name]:value});
   }
   const navigate=useNavigate();


   const handleSumbit=(e)=>
   {
       e.preventDefault();
       setuser({password:""})
   }

   const restart=()=>
   {
    const Data={
      hours:0,
      minutes:5,
      seconds:0
   }

   if(data.hours===0 && data.minutes===0 && data.seconds===0)
   {
     localStorage.setItem("time",JSON.stringify(Data));

   }
   }
 



      
    
  
   const move=()=>
   {
       if(user.password==="")
       {
         alert("Please filled the correct password");
       }
       else if(user.password==="12345678")
       {
         

           if(data.hours===0 && data.minutes===0 && data.seconds===0)
           {
               alert("Expired Time!!!")
           }
           else
           {
              navigate("/submit")
           }
            
       }
       else{
           alert("You have entered wrong password \n Please Try Again!!! ");
           
       }  
   }

    return (
        <>
             <div className="timedown">
           <div className="spent">
             <div className="lab">
            
             <FingerprintIcon style={{fontSize:"115px",color:"rgb(6, 246, 230)"}}/>
                <label htmlFor="password">ENTER THE PILEARNING PASSWORD</label>
                <input type="password"  value={user.password} name="password" onChange={handleinput} required={true} maxLength="8" minLength="8"/>
         
                <button onClick={(e)=>{handleSumbit(e);move()}}>Enter Lab</button>
                {data.hours===0 && data.minutes===0 && data.seconds==0 ?<button onClick={restart} style={{position:"absolute",top:"-150px",right:"-200px"}}>Restart</button>:""}
                </div>
         
           </div>
         </div>
          
        </>
    )
}

export default Password;