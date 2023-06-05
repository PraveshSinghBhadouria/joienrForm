import * as React from 'react';
import {useEffect,useState} from 'react'
import MaterialTable from "@material-table/core";
import { getData,postData, ServerURL } from '../../services/ServerServices';
import {Button,Dialog,DialogActions,DialogContent,DialogTitle,Avatar,
  
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem } from '@mui/material';
  import { useStyles } from "./DisplayJoinerCss";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';








export default function DisplayJoiner(){
  var classes=useStyles()
    var navigate=useNavigate()
    const [joinerData,setJoinerData]=useState([])

    const fetchAllJOinerRecord=async()=>{
        var result=await getData('joinerform/fetch_all_joiner_record')
        setJoinerData(result.data)
       }
     
       useEffect(function(){
        fetchAllJOinerRecord()
     
       },[])
    


    
    function showAllData() {
        return (
          <MaterialTable
            title={<span >Joiner Records</span>}
            columns={[
              { title: 'Name/Employee Code', field: 'employeeCode' ,
               render:rowData=><div>{rowData.fullName}<br/>{rowData.employeeCode}</div>},
               
               {title: 'Date Of Birth / Gender',
               render:rowData=><div>{rowData.dob}<br/>{rowData.gender}</div>},
           
        
               {title: 'Address/Pincode/City/Nationality', field: 'fullPermanentAddress',
               render:rowData=><div>{rowData.fullPermanentAddress}<br/>{rowData.postcode_Pincode}<br/>{rowData.city}<br/>{rowData.nationality}</div>},
               { title: ' currentAddress', field: 'currentAddress' },
               { title: 'Contact Details',
               render:rowData=><div>{rowData.countryCode}{rowData.contactNumber}<br/>{rowData.emailAddress}</div>},

               { title: 'Bank Name/Account Number/sortCode_IFSCCode',
               render:rowData=><div>{rowData.bankName}<br/>{rowData.accountNumber}<br/>{rowData.sortCode_IFSCCode}</div>},

               { title: 'Emergency Contact /FullName/Relation/Contact Number',
               render:rowData=><div>{rowData.emergencyContactFullName}<br/>{rowData.relationship}<br/>{rowData.emergencyContactsPhoneNumber}</div>},
             
              

               { title: 'EMPLOYMENT HISTOIRY/company Name/position Held/employement Dates/reason For Leaving',
               render:rowData=><div>{rowData.companyName}<br/>{rowData.positionHeld}<br/>{rowData.employementDates}<br/>{rowData.reasonForLeaving}
               {rowData.secondCompanyName}<br/>{rowData.secondPositionHeld}<br/>{rowData.secondEmployementDates}<br/>{rowData.secondReasonForLeaving}</div>},
             

             { title: ' Date', field: 'date' },

               { title: 'Reference/Name/Contact/Company/Position/Email',
               render:rowData=><div>{rowData.referenceName}<br/>{rowData.referenceContactNumber}<br/>{rowData.referenceCompany}<br/>{rowData.referencePosition}<br/>{rowData.referenceEmail}
               {rowData.secondReferenceName}<br/>{rowData.secondReferenceContactNumber}<br/>{rowData.secondReferenceCompany}<br/>{rowData.secondReferencePosition}<br/>{rowData.secondReferenceEmail}</div>},
               {title: 'National Insurance Number / Tax Code',
               render:rowData=><div>{rowData.nationalInsuranceNumber}<br/>{rowData.taxCode}</div>},
           
               { title: 'paySlip',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.paySlip}`} style={{width:70,height:70}} variant="rounded"/>},
           
               { title: 'degreeDiplomaPicture',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.degreeDiplomaPicture}`} style={{width:70,height:70}} variant="rounded"/>},
           
               { title: 'digitalSignature',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.signature}`} style={{width:70,height:70}} variant="rounded"/>},
               
                   { title: 'Photograph',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.photo}`} style={{width:70,height:70}} variant="rounded"/>},
               
              
            ]}
            data={joinerData}        
           
            options={{
              rowStyle: {
    
              }, headerStyle: {
                backgroundColor: '#0984e3',
                color: '#FFF'
              },
    
            }}
          />
        )
      }




      return(<div className={classes.mainContainer}>
        <div className={classes.box}>    {showAllData()}
         
          <ToastContainer />
        </div>  
       </div>
)

}

/*
*/