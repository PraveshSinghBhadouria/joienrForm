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
  import { useStyles } from "./DisplayOnboardCss"
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


export default function DisplayOnboard(){




    var classes=useStyles()
    var navigate=useNavigate()
    const [onboardData,setOnboardData]=useState([])


    const fetchAllOnboardRecord=async()=>{
        var result=await getData('onboardform/fetch_all_onboard_record')
        setOnboardData(result.data)
       }
     
       useEffect(function(){
        fetchAllOnboardRecord()
     
       },[])
    









       function showAllData() {
        return (
          <MaterialTable
            title={<span >Onboard Records</span>}
            columns={[
              { title: 'Name/Employee Code', field: 'employeeCode' ,
               render:rowData=><div>{rowData.fullName}<br/>{rowData.employeeCode}</div>},
            
               {title: 'Date Of Birth / Gender',
               render:rowData=><div>{rowData.dob}<br/>{rowData.gender}</div>},
           
               { title: ' Position Offered', field: 'positionOffered' },
               { title: ' Date of Joining', field: 'dateOfJoining' },
               { title: ' Department', field: 'department' },
               { title: ' salary', field: 'salary' },
               { title: ' What is your preferred method of communication?  ', field: 'methodOfCommunication' },
                 { title: 'Are you willing to travel for work?  ', field: 'willingToTravelForWork' },
                 { title: ' What do you think makes you a good fit for this position? ', field: 'goodFitForThisPosition' },
                 { title: ' Do you have any prior experience in this field? ', field: 'priorExperienceInThisField' },
                 { title: ' What do you consider to be your greatest strengths? ', field: 'greatestStrengths' },
              
               { title: ' What do you consider to be your greatest weaknesses? ', field: 'greatestWeaknesses' },
               { title: ' Are you a member of any professional organizations or associations? ', field: 'memberOfAnyProfessionalOrganizationsOrAssociations' },
               { title: ' Do you have any professional certifications or licenses? ', field: 'professionalCertificationsOrLicenses' },
               { title: ' What are your career goals? ', field: 'careerGoals' },
               { title: '  Do you have any criminal convictions or pending criminal charges? If yes, please provide details:  ', field: 'pendingCriminalCharges' },
                { title: 'Do you have any medical conditions or allergies we should be aware of? If yes, please provide details: ', field: 'anyMedicalConditionsOrAllergiesWeShouldBeAwareOf' },
                { title: ' Are you willing to work overtime if needed', field: 'willingToWorkOvertimeIfNeeded' },
                { title: ' Employee Handbook', field: 'employeeHandbook' },
                { title: ' Confidentiality and Non-Disclosure Agreement ', field: 'confidentialityAndNonDisclosureAgreement' },
                { title: ' Acceptable Use Policy', field: 'acceptableUsePolicy' },
                { title: ' Data Protection and Privacy Policy ', field: 'dataProtectionAndPrivacyPolicy' },
                
              
             { title: ' Date', field: 'date' },

              
               { title: 'Digital Signature',
               render:rowData=><Avatar src={`${ServerURL}/images/${rowData.signature}`} style={{width:70,height:70}} variant="rounded"/>},
               
            ]}
            data={onboardData}        
           
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