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



export default function JoinerForm(){



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
/********************************************************************************************** */
    



  /*************BANK DETAILS************************************************* */
  const [bankName,setBankName]=useState('')
  const [accountHolderName,setAccountHolderName]=useState('')
  const [accountNumber,setAccountNumber]=useState('')
  const [sortCode_IFSCCode,setSortCode_IFSCCode]=useState('')
 /********************************************************************************************** */





 /****************************EMERGENCY CONTACT****************************************************************** */
 const [emergencyContactFullName,setEmergencyContactFullName]=useState('')
 const [relationship,setRelatioship]=useState('')
 const [emergencyContactsPhoneNumber,setEmergencyContactsPhoneNumber]=useState('')
/********************************************************************************************** */


 /****************************EMPLOYMENT HISTOIRY****************************************************************** */
 const [companyName,setCompanyName]=useState('')
 const [positionHeld,setPositionHeld]=useState('')
 const [employementDates,setEmployementDates]=useState('')
 const [reasonForLeaving,setReasonForLeaving]=useState('')
 const [secondCompanyName,setSecondCompanyName]=useState('')
 const [secondPositionHeld,setSecondPositionHeld]=useState('')
 const [secondEmployementDates,setSecondEmployementDates]=useState('')
 const [secondReasonForLeaving,setSecondReasonForLeaving]=useState('')
 const [paySlip,setPaySlip]=useState({
    fileName: "/1332065.png",
    bytes: "",
  })
/********************************************************************************************** */

const [degreeDiplomaPicture,setDegreeDiplomaPicture]=useState({
  fileName: "/degreeDiploma.png",
  bytes: "",
})
const [nameOfDegreeDiploma,setNameOfDegreeDiploma]=useState('')
const [photo,setPhoto]=useState({
  fileName: "/photo.png",
  bytes: "",
})
const [btnStatus,setBtnStatus]=useState(false)
const [error,setError]=useState({})
 /****************************Reference DETAILS****************************************************************** */
 
 const [referenceName,setReferenceName]=useState('')
 const [referenceCompany,setReferenceCompany]=useState('')
 const [referencePosition,setReferencePosition]=useState('')
 const [referenceContactNumber,setReferenceContactNumber]=useState('')
 const [referenceEmail,setReferenceEmail]=useState('')

 const [secondReferenceName,setSecondReferenceName]=useState('')
 const [secondReferenceCompany,setSecondReferenceCompany]=useState('')
 const [secondReferencePosition,setSecondReferencePosition]=useState('')
 const [secondReferenceContactNumber,setSecondReferenceContactNumber]=useState('')
 const [secondReferenceEmail,setSecondReferenceEmail]=useState('')
/********************************************************************************************** */


/****************************Tax Information: ****************************************************************** */
 
const [nationalInsuranceNumber,setNationalInsuranceNumber]=useState('')
const [taxCode,setTaxCode]=useState('')
/********************************************************************************************** */


/****************************Acknowledgement:  Information: ****************************************************************** */
 
const [signature,setSignature]=useState({
    fileName: "/signature.png",
    bytes: "",
  })
  const [date,setDate]=useState(null)

/********************************************************************************************** */


/*********************************Getter&Setter Finish************************************************************* */









const handleError=(inputs,value)=>{
  setError(prev=>({...prev,[inputs]:value}))
  }
  
  const validation=()=>{
    var isValid=true

    if(!fullName || !(/^[a-zA-Z][a-zA-Z ]{2,}$/.test(fullName)))
    {
      handleError("fullName","Invalid Full Name ")
      isValid=false
    }




    if(!dob)
    {
      handleError("dob","Please Select Date of Birth ")
      isValid=false 
    }




    if(!gender)
    {
      handleError("gender","Please Select Gender ")
      isValid=false
    }


    if(!nationality)
    {
      handleError("nationality","Invalid Nationality ")
      isValid=false
    }





    if(!fullPermanentAddress)
    {
      handleError("fullPermanentAddress","Invalid Full Permanent Address ")
      isValid=false
    }


    if(!currentAddress)
    {
      handleError("currentAddress","Invalid Current Address ")
      isValid=false
    }


    if(!city)
    {
      handleError("city","Invalid City ")
      isValid=false
    }




    if(!postcode_Pincode || !(/^[0-9]{6}$/.test(postcode_Pincode)))
    {
      handleError("postcode_Pincode","Invalid Postcode/Pincode")
      isValid=false
    }


    if(!emailAddress || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)))
    {
      handleError("emailAddress","Invalid Email Address ")
      isValid=false 
    }


    if(!contactNumber|| !(/^[0-9]{10}$/.test(contactNumber)))
    {
      handleError("contactNumber","Invalid Contact Number ")
      isValid=false
    }

   
    if(!countryCode)
        {
          handleError("countryCode","Invalid Country Code ")
          isValid=false 
        }





      if(!bankName|| !(/^[a-zA-Z][a-zA-Z ]{2,}$/.test(bankName)))
      {
      handleError("bankName","Invalid Bank Name")
       isValid=false 
      }



        if(!accountNumber || !(/^([0-9]{11})|([0-9]{2}-[0-9]{3}-[0-9]{6})$/.test(accountNumber)))
        {
          handleError("accountNumber","Invalid Account Number  ")
          isValid=false
         }




        if(!sortCode_IFSCCode)
        {
          handleError("sortCode_IFSCCode","Invalid Sort Code/IFSC Code ")
          isValid=false
         }
      
          
    




    if(!emergencyContactFullName)
    {
      handleError("emergencyContactFullName","Invalid Emergency Contact Full Name ")
      isValid=false
     }


     if(!emergencyContactsPhoneNumber|| !(/^[0-9]{10}$/.test(emergencyContactsPhoneNumber)))
     {
       handleError("emergencyContactsPhoneNumber","Invalid Emergency Contact Number ")
       isValid=false
      }



    if(!relationship)
    {
      handleError("relationship","Invalid Relationship  ")
      isValid=false 
    }



    if(!companyName)
    {
      handleError("companyName","Invalid Company Name ")
      isValid=false
    }
    
      if(!positionHeld)
      {
        handleError("positionHeld","Invalid Position Held ")
        isValid=false
       }
   
        


          if(!employementDates)
          {
            handleError("employementDates","Invalid Employement Dates ")
            isValid=false
           }
         



           if(!reasonForLeaving)
          {
            handleError("reasonForLeaving","Invalid Reason For Leaving ")
            isValid=false
           }
         

           if(!secondCompanyName)
          {
            handleError("secondCompanyName","Invalid  Company Name ")
            isValid=false
           }
         

           if(!secondPositionHeld)
          {
            handleError("secondPositionHeld","Invalid Position Held ")
            isValid=false
           }
         

           if(!secondEmployementDates)
          {
            handleError("secondEmployementDates","Invalid Employement Dates ")
            isValid=false
           }
         

           if(!secondReasonForLeaving)
          {
            handleError("secondReasonForLeaving","Invalid Reason For Leaving ")
            isValid=false
           }
         

           if(!paySlip)
          {
            handleError("paySlip","Invalid Pay Slip ")
            isValid=false
           }
         

           if(!degreeDiplomaPicture)
          {
            handleError("degreeDiplomaPicture","Invalid Degree/Diploma  ")
            isValid=false
           }
         

           if(!nameOfDegreeDiploma)
          {
            handleError("nameOfDegreeDiploma","Invalid Name Of Degree Diploma ")
            isValid=false
           }
         

           if(!referenceName)
          {
            handleError("referenceName","Invalid Reference Name ")
            isValid=false
           }
         

           if(!referenceCompany)
          {
            handleError("referenceCompany","Invalid Reference Company ")
            isValid=false
           }
         

           if(!referencePosition)
          {
            handleError("referencePosition","Invalid Reference Position")
            isValid=false
           }
         

           if(!referenceContactNumber|| !(/^[0-9]{10}$/.test(referenceContactNumber)))
          {
            handleError("referenceContactNumber","Invalid Reference Contact Number ")
            isValid=false
           }
         

           if(!referenceEmail|| !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(referenceEmail)))
          {
            handleError("referenceEmail","Invalid Reference Email ")
            isValid=false
           }









           if(!secondReferenceName)
           {
             handleError("secondReferenceName","Invalid Reference Name ")
             isValid=false
            }
          
 
            if(!secondReferenceCompany)
           {
             handleError("secondReferenceCompany","Invalid Reference Company ")
             isValid=false
            }
          
 
            if(!secondReferencePosition)
           {
             handleError("secondReferencePosition","Invalid Reference Position")
             isValid=false
            }
          
 
            if(!secondReferenceContactNumber|| !(/^[0-9]{10}$/.test(secondReferenceContactNumber)))
           {
             handleError("secondReferenceContactNumber","Invalid Reference Contact Number ")
             isValid=false
            }
          
 
            if(!secondReferenceEmail|| !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(secondReferenceEmail)))
           {
             handleError("secondReferenceEmail","Invalid Reference Email ")
             isValid=false
            }
          




         

           if(!nationalInsuranceNumber)
          {
            handleError("nationalInsuranceNumber","Invalid National Insurance Number ")
            isValid=false
           }
         

           if(!taxCode)
          {
            handleError("taxCode","Invalid Tax Code ")
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
            if(!photo)
            {
              handleError("photo","Invalid photo ")
              isValid=false
             }


      return isValid
  }
  















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

  formData.append('referenceContactNumber',referenceContactNumber)

  formData.append('contactNumber',contactNumber)

  formData.append('bankName',bankName)

  formData.append('accountNumber',accountNumber)

  formData.append('sortCode_IFSCCode',sortCode_IFSCCode)

  formData.append('emergencyContactFullName',emergencyContactFullName)

  formData.append('relationship',relationship)

  formData.append('emergencyContactsPhoneNumber',emergencyContactsPhoneNumber)
  formData.append('companyName',companyName)

  formData.append('positionHeld',positionHeld)

  formData.append('employementDates',employementDates)

  formData.append('reasonForLeaving',reasonForLeaving)

  formData.append('secondCompanyName',secondCompanyName)

  formData.append('secondPositionHeld',secondPositionHeld)

  formData.append('secondEmployementDates',secondEmployementDates)

  formData.append('secondReasonForLeaving',secondReasonForLeaving)

  formData.append('paySlip',paySlip.bytes)

  formData.append('degreeDiplomaPicture',degreeDiplomaPicture.bytes)

  formData.append('nameOfDegreeDiploma',nameOfDegreeDiploma)

  formData.append('photo',photo.bytes)

   formData.append('referenceName',referenceName)

  formData.append('referenceCompany',referenceCompany)
  formData.append('referencePosition',referencePosition)

  formData.append('referenceEmail',referenceEmail)

  formData.append('secondReferenceName',secondReferenceName)

  formData.append('secondReferenceCompany',secondReferenceCompany)

  formData.append('secondReferencePosition',secondReferencePosition)

  formData.append('secondReferenceContactNumber',secondReferenceContactNumber)

  formData.append('secondReferenceEmail',secondReferenceEmail)

  formData.append('nationalInsuranceNumber',nationalInsuranceNumber)

  formData.append('taxCode',taxCode)

  formData.append('signature',signature.bytes)
  formData.append('date',date)



  var result=await postData("joinerform/add_new_joiner",formData)

  if(result.status)
  {
    Swal.fire({
      icon: 'success',
      title: 'Joiner Form Submitted successfully',
     
    })
    
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Joiner Form  Not Submitted ',
     
      
    })
  }


  

var body={'email':emailAddress,'name':fullName}

const res= await postData("register/register",body,{
  header:{Accept:"application/json",
"content-Type":"application/json"}

})

HandleReset()
}

}





const HandleReset=()=>{


  setEmployeeCode('')
  setFullName('')
  setDob(null)
  setGender('')
  setNationality('')
 setFullPermanentAddress('')
setCurrentAddress('')
  setCity('')
setPostcdoe_Pincode('')
  setEmailAddress('')
  setContactNumber('')
  setCountryCode('')
setBankName('')
  setAccountHolderName('')
  setAccountNumber('')
 setSortCode_IFSCCode('')
 setEmergencyContactFullName('')
 setRelatioship('')
 setEmergencyContactsPhoneNumber('')
 setCompanyName('')
 setPositionHeld('')
 setEmployementDates('')
 setReasonForLeaving('')
setSecondCompanyName('')
setSecondPositionHeld('')
 setSecondEmployementDates('')
setSecondReasonForLeaving('')
 setPaySlip({
    fileName: "/1332065.png",
    bytes: "",
  })


  setDegreeDiplomaPicture({
    fileName: "/degreeDiploma.png",
    bytes: "",
  })
  setNameOfDegreeDiploma('')
  setPhoto({
    fileName: "/photo.png",
    bytes: "",
  })
 setBtnStatus(false)

  setReferenceName('')
 setReferenceCompany('')
  setReferencePosition('')
  setReferenceContactNumber('')
 setReferenceEmail('')
 
  setSecondReferenceName('')
  setSecondReferenceCompany('')
setSecondReferencePosition('')
  setSecondReferenceContactNumber('')
  setSecondReferenceEmail('')

  setNationalInsuranceNumber('')
  setTaxCode('')

setSignature({
    fileName: "/signature.png",
    bytes: "",
  })
setDate(null)


}








/****************************Personal Details Module: ****************************************************************** */
const handleDob = (date) => {
    setDob(date);
  };
  const handleGender=(event)=>{
    setGender(event.target.value) 
    }

  const handleCountryCode=(event)=>{
    setCountryCode(event.target.value)
  }
  


  
    const PersonalDetails=()=>{ 
        return(<div >
            <div style={{display:"flex",flexDirection:'row',marginLeft:250,padding:8,}}  >

<img src='/logo.png' width='87'/>


<div  style={{marginLeft:20,padding:8, fontWeight:'bold',fontSize:25,}}>
Joiner Form

</div></div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h3 style={{marginTop:25,fontSize:16,}}>Personal Details</h3>
             </div>
           <Grid container spacing={3}>
           <Grid item xs={5}>
         <TextField fullWidth error={!error.fullName?false:true} helperText={error.fullName} onFocus={()=>handleError('fullName',null)}   value={fullName} onChange={(event)=>setFullName(event.target.value)} label="Full Name of the Employee" variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country Code</InputLabel>
        <Select
          labelId="Code"
          id="Code"
          value={countryCode}
          label="Code"
          onChange={handleCountryCode}
          error={!error.countryCode?false:true} helperText={error.countryCode} onFocus={()=>handleError('countryCode',null)}
        >
          <MenuItem value={"+91"}>India +91</MenuItem>
          <MenuItem value={"+1"}>USA +1</MenuItem>
          <MenuItem value={"+7"}>Russia +7</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4}>
         <TextField fullWidth  error={!error.contactNumber?false:true} helperText={error.contactNumber} onFocus={()=>handleError('contactNumber',null)}
        value={contactNumber} onChange={(event)=>setContactNumber(event.target.value)}  label="Personal Contact Number" variant="outlined" />

         </Grid>

         
         <Grid item xs={4}>
         <TextField fullWidth error={!error.fullPermanentAddress?false:true} helperText={error.fullPermanentAddress} onFocus={()=>handleError('fullPermanentAddress',null)}   value={fullPermanentAddress}  onChange={(event)=>setFullPermanentAddress(event.target.value)}  label="Full Permanent Address" variant="outlined" />

         </Grid>

         <Grid item xs={4}>
         <TextField fullWidth  error={!error.currentAddress?false:true} helperText={error.currentAddress} onFocus={()=>handleError('currentAddress',null)}  value={currentAddress}  onChange={(event)=>setCurrentAddress(event.target.value)}  label="Current Address" variant="outlined" />

         </Grid>

         <Grid item xs={4}>
         <TextField fullWidth error={!error.emailAddress?false:true} helperText={error.emailAddress} onFocus={()=>handleError('emailAddress',null)} value={emailAddress}  onChange={(event)=>setEmailAddress(event.target.value)}  label="Personal Email Address" variant="outlined" />

         </Grid>
         
        
        


         <Grid item xs={2}>
         <TextField fullWidth error={!error.nationality?false:true} helperText={error.nationality} onFocus={()=>handleError('nationality',null)}  value={nationality} onChange={(event)=>setNationality(event.target.value)} label="Nationality" variant="outlined" />

         </Grid>

         
         <Grid item xs={2}>
         <TextField fullWidth error={!error.city?false:true} helperText={error.city} onFocus={()=>handleError('city',null)}   value={city}  onChange={(event)=>setCity(event.target.value)}  label="City" variant="outlined" />

         </Grid>
         <Grid item xs={2}>
         <TextField fullWidth  error={!error.postcode_Pincode?false:true} helperText={error.postcode_Pincode} onFocus={()=>handleError('postcode_Pincode',null)}  value={postcode_Pincode} onChange={(event)=>setPostcdoe_Pincode(event.target.value)}  label="Postcode/Pincode" variant="outlined" />

         </Grid>
        


         <Grid item xs={3}>
         <div>Date of Birth</div>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        
        <KeyboardDatePicker
          margin="normal"
         
         variant='contained'
          format="dd/MM/yyyy"
          value={dob}
          onChange={handleDob}
          maxDate={'01/01/2004'}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          error={!error.dob?false:true} helperText={error.dob} onFocus={()=>handleError('dob',null)}
        />
       
      </Grid>
    </MuiPickersUtilsProvider>
    
    </Grid>



    <Grid item xs={3} style={{justifyContent:''}}>
         <FormControl  >
      <FormLabel  error={!error.gender?false:true} helperText={error.gender} onFocus={()=>handleError('gender',null)} >Gender</FormLabel >
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
       
      >
      
        <FormControlLabel  onChange={handleGender}   value="Male"  control={<Radio />} label="Male" />
        <FormControlLabel onChange={handleGender}  value="Female" control={<Radio />} label="Female" />
       
      </RadioGroup>
    </FormControl>
         </Grid>


         


           </Grid>
        </div>)
    }
/********************************************************************************************** */


    const BankDetails=()=>{ 
        return(<div>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <h3 style={{fontSize:16}}>Bank Details</h3>
          </div>
          <Grid container spacing={3}>
         
         <Grid item xs={4}>
         <TextField fullWidth error={!error.accountNumber?false:true} helperText={error.accountNumber} onFocus={()=>handleError('accountNumber',null)}  value={accountNumber}  onChange={(event)=>setAccountNumber(event.target.value)}  label="Account Number" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth error={!error.bankName?false:true} helperText={error.bankName} onFocus={()=>handleError('bankName',null)}  value={bankName}  onChange={(event)=>setBankName(event.target.value)}  label="Bank Name" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth error={!error.sortCode_IFSCCode?false:true} helperText={error.sortCode_IFSCCode} onFocus={()=>handleError('sortCode_IFSCCode',null)}  value={sortCode_IFSCCode}  onChange={(event)=>setSortCode_IFSCCode(event.target.value)}  label="Sort Code/IFSC code" variant="outlined" />

         </Grid>
        
            </Grid>
          
          
          

        </div>)
    }



    
    const EmergencyContact=()=>{ 
        return(<div>
             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             <h3 style={{fontSize:16,}}>Emergency Contact </h3>
               </div>
          <Grid container spacing={3}>
          <Grid item xs={4}>
         <TextField fullWidth error={!error.emergencyContactFullName?false:true} helperText={error.emergencyContactFullName} onFocus={()=>handleError('emergencyContactFullName',null)}  value={emergencyContactFullName}  onChange={(event)=>setEmergencyContactFullName(event.target.value)}  label="Full Name" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth error={!error.relationship?false:true} helperText={error.relationship} onFocus={()=>handleError('relationship',null)}  value={relationship}  onChange={(event)=>setRelatioship(event.target.value)}  label="Relationship" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth  error={!error.emergencyContactsPhoneNumber?false:true} helperText={error.emergencyContactsPhoneNumber} onFocus={()=>handleError('emergencyContactsPhoneNumber',null)} value={emergencyContactsPhoneNumber}  onChange={(event)=>setEmergencyContactsPhoneNumber(event.target.value)}  label="Phone Number " variant="outlined" />

         </Grid>
        
            </Grid>
          
          
          

        </div>)
    }






    const EmployementHistory=()=>{ 

      const HandleAddRows=()=>{

        setBtnStatus(true)
          }
        

        return(<div>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <h3 style={{fontSize:16}}>Employement History </h3>
          </div>
          <Grid container spacing={3}>
          <Grid item xs={3}>
         <TextField fullWidth error={!error.companyName?false:true} helperText={error.companyName} onFocus={()=>handleError('companyName',null)}  value={companyName}  onChange={(event)=>setCompanyName(event.target.value)}  label="Company Name" variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField fullWidth error={!error.positionHeld?false:true} helperText={error.positionHeld} onFocus={()=>handleError('positionHeld',null)}  value={positionHeld}  onChange={(event)=>setPositionHeld(event.target.value)}  label="Position Held" variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField fullWidth error={!error.employementDates?false:true} helperText={error.employementDates} onFocus={()=>handleError('employementDates',null)}  value={employementDates}  onChange={(event)=>setEmployementDates(event.target.value)}  label="Employment dates " variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField fullWidth error={!error.reasonForLeaving?false:true} helperText={error.reasonForLeaving} onFocus={()=>handleError('reasonForLeaving',null)}  value={reasonForLeaving}  onChange={(event)=>setReasonForLeaving(event.target.value)}  label="Reason for leaving " variant="outlined" />

         </Grid>
         <Grid item xs={12}>
          <Button onClick={HandleAddRows}  variant="contained">Add More</Button>
          {btnStatus?<div  style={{marginTop:20}} >
            <Grid container spacing={3}>
            <Grid item xs={3}>
         <TextField fullWidth error={!error.secondCompanyName?false:true} helperText={error.secondCompanyName} onFocus={()=>handleError('secondCompanyName',null)}  value={secondCompanyName}  onChange={(event)=>setSecondCompanyName(event.target.value)}  label="Company Name" variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField fullWidth error={!error.secondPositionHeld?false:true} helperText={error.secondPositionHeld} onFocus={()=>handleError('secondPositionHeld',null)}  value={secondPositionHeld}  onChange={(event)=>setSecondPositionHeld(event.target.value)}  label="Position Held" variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField fullWidth error={!error.secondEmployementDates?false:true} helperText={error.secondEmployementDates} onFocus={()=>handleError('secondEmployementDates',null)}  value={secondEmployementDates}  onChange={(event)=>setSecondEmployementDates(event.target.value)}  label="Employment dates " variant="outlined" />

         </Grid>
         <Grid item xs={3}>
         <TextField fullWidth error={!error.secondReasonForLeaving?false:true} helperText={error.secondReasonForLeaving} onFocus={()=>handleError('secondReasonForLeaving',null)}  value={secondReasonForLeaving}  onChange={(event)=>setSecondReasonForLeaving(event.target.value)}  label="Reason for leaving " variant="outlined" />

         </Grid>
         </Grid>
        </div>
        :<div></div>}
         </Grid>
        

         <Grid item xs={6} style={{display:'flex',flexDirection:"row"}}>
          <div style={{marginLeft:20,padding:8,fontSize:16}}>
         Please share your last six months of pay slips along with their Bank Statement. (Experienced candidates only) 
         </div>
            </Grid>
         <div  style={{display:'flex',padding:50,justifyContent:"center",alignItems:"center"}} >
         <Button variant="contained" component="label">
         Pay Slip
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setPaySlip({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button> 
      </div>
      

      <Avatar 
              style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={paySlip.fileName}
              sx={{ width: 100, height: 100 }}
              error={!error.paySlip?false:true} helperText={error.paySlip} onFocus={()=>handleError('paySlip',null)} 
            />
           
      </Grid>

          
          
     
          

        </div>)
    }



    const EducationalBackground=()=>{ 
      return(<div>
      
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      
        <h3 style={{fontSize:16,}}>Educational Background </h3>
        </div>
        <Grid container spacing={3}>
        <div style={{marginLeft:20,padding:8, marginTop:25,fontSize:16,}}>
        Please provide details of your highest educational qualifications:    
        </div>
        <Grid item xs={6} style={{display:'flex',flexDirection:"row"}}>
        <TextField fullWidth error={!error.nameOfDegreeDiploma?false:true} helperText={error.nameOfDegreeDiploma} onFocus={()=>handleError('nameOfDegreeDiploma',null)}  value={nameOfDegreeDiploma}  onChange={(event)=>setNameOfDegreeDiploma(event.target.value)}  label="Name of the Degree/Diploma" variant="outlined" />

      
         </Grid>
         <div  style={{display:'flex',padding:50,justifyContent:"center",alignItems:"center"}} >
       
         
         <Button variant="contained" component="label">
       Uplaod 
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setDegreeDiplomaPicture({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button> 
      </div>
      

      <Avatar 
              style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={degreeDiplomaPicture.fileName}
              sx={{ width: 100, height: 100 }}
              error={!error.degreeDiplomaPicture?false:true} helperText={error.degreeDiplomaPicture} onFocus={()=>handleError('degreeDiplomaPicture',null)}
            />
      
      
          </Grid>
        
        
        

      </div>)
  }







    const TaxInformation=()=>{ 
        return(<div>
        
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
          <h3 style={{fontSize:16,}}>Tax Information </h3>
          </div>
          <Grid container spacing={3}>
          <Grid item xs={6}>
         <TextField fullWidth error={!error.nationalInsuranceNumber?false:true} helperText={error.nationalInsuranceNumber} onFocus={()=>handleError('nationalInsuranceNumber',null)}  value={nationalInsuranceNumber}  onChange={(event)=>setNationalInsuranceNumber(event.target.value)}  label="National Insurance Number" variant="outlined" />

         </Grid>
         <Grid item xs={6}>
         <TextField fullWidth error={!error.taxCode?false:true} helperText={error.taxCode} onFocus={()=>handleError('taxCode',null)}  value={taxCode}  onChange={(event)=>setTaxCode(event.target.value)}  label="Tax Code" variant="outlined" />

         </Grid>
        
        
            </Grid>
          
          
          

        </div>)
    }



    const References=()=>{ 
        return(<div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3 style={{fontSize:16,}}>References </h3>
          </div>
          <div style={{marginLeft:20,marginBottom:10,padding:8,fontSize:16}}>
          Please provide the details of two references, one professional and one personal, that we can contact to learn more about your work experience and character (Part of our Hiring Process): 
          </div>
          <h3 style={{fontSize:16,}}>Reference 1</h3>
          <Grid container spacing={3}>
          <Grid item xs={5}>
         <TextField fullWidth error={!error.referenceName?false:true} helperText={error.referenceName} onFocus={()=>handleError('referenceName',null)}  value={referenceName}  onChange={(event)=>setReferenceName(event.target.value)}  label="Reference Name" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth error={!error.referenceCompany?false:true} helperText={error.referenceCompany} onFocus={()=>handleError('referenceCompany',null)}  value={referenceCompany}  onChange={(event)=>setReferenceCompany(event.target.value)}  label="Company" variant="outlined" />

         </Grid>
         <Grid item xs={2}>
         <TextField fullWidth error={!error.referencePosition?false:true} helperText={error.referencePosition} onFocus={()=>handleError('referencePosition',null)}  value={referencePosition}  onChange={(event)=>setReferencePosition(event.target.value)}  label="Position" variant="outlined" />

         </Grid>
         <Grid item xs={6}>
         <TextField fullWidth error={!error.referenceContactNumber?false:true} helperText={error.referenceContactNumber} onFocus={()=>handleError('referenceContactNumber',null)}  value={referenceContactNumber}  onChange={(event)=>setReferenceContactNumber(event.target.value)}  label="Contact Number" variant="outlined" />

         </Grid>
         <Grid item xs={6}>
         <TextField fullWidth error={!error.referenceEmail?false:true} helperText={error.referenceEmail} onFocus={()=>handleError('referenceEmail',null)}  value={referenceEmail}  onChange={(event)=>setReferenceEmail(event.target.value)}  label="Email" variant="outlined" />

         </Grid>
        
        
            </Grid>



            
            <h3 style={{fontSize:16,}}>Reference 2</h3>
          <Grid container spacing={3}>
          <Grid item xs={5}>
         <TextField fullWidth error={!error.secondReferenceName?false:true} helperText={error.secondReferenceName} onFocus={()=>handleError('secondReferenceName',null)}  value={secondReferenceName}  onChange={(event)=>setSecondReferenceName(event.target.value)}  label="Reference Name" variant="outlined" />

         </Grid>
         <Grid item xs={4}>
         <TextField fullWidth error={!error.secondReferenceCompany?false:true} helperText={error.secondReferenceCompany} onFocus={()=>handleError('secondReferenceCompany',null)}  value={secondReferenceCompany}  onChange={(event)=>setSecondReferenceCompany(event.target.value)}  label="Company" variant="outlined" />

         </Grid>
         <Grid item xs={2}>
         <TextField fullWidth error={!error.secondReferencePosition?false:true} helperText={error.secondReferencePosition} onFocus={()=>handleError('secondReferencePosition',null)}  value={secondReferencePosition}  onChange={(event)=>setSecondReferencePosition(event.target.value)}  label="Position" variant="outlined" />

         </Grid>
         <Grid item xs={6}>
         <TextField fullWidth error={!error.secondReferenceContactNumber?false:true} helperText={error.secondReferenceContactNumber} onFocus={()=>handleError('secondReferenceContactNumber',null)}  value={secondReferenceContactNumber}  onChange={(event)=>setSecondReferenceContactNumber(event.target.value)}  label="Contact Number" variant="outlined" />

         </Grid>
         <Grid item xs={6}>
         <TextField fullWidth error={!error.secondReferenceEmail?false:true} helperText={error.secondReferenceEmail} onFocus={()=>handleError('secondReferenceEmail',null)}  value={secondReferenceEmail}  onChange={(event)=>setSecondReferenceEmail(event.target.value)}  label="Email" variant="outlined" />

         </Grid>
        
        
            </Grid>

          
          

        </div>)
    }




    const handleDate = (date) => {
      setDate(date);
    };
    const Acknowledgement=()=>{ 
        return(<div>
           <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <h3 style={{fontSize:16,}}>Acknowledgement </h3>
          </div>
  <Grid container spacing={3}>
  <div style={{padding:20}}>
  <div style={{marginLeft:20,padding:8,fontSize:16}}>
        I acknowledge that the information provided in this form is accurate and complete to the best of my knowledge. I understand that any false statements or omissions may result in disciplinary action, up to and including termination of employment.  
        </div>
        </div>
         
        <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column"}}>


        <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"row"}}>

       

        <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
         <div  style={{display:'flex',padding:50,justifyContent:"center",alignItems:"center",}} >
         <Button variant="contained" component="label">
        Signature
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setSignature({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button> 
      </div>
      

      <Avatar 
              style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={signature.fileName}
              sx={{ width: 100, height: 100 }}
              error={!error.signature?false:true} helperText={error.signature} onFocus={()=>handleError('signature',null)}
            />

</div>

<div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
         <div  style={{display:'flex',padding:50,justifyContent:"center",alignItems:"center",}} >
         <Button variant="contained" component="label">
         Photograph
        <input hidden accept="image/*" multiple type="file"  onChange={(event)=>setPhoto({fileName:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})} />
      </Button> 
      </div>
      
      <div style={{fontSize:12,fontFamily:'Poppins', letterSpacing:1,}} > (Coloured Passport Size Photo)</div>
      <Avatar 
              style={{display:'flex',marginTop:30}}
              alt="Remy Sharp"
              variant="rounded"
              src={photo.fileName}
              sx={{ width: 100, height: 100 }}
              error={!error.photo?false:true} helperText={error.photo} onFocus={()=>handleError('photo',null)}
        
            />

</div>

</div>


<Grid item xs={8} style={{display:'flex',justifyContent:"left",alignItems:'left'}}>
         <div>Date </div>
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid  justifyContent="space-around">
        
        <KeyboardDatePicker
          margin="normal"
         
         
          format="dd/MM/yyyy"
          value={date}
          onChange={handleDate}
        
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          error={!error.date?false:true} helperText={error.date} onFocus={()=>handleError('date',null)}
        
        />
       
      </Grid>
    </MuiPickersUtilsProvider>
    
    </Grid>

    </div>

     <div style={{marginLeft:20,padding:20,fontSize:16}}>
         Please return this completed form to the Human Resources department by [deadline]. If you have any questions or need further assistance, please don't hesitate to contact us at [HR contact information]. 
         </div>
         <p style={{marginLeft:40}}>
We look forward to having you as a valuable member of the SFR Medical team! 
</p>
<div style={{marginLeft:20,padding:20,fontSize:16,}}>
<p>
Note: This joiner form is for internal use only and should be handled with confidentiality. 
</p>
SFR Medical, UK  
<p>
[Company Address] 
</p>
</div>

<Grid item xs={6}>
         <Button fullWidth onClick={HandleSubmit} variant="contained">Submit</Button>
          </Grid>
          <Grid item xs={6}>
         <Button fullWidth onClick={HandleReset}  variant="contained">Reset</Button>
          </Grid>
      
            </Grid>
          
          
          

        </div>)
    }



    return(<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",background:"#eee"}}>
      
       <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",padding:30,borderRadius:'25px',width:"60%",background:"white",boxShadow:"black"}}>
      
       {PersonalDetails()}
       {BankDetails()}
       {EmergencyContact()}
       {EmployementHistory()}
       {EducationalBackground()}
       {TaxInformation()}
       {References()}
       {Acknowledgement()}
       </div>
        
    </div>)
}









/**<div style={{display:"flex",flexDirection:"row",width:"100%"}}> 
  <div style={{display:"flex",padding:10,width:'25%'}}>
           
        {PersonalDetails()}
        </div>


        <div style={{display:"flex",padding:10,width:'25%',flexDirection:"column"}}>
        {BankDetails()}
        {EmergencyContact()}
        {TaxInformation()}
         </div>
         <div style={{display:"flex",padding:10,width:'25%',flexDirection:"column"}}>
       
         {EmployementHistory()}
        
         </div>
         <div style={{display:"flex",padding:10,width:'25%'}}>
         {References()}
      
       </div>
       <div style={{display:"flex",padding:10,width:'25%'}}>
         {Acknowledgement()}
      
       </div>

     </div>
     */