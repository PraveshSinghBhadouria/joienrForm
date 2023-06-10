import * as React from 'react';
import AdminAppBar from './AdminAppBar';
import SideList from "./SideList"
import {Routes,Route} from "react-router-dom"


export default function DashBoard2(props) {
  return(    <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
   

         <AdminAppBar />
         <div style={{display:'flex'}}>
          <div style={{width:'15%'}}>
          <SideList />
          </div >
          <div style={{width:'85%'}}>
          <img src='/background.png' style={{width:"100%",}}/>
  
       
          </div>

         </div>
         

    
  </div>)
}