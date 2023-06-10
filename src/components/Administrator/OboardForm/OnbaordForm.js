import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Swal from 'sweetalert2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { postData } from '../../services/ServerServices';
import { useStyles } from '../OboardForm/OnbaordCss';
import AdminAppBar from "../AdminAppBar"



export default function OnboardForm(){


  var classes=useStyles();
        
/*************Getter & Setter ******************************************************************************************* */
   

   /*************PERSONAL DETAILS************************************************* */
   const [employeeCode,setEmployeeCode]=useState('')
   const [fullName,setFullName]=useState('')
   const [dob,setDob]=useState(null)
   const [gender,setGender]=useState('')
   const [nationality,setNationality]=useState('')
   const [fullPermanentAddress,setFullPermanentAddress]=useState('')
   const [currentAddress,setCurrentAddress]=useState('')
   const [city,setCity]=useState('')
   const [postcode_Pincode,setPostcdoe_Pincode]=useState('')
   const [emailAddress,setEmailAddress]=useState('')
   const [contactNumber,setContactNumber]=useState('')
   const [countryCode,setCountryCode]=useState('')
   const [maritalStatus,setMaritalStatus]=useState('')
/********************************************************************************************** */
   


/*************************main Data************************************ */
const [onboardData,setOnboardData]=useState([])


/************************************************************ */




/*****EmploymentInformation*************************************************** */
const [positionOffered,setPositionOffered]=useState('')
const [dateOfJoining,setDateOfJoining]=useState(null)
const [department,setDepartment]=useState('')
const [salary,setSalary]=useState('')
const [workLocation,setWorkLocation]=useState('')
const [employmentType,setEmploymentType]=useState('')
const [workSchedule ,setWorkSchedule ]=useState('')
const [managerName,setManagerName]=useState('')



/************************************************************************ */





/*********Health and Medical Information:  *********************** */
const [methodOfCommunication,setMethodOfCommunication]=useState('')
const [willingToTravelForWork,setWillingToTravelForWork]=useState('')
const [goodFitForThisPosition,setGoodFitForThisPosition]=useState('')
const [priorExperienceInThisField,setPriorExperienceInThisField]=useState('')
const [greatestStrengths,setGreatestStrengths]=useState('')
const [greatestWeaknesses,setGreatestWeaknesses]=useState('')
const [memberOfAnyProfessionalOrganizationsOrAssociations,setMemberOfAnyProfessionalOrganizationsOrAssociations]=useState('')
const [professionalCertificationsOrLicenses,setProfessionalCertificationsOrLicenses]=useState('')
const [careerGoals,setCareerGoals]=useState('')
const [pendingCriminalCharges,setPendingCriminalCharges]=useState('')
const [anyMedicalConditionsOrAllergiesWeShouldBeAwareOf,setAnyMedicalConditionsOrAllergiesWeShouldBeAwareOf]=useState('')
const [willingToWorkOvertimeIfNeeded,setWillingToWorkOvertimeIfNeeded]=useState('')

/************************************************************************ */



/******Policies and Agreements:  ********************** */
const [employeeHandbook ,setEmployeeHandbook]=useState('')
const [confidentialityAndNonDisclosureAgreement ,setConfidentialityAndNonDisclosureAgreement]=useState('')
const [acceptableUsePolicy ,setAcceptableUsePolicy]=useState('')
const [dataProtectionAndPrivacyPolicy ,setDataProtectionAndPrivacyPolicy]=useState('')
/*********************************************************** */

/**********Declaration:  ***************************** */

const [signature,setSignature]=useState({
    fileName: "/signature.png",
    bytes: "",
  })
  const [date,setDate]=useState(null)
  const [error,setError]=useState({})
  const [btnStatus,setBtnStatus]=useState(false)
/********************************************* */



/************************************************************************************************************************************* */
   




/**********************Fetching Data From Backend According to Employee Code********************************* */



const fetchAllOnboardDetail=async(employeeCode)=>{

    var body={'employeeCode':employeeCode}
    var result=await postData("onboardform/fetch_all_onboard",body)
    console.log("xxxxxxxx",body)
    setOnboardData(result.data)
   console.log("xxxxxx",result.data)
  }
  
/**************************************************************************************************************** */  






const handleEmployeeCode=(event)=>{
    setEmployeeCode(event.target.value)
    fetchAllOnboardDetail(event.target.value)
    setBtnStatus(true)
}








const handleError=(inputs,value)=>{
  setError(prev=>({...prev,[inputs]:value}))
  }
  
  const validation=()=>{
    var isValid=true

    if(!employeeCode)
    {
      handleError("employeeCode","Invalid Employee Code")
      isValid=false
     }
  
        if(!positionOffered)
        {
          handleError("positionOffered","Invalid Position Offered ")
          isValid=false
         }
      
          
    

         if(!maritalStatus)
         {
           handleError("maritalStatus","Invalid Marital Status ")
           isValid=false
          }
       


    if(!dateOfJoining)
    {
      handleError("dateOfJoining","Invalid Date Of Joining ")
      isValid=false
     }



    if(!department)
    {
      handleError("department","Invalid Department  ")
      isValid=false 
    }



    if(!salary)
    {
      handleError("salary","Invalid Salary ")
      isValid=false
    }
    
      if(!workLocation)
      {
        handleError("workLocation","Invalid WorkLocation ")
        isValid=false
       }
   
        


          if(!employmentType)
          {
            handleError("employmentType","Invalid Employement Type ")
            isValid=false
           }
         



           if(!workSchedule)
          {
            handleError("workSchedule","Invalid Work Schedule ")
            isValid=false
           }
         

           if(!managerName)
          {
            handleError("managerName","Invalid   Manager Name ")
            isValid=false
           }
         

           if(!methodOfCommunication)
          {
            handleError("methodOfCommunication","Invalid Method Of Communication ")
            isValid=false
           }
         

           if(!willingToTravelForWork)
          {
            handleError("willingToTravelForWork","Invalid Willing To Travel For Work")
            isValid=false
           }
         

           if(!goodFitForThisPosition)
          {
            handleError("goodFitForThisPosition","Invalid  ")
            isValid=false
           }
         

           if(!priorExperienceInThisField)
          {
            handleError("priorExperienceInThisField","Invalid    ")
            isValid=false
           }
         

           if(!greatestStrengths)
          {
            handleError("greatestStrengths","Invalid    ")
            isValid=false
           }
         

           if(!greatestWeaknesses)
          {
            handleError("greatestWeaknesses","Invalid   ")
            isValid=false
           }
         

           if(!memberOfAnyProfessionalOrganizationsOrAssociations)
          {
            handleError("memberOfAnyProfessionalOrganizationsOrAssociations","Invalid  ")
            isValid=false
           }
         

           if(!professionalCertificationsOrLicenses)
          {
            handleError("professionalCertificationsOrLicenses","Invalid  ")
            isValid=false
           }
         

           if(!careerGoals)
          {
            handleError("careerGoals","Invalid")
            isValid=false
           }
         




           if(!pendingCriminalCharges)
           {
             handleError("pendingCriminalCharges","Invalid  ")
             isValid=false
            }
          
 
            if(!anyMedicalConditionsOrAllergiesWeShouldBeAwareOf)
           {
             handleError("anyMedicalConditionsOrAllergiesWeShouldBeAwareOf","Invalid  ")
             isValid=false
            }
          
 
            if(!willingToWorkOvertimeIfNeeded)
           {
             handleError("willingToWorkOvertimeIfNeeded","Invalid")
             isValid=false
            }
          
 




         

           if(!employeeHandbook)
          {
            handleError("employeeHandbook","Invalid Employee Handbook ")
            isValid=false
           }
         

           if(!confidentialityAndNonDisclosureAgreement)
          {
            handleError("confidentialityAndNonDisclosureAgreement","Invalid ")
            isValid=false
           }
         

           if(!signature)
          {
            handleError("signature","Invalid Signature ")
            isValid=false
           }

           if(!date)
           {
             handleError("date","Invalid date ")
             isValid=false
            }
            if(!acceptableUsePolicy)
            {
              handleError("acceptableUsePolicy","Invalid  ")
              isValid=false
             }
             if(!dataProtectionAndPrivacyPolicy)
             {
               handleError("dataProtectionAndPrivacyPolicy","Invalid  ")
               isValid=false
              }

      return isValid
  }
  











  const handleOnboardDataToSeT=()=>{
    
 
    let fullName
    let dob
   let   gender

   let nationality
  let fullPermanentAddress
  let currentAddress
  let city
  let postcode_Pincode
  let emailAddress
  let contactNumber
  let countryCode
  
    onboardData.map((item)=>{
      fullName=JSON.stringify(item.fullName)
    
      gender=JSON.stringify(item.gender)
      nationality=JSON.stringify(item.nationality)
      dob=JSON.stringify(item.dob)
      fullPermanentAddress=JSON.stringify(item.fullPermanentAddress)
      currentAddress=JSON.stringify(item.currentAddress)
      city=JSON.stringify(item.city)
      postcode_Pincode=JSON.stringify(item.postcode_Pincode)
      emailAddress=JSON.stringify(item.emailAddress)
      contactNumber=JSON.stringify(item.contactNumber)
      countryCode=JSON.stringify(item.countryCode)
     

    })
  
    setFullName(fullName)
    setDob(dob)
    setGender( gender)
    setNationality(nationality)
    setFullPermanentAddress(fullPermanentAddress)
    setCurrentAddress(currentAddress)
    setCity(city)
    setPostcdoe_Pincode(postcode_Pincode)
    setEmailAddress(emailAddress)
    setContactNumber(contactNumber)
    setCountryCode(countryCode)

  }







  const handleDateOfJoining = (date) => {
    setDateOfJoining(date);
    handleOnboardDataToSeT()
  };
  







  const HandleSubmit=async()=>{

    if(validation())
    {
    
  
    var formData=new FormData()
    formData.append('employeeCode',employeeCode)
    formData.append('fullName',fullName)
  
    formData.append('dob',dob)
  
    formData.append('gender',gender)
  
    formData.append('nationality',nationality)
  
    formData.append('fullPermanentAddress',fullPermanentAddress)
  
    formData.append('currentAddress',currentAddress)
    formData.append('city',city)
  
    formData.append('postcode_Pincode',postcode_Pincode)
  
    formData.append('emailAddress',emailAddress)
  
    formData.append('countryCode',countryCode)
 
    formData.append('contactNumber',contactNumber)
  
    formData.append('maritalStatus',maritalStatus)
  
    formData.append('positionOffered',positionOffered)
  
    formData.append('dateOfJoining',dateOfJoining)
  
    formData.append('department',department)
  
    formData.append('salary',salary)
  
    formData.append('workLocation',workLocation)
    formData.append('employmentType',employmentType)
  
    formData.append('workSchedule',workSchedule)
  
    formData.append('managerName',managerName)
  
    formData.append('methodOfCommunication',methodOfCommunication)
  
    formData.append('willingToTravelForWork',willingToTravelForWork)
    formData.append('goodFitForThisPosition',goodFitForThisPosition)
  
    formData.append('priorExperienceInThisField',priorExperienceInThisField)
  
    formData.append('greatestStrengths',greatestStrengths)
  
    formData.append('greatestWeaknesses',greatestWeaknesses)
  
    formData.append('memberOfAnyProfessionalOrganizationsOrAssociations',memberOfAnyProfessionalOrganizationsOrAssociations)
  
    formData.append('professionalCertificationsOrLicenses',professionalCertificationsOrLicenses)
  
    formData.append('careerGoals',careerGoals)
  
     formData.append('pendingCriminalCharges',pendingCriminalCharges)
  
    formData.append('anyMedicalConditionsOrAllergiesWeShouldBeAwareOf',anyMedicalConditionsOrAllergiesWeShouldBeAwareOf)
    formData.append('willingToWorkOvertimeIfNeeded',willingToWorkOvertimeIfNeeded)
  
    formData.append('employeeHandbook',employeeHandbook)
  
    formData.append('confidentialityAndNonDisclosureAgreement',confidentialityAndNonDisclosureAgreement)
  
    formData.append('acceptableUsePolicy',acceptableUsePolicy)
  
    formData.append('signature',signature.bytes)
    formData.append('date',date)
    formData.append('dataProtectionAndPrivacyPolicy',dataProtectionAndPrivacyPolicy)
  
  
    var result=await postData("onboardform/add_new_onboard",formData)
  
    if(result.status)
    {
      Swal.fire({
        icon: 'success',
        title: 'Onboard Form Submitted successfully',
       
      })
      
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Onboard Form  Not Submitted ',
       
        
      })
    }
  
  
    var FormName="Onboarding"
  
  var body={'email':emailAddress,'name':fullName,'formname':FormName}
  
  const res= await postData("register/register",body,{
    header:{Accept:"application/json",
  "content-Type":"application/json"}
  


  })
  
HandleReset()

  
  }
}


const HandleReset=()=>{
setBtnStatus(false)
  setEmployeeCode("")
  setPositionOffered('')
  setMaritalStatus('')
  setDateOfJoining(null)
  setDepartment('')
  setSalary('')
  setWorkLocation('')
  setEmploymentType('')
  setWorkSchedule('')
  setManagerName('')
  setMethodOfCommunication('')
  setWillingToTravelForWork('')
  setGoodFitForThisPosition('')
  setPriorExperienceInThisField('')
  setGreatestStrengths('')
  setGreatestWeaknesses('')
  setMemberOfAnyProfessionalOrganizationsOrAssociations('')
  setProfessionalCertificationsOrLicenses('')
  setCareerGoals('')
  setPendingCriminalCharges('')
  setAnyMedicalConditionsOrAllergiesWeShouldBeAwareOf('')
  setWillingToWorkOvertimeIfNeeded('')

  setEmployeeHandbook('')
  setConfidentialityAndNonDisclosureAgreement('')
  setAcceptableUsePolicy('')
  setDataProtectionAndPrivacyPolicy('')
  setSignature({
    fileName: "/signature.png",
    bytes: "",
  })
  setDate(null)



}












const Heading=()=>{
return(<div >
     <Grid item xs={12} fullWidth className={classes.rowStyle} style={{marginLeft:4,marginTop:3,marginRight:0}} >
        <div  >

          <img src='/logo.png' width='65'/>
       
          </div>
       <div className={classes.headingStyle } style={{marginLeft:10,padding:8,color:"#273272", }}>
       ONBOARD FORM
        </div>
        
      </Grid>

      <hr style={{marginLeft:15,marginTop:30,marginRight:0}} color="#3498db" width="100%" ></hr>
  
 
      <h3 style={{fontSize:17,color:"#273272",fontWeight:'bolder',marginTop:30}}>Personal Information </h3>
       
    </div>)
}




const EmployeeButton=()=>{
    return(<div><Grid item xs={12}>
        <Grid item xs={12}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"    value={employeeCode} onChange={handleEmployeeCode}  label="Employee Code" variant="outlined" />
        </Grid>
       { btnStatus?<div>
        {fillAllOnboardDetail()}</div>:<div></div>}
       </Grid></div>)
}







const fillAllOnboardDetail=()=>{

    return onboardData.map((item)=>{
      return(  <div  style={{marginTop:10}}>
         <Grid container spacing={2}>
         <Grid item  xs={12} lg={6}>
          
         <TextField  InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"   value={item.fullName}  label="Full Name of the Employee" variant="outlined" />

        </Grid>

        <Grid item xs={12} lg={3}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{fontSize:13}}>Country Code</InputLabel>
        <Select
          labelId="Code"
          id="Code"
          value={item.countryCode}
          label="Code"
          size="small"
               >
          <MenuItem value={"+91"}>India +91</MenuItem>
          <MenuItem value={"+1"}>USA +1</MenuItem>
          <MenuItem value={"+7"}>Russia +7</MenuItem>
        </Select>
      </FormControl>
      </Grid>




      <Grid item xs={12} lg={3}>
      <TextField InputLabelProps={{style: {fontSize: 13}}} size="small" fullWidth  value={item.contactNumber}   label="Personal Contact Number" variant="outlined" />

           </Grid>
  
           <Grid item xs={4}>
         <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"   value={item.fullPermanentAddress}   label="Full Permanent Address" variant="outlined" />

         </Grid>

         <Grid item xs={4}>
         <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"   value={item.currentAddress}    label="Current Address" variant="outlined" />

         </Grid>

         <Grid item xs={4}>
         <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth  size="small" value={item.emailAddress}    label="Personal Email Address" variant="outlined" />

         </Grid>
         
        
        


         <Grid item xs={2}>
         <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth  size="small"  value={item.nationality}  label="Nationality" variant="outlined" />

         </Grid>

         
         <Grid item xs={2}>
         <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth  size="small"   value={item.city}    label="City" variant="outlined" />

         </Grid>
         <Grid item xs={2}>
         <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth  size="small"  value={item.postcode_Pincode}   label="Postcode/Pincode" variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField  InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"   value={item.dob}   label="Date of Birth" variant="outlined" />

         </Grid>


       


    <Grid item xs={3} style={{justifyContent:''}}>
         <FormControl  >
      <FormLabel  >Gender</FormLabel >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={item.gender}
       
      >
      
        <FormControlLabel     value="Male"  control={<Radio />} label="Male" />
        <FormControlLabel   value="Female" control={<Radio />} label="Female" />
       
      </RadioGroup>
    </FormControl>
         </Grid>


         


  
  
      </Grid>
      </div>
  
      )
    })
  }
  



const EmploymentInformation=()=>{
    return(<div>
               
               <h3 style={{fontSize:17,color:"#273272",fontWeight:'bolder',marginTop:30}}>Employment Information </h3>
       
  <Grid container spacing={2}>
           <Grid item xs={4}>
           <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.positionOffered?false:true} helperText={error.positionOffered} onFocus={()=>handleError('positionOffered',null)}    value={positionOffered}  onChange={(event)=>setPositionOffered(event.target.value)}  label="Position Offered" variant="outlined" />
           </Grid>
          


    <Grid item xs={4}>
           <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.maritalStatus?false:true} helperText={error.maritalStatus} onFocus={()=>handleError('maritalStatus',null)}    value={maritalStatus}  onChange={(event)=>setMaritalStatus(event.target.value)}   label="Marital Status" variant="outlined" />
           </Grid>

           <Grid item xs={4}>
           <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.department?false:true} helperText={error.department} onFocus={()=>handleError('department',null)}   value={department} onChange={(event)=>setDepartment(event.target.value)}  label="Department" variant="outlined" />
           </Grid>
            <Grid item xs={4}>
           <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.salary?false:true} helperText={error.salary} onFocus={()=>handleError('salary',null)}    value={salary}  onChange={(event)=>setSalary(event.target.value)}  label="Salary" variant="outlined" />
           </Grid>
           
           <Grid item xs={8}>
           <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.employmentType?false:true} helperText={error.employmentType} onFocus={()=>handleError('employmentType',null)}     value={employmentType}  onChange={(event)=>setEmploymentType(event.target.value)}  label="Employment Type (Full-time/Part-time/Contract)" variant="outlined" />
           </Grid>
           <Grid item xs={4}>
           <TextField fullWidth size="small" error={!error.workLocation?false:true} helperText={error.workLocation} onFocus={()=>handleError('workLocation',null)}    value={workLocation} onChange={(event)=>setWorkLocation(event.target.value)}   label="Work Location" variant="outlined" />
           </Grid> 
           <Grid item xs={8}>
           <TextField InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.workSchedule?false:true} helperText={error.workSchedule} onFocus={()=>handleError('workSchedule',null)}    value={workSchedule}  onChange={(event)=>setWorkSchedule(event.target.value)}  label="Work Schedule (e.g., Monday to Friday, 9:00 AM to 5:00 PM)" variant="outlined" />
           </Grid>
           <Grid item xs={8}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.managerName?false:true} helperText={error.managerName} onFocus={()=>handleError('managerName',null)}   value={managerName}  onChange={(event)=>setManagerName(event.target.value)}  label="Manager's Name" variant="outlined" />
           </Grid>
         




           <Grid item xs={4}>
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        
        <KeyboardDatePicker
        
          label="Date of Joining"
          inputVariant="outlined"
          InputLabelProps={{style: {fontSize: 13}}} 
          format="dd/MM/yyyy"
          value={dateOfJoining}
          onChange={handleDateOfJoining}
         
          KeyboardButtonProps={{
            'aria-label': 'change date',
            
          }}
          size="small"
             />
      
      </Grid>
    </MuiPickersUtilsProvider>
    </Grid>
        


  </Grid>


    </div>)
}
 







const HealthAndMedicalInformation=()=>{
    return(<div>
       
       <h3 style={{fontSize:17,color:"#273272",fontWeight:'bolder',marginTop:30}}>Health and Medical Information</h3>
       
  <Grid container spacing={2}>
           <Grid item xs={6}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.methodOfCommunication?false:true} helperText={error.methodOfCommunication} onFocus={()=>handleError('methodOfCommunication',null)}   value={methodOfCommunication}  onChange={(event)=>setMethodOfCommunication(event.target.value)}  label="What is your preferred method of communication?  " variant="outlined" />
           </Grid>
         
        


    <Grid item xs={6}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth size="small" error={!error.willingToTravelForWork?false:true} helperText={error.willingToTravelForWork} onFocus={()=>handleError('willingToTravelForWork',null)}    value={willingToTravelForWork}  onChange={(event)=>setWillingToTravelForWork(event.target.value)}   label="Are you willing to travel for work?  " variant="outlined" />
     
           </Grid>


           <Grid item xs={6}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth size="small" error={!error.goodFitForThisPosition?false:true} helperText={error.goodFitForThisPosition} onFocus={()=>handleError('goodFitForThisPosition',null)}    value={goodFitForThisPosition} onChange={(event)=>setGoodFitForThisPosition(event.target.value)}  label="What do you think makes you a good fit for this position? " variant="outlined" />
           </Grid>
            <Grid item xs={6}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.priorExperienceInThisField?false:true} helperText={error.priorExperienceInThisField} onFocus={()=>handleError('priorExperienceInThisField',null)}   value={priorExperienceInThisField}  onChange={(event)=>setPriorExperienceInThisField(event.target.value)}  label="Do you have any prior experience in this field? " variant="outlined" />
           </Grid>
            <Grid item xs={6}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"  error={!error.greatestStrengths?false:true} helperText={error.greatestStrengths} onFocus={()=>handleError('greatestStrengths',null)}  value={greatestStrengths} onChange={(event)=>setGreatestStrengths(event.target.value)}   label="What do you consider to be your greatest strengths? " variant="outlined" />
           </Grid> <Grid item xs={6}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth size="small" error={!error.greatestWeaknesses?false:true} helperText={error.greatestWeaknesses} onFocus={()=>handleError('greatestWeaknesses',null)}    value={greatestWeaknesses}  onChange={(event)=>setGreatestWeaknesses(event.target.value)}  label="What do you consider to be your greatest weaknesses? " variant="outlined" />
           </Grid>
         
           <Grid item xs={12}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"  error={!error.memberOfAnyProfessionalOrganizationsOrAssociations?false:true} helperText={error.memberOfAnyProfessionalOrganizationsOrAssociations} onFocus={()=>handleError('memberOfAnyProfessionalOrganizationsOrAssociations',null)}   value={memberOfAnyProfessionalOrganizationsOrAssociations}  onChange={(event)=>setMemberOfAnyProfessionalOrganizationsOrAssociations(event.target.value)}  label="Are you a member of any professional organizations or associations? " variant="outlined" />
           </Grid>
         
           <Grid item xs={7}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.professionalCertificationsOrLicenses?false:true} helperText={error.professionalCertificationsOrLicenses} onFocus={()=>handleError('professionalCertificationsOrLicenses',null)}   value={professionalCertificationsOrLicenses}  onChange={(event)=>setProfessionalCertificationsOrLicenses(event.target.value)}  label="Do you have any professional certifications or licenses? " variant="outlined" />
           </Grid>
         
           <Grid item xs={5}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth  size="small" error={!error.careerGoals?false:true} helperText={error.careerGoals} onFocus={()=>handleError('careerGoals',null)}  value={careerGoals}  onChange={(event)=>setCareerGoals(event.target.value)}  label="What are your career goals? " variant="outlined" />
           </Grid>
         
           <Grid item xs={12}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"  error={!error.pendingCriminalCharges?false:true} helperText={error.pendingCriminalCharges} onFocus={()=>handleError('pendingCriminalCharges',null)}  value={pendingCriminalCharges}  onChange={(event)=>setPendingCriminalCharges(event.target.value)}  label="Do you have any criminal convictions or pending criminal charges? If yes, please provide details: " variant="outlined" />
           </Grid>
         
           <Grid item xs={12}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth size="small" error={!error.anyMedicalConditionsOrAllergiesWeShouldBeAwareOf?false:true} helperText={error.anyMedicalConditionsOrAllergiesWeShouldBeAwareOf} onFocus={()=>handleError('anyMedicalConditionsOrAllergiesWeShouldBeAwareOf',null)}   value={anyMedicalConditionsOrAllergiesWeShouldBeAwareOf}  onChange={(event)=>setAnyMedicalConditionsOrAllergiesWeShouldBeAwareOf(event.target.value)}  label="Do you have any medical conditions or allergies we should be aware of? If yes, please provide details: " variant="outlined" />
           </Grid>
         
           <Grid item xs={12}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small"  error={!error.willingToWorkOvertimeIfNeeded?false:true} helperText={error.willingToWorkOvertimeIfNeeded} onFocus={()=>handleError('willingToWorkOvertimeIfNeeded',null)}  value={willingToWorkOvertimeIfNeeded}  onChange={(event)=>setWillingToWorkOvertimeIfNeeded(event.target.value)}  label="Are you willing to work overtime if needed? " variant="outlined" />
           </Grid>
         


  </Grid>


    </div>)
}
 





const PoliciesAnddAgreements=()=>{
    return(<div>



<h3 style={{fontSize:17,color:"#273272",fontWeight:'bolder',marginTop:30}}>Policies and Agreements</h3>
    
    <Grid container spacing={2}>
    
    <Grid style={{marginLeft:10,padding:8,fontSize:14}}>
    Please review the following policies and agreements. By signing this form, you acknowledge that you have read and understood them.       </Grid>
    
           <Grid item xs={6}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth size="small" error={!error.employeeHandbook?false:true} helperText={error.employeeHandbook} onFocus={()=>handleError('employeeHandbook',null)}   value={employeeHandbook}  onChange={(event)=>setEmployeeHandbook(event.target.value)}  label="Employee Handbook " variant="outlined" />
           </Grid>
         


    <Grid item xs={6}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.confidentialityAndNonDisclosureAgreement?false:true} helperText={error.confidentialityAndNonDisclosureAgreement} onFocus={()=>handleError('confidentialityAndNonDisclosureAgreement',null)}   value={confidentialityAndNonDisclosureAgreement}  onChange={(event)=>setConfidentialityAndNonDisclosureAgreement(event.target.value)}   label="Confidentiality and Non-Disclosure Agreement " variant="outlined" />
           </Grid>

           <Grid item xs={6}>
           <TextField   InputLabelProps={{style: {fontSize: 13}}} fullWidth size="small" error={!error.acceptableUsePolicy?false:true} helperText={error.acceptableUsePolicy} onFocus={()=>handleError('acceptableUsePolicy',null)}    value={acceptableUsePolicy} onChange={(event)=>setAcceptableUsePolicy(event.target.value)}  label="Acceptable Use Policy " variant="outlined" />
           </Grid>
            <Grid item xs={6}>
           <TextField  InputLabelProps={{style: {fontSize: 13}}}  fullWidth size="small"  error={!error.dataProtectionAndPrivacyPolicy?false:true} helperText={error.dataProtectionAndPrivacyPolicy} onFocus={()=>handleError('dataProtectionAndPrivacyPolicy',null)}  value={dataProtectionAndPrivacyPolicy}  onChange={(event)=>setDataProtectionAndPrivacyPolicy(event.target.value)}  label="Data Protection and Privacy Policy " variant="outlined" />
           </Grid>
         
  </Grid>


    </div>)
}







const handleDate = (date) => {
  setDate(date);
};
const Declaration=()=>{ 
    return(<div>
       
       <h3 style={{fontSize:17,color:"#273272",fontWeight:'bolder',marginTop:30}}>Declaration </h3>
    
<Grid container spacing={2}>

<Grid style={{marginLeft:10,padding:8,fontSize:14}}>
I hereby declare that all the information provided in this form is true and accurate to the best of my knowledge. I understand that any false information or omission may result in the termination of my employment. 
    </Grid>

  

    <Grid container spacing={2} style={{display:"flex",justifyContent:"space-between"}}>

    <Grid item xs={4} style={{display:'flex',padding:40,justifyContent:"center",alignItems:"center",marginLeft:17}} >
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Grid  justifyContent="space-around">
    
    <KeyboardDatePicker
     
      label="Date"
     inputVariant='outlined'
      format="dd/MM/yyyy"
      value={date}
      onChange={handleDate}
    
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      error={!error.date?false:true} helperText={error.date} onFocus={()=>handleError('date',null)}
      size="small"
    />
   
  </Grid>
</MuiPickersUtilsProvider>
    </Grid>

    <Grid style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
     <Grid  style={{display:'flex',padding:40,justifyContent:"center",alignItems:"center",marginRight:10}} >
     <Button size="small" variant="contained" component="label">
    Signature
    <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setSignature({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
  </Button> 
  </Grid>
  

  <Avatar 
          style={{display:'flex',marginRight:30}}
          alt="Remy Sharp"
          variant="rounded"
          src={signature.fileName}
          sx={{ width: 75, height: 75 }}
          error={!error.signature?false:true} helperText={error.signature} onFocus={()=>handleError('signature',null)}
          size="small" />

</Grid>



    </Grid>
  


<Grid item xs={12} style={{marginLeft:10,padding:8,fontSize:14}}>
Please note: This onboarding form is confidential and should be submitted to the HR department of SFR Medical, UK. 
        </Grid>
       

<Grid item xs={6}>
     <Button size="small" fullWidth onClick={HandleSubmit} variant="contained">Submit</Button>
      </Grid>
      <Grid item xs={6}>
     <Button size="small" fullWidth onClick={HandleReset}  variant="contained">Reset</Button>
      </Grid>
  
        </Grid>
      
       

    </div>)
}





  const AllModules=()=>{

    return(<div className={classes.mainContainer}>
      <div className={classes.box} >
      
      {Heading()}
{EmployeeButton()}
{EmploymentInformation()}
{HealthAndMedicalInformation()}
{PoliciesAnddAgreements()}
{Declaration()}
       </div>
        
    </div>)
  }
  



  return( <div style={{width:'100%',display:'flex',flexDirection:'column',backgroundImage:"url(/background.png)" }}>

  <AdminAppBar/>
    {AllModules()}
    </div>)
  
}