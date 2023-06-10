import * as React from 'react';
import List from '@mui/material/List';
import {Grid} from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { ServerURL } from '../services/ServerServices';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SideList(props) {
    
/*********useNavigate */
var navigate=useNavigate()
/*********************** */
     var admin=JSON.parse(localStorage.getItem('ADMIN'))
  

    return(<div style={{width:'100%',display:'flex',flexDirection:'row'}}>


    <Divider />
        <List component="nav" style={{width:'100%'}}>
        <React.Fragment>

        <div style={{display:'flex',flexDirection:'column'}}>
      
</div>

<ListItemButton
         
         onClick={()=>navigate('/joinerForm')}
        >
          <ListItemIcon>
          <CategoryIcon />
          </ListItemIcon>
          <ListItemText   primary={<span style={{ color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>Joiner Form</span>} />
   </ListItemButton>
   

<ListItemButton
         
         onClick={()=>navigate('/OnboardForm')}
        >
          <ListItemIcon>
          <CategoryIcon />
          </ListItemIcon>
          <ListItemText   primary={<span style={{ color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>Onboard Form</span>} />
   </ListItemButton>

  

  

  




<Divider/>




<ListItemButton
         
         onClick={()=>navigate('/DisplayOnboard')}
        >
          <ListItemIcon>
          <AddPhotoAlternateIcon />
          </ListItemIcon>
          <ListItemText   primary={<span style={{ color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>Onboard Records</span>} />
   </ListItemButton>



   <ListItemButton
         
         onClick={()=>navigate('/DisplayJoiner')}
        >
          <ListItemIcon>
          <AddPhotoAlternateIcon />
          </ListItemIcon>
          <ListItemText   primary={<span style={{ color:"#273272",fontWeight:900,letterSpacing:1, fontFamily:'Poppins'}}>Joiner Records</span>} />
   </ListItemButton>





        

</React.Fragment>
        </List>
        
        </div>

    )
}