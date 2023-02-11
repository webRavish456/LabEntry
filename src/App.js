import React from "react";
import { Route, Routes} from "react-router-dom";
import Lab from "./Lab";
import Learning from "./Learning";

function App() {
  
  return (
    <>
        <Routes>
        <Route path="/" element={<Lab/>}/>
        <Route path="/submit" element={<Learning/>}/>
           
        </Routes>
    </>
  )
}

export default App;
