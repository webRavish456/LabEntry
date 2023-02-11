import React from "react";

const Component=(props)=>
{
     return (
        <>
             <div className="profile">
                 <span className="exercise">
                 <div>{props.icon}</div>
                 </span>
                 <div style={{position:"relative",top:"10px"}}>
                 <div>{props.name}</div>
                   <span style={{color:"rgb(6, 246, 230)",fontSize:"45px"}}>{props.time}</span><span style={{color:"gray"}}>{props.completed}</span>
                 </div>
             </div>
        </>
     )
}
export default Component;