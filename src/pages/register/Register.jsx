import React, { useState } from 'react';
import { registerUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';
 
const Register = () => {
  //Logic Section
 
  //Make a useState for 5 Fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
 
  //useState for error message
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
 
  //Make an each function for changing the value
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }
 
  const handleLastName = (e) => {
    setLastName(e.target.value);
  }
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
 
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
 
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }
 
  //validation
  var validate = () => {
    var isValid = true;
 
    //validate the firstname
    if (firstName.trim() == '') {
      setFirstNameError("First name is required!")
      isValid = false;
    }
 
    if (lastName.trim() == '') {
      setLastNameError("Last name is required!")
      isValid = false;
    }
 
    if (email.trim() == '') {
      setEmailError("Email is required!")
      isValid = false;
    }
 
    if (password.trim() == '') {
      setPasswordError("Password is required!")
      isValid = false;
    }
 
    if (confirmPassword.trim() == '') {
      setConfirmPasswordError("Confirm password is required!")
      isValid = false;
    }
 
    if(confirmPassword.trim() != password.trim()){
      setConfirmPasswordError("Password and confirm password does not match")
      isValid = false;
    }
 
    return isValid;
 
  }
 
  //Submit button Function
  const handleSubmit = (e) => {
    e.preventDefault()
 
    //validate
    var isValidated = validate();
    if(!isValidated){
      return
    }
 
    //sending request to the api

    //making json object
    const data = {
      "firstName" : firstName,
      "lastName" : lastName,
      "email" : email,
      "password" : password
    }

    registerUserApi(data).then((res) => {
      //receive data : success,message
      if(res.data.success == false){
        toast.error(res.data.message)
      }else{
        toast.success(res.data.message)
      }
    })
  }
 
  return (
    <>
      <div className='container'>
        <h1>Create an account!</h1>
 
        <form className='w-50'>
          <label>Firstname : {firstName}</label>
          <input onChange={handleFirstName} type='text' className='form-control' placeholder='Enter your first name'></input>
          {
            firstNameError && <p className='text-danger'>{firstNameError}</p>
          }
 
          <label className='mt-2'>Lastname : {lastName}</label>
          <input onChange={handleLastName} type='text' className='form-control' placeholder='Enter your last name'></input>
          {
            lastNameError && <p className='text-danger'>{lastNameError}</p>
          }
 
          <label className='mt-2'>Email : {email}</label>
          <input onChange={handleEmail} type='text' className='form-control' placeholder='Enter your email'></input>
          {
            emailError && <p className='text-danger'>{emailError}</p>
          }
 
          <label className='mt-2'>Password</label>
          <input onChange={handlePassword} type='text' className='form-control' placeholder='Enter your password'></input>
          {
            passwordError && <p className='text-danger'>{passwordError}</p>
          }
 
          <label className='mt-2'>Confirm Password</label>
          <input onChange={handleConfirmPassword} type='text' className='form-control' placeholder='Confirm your password'></input>
          {
            confirmPasswordError && <p className='text-danger'>{confirmPasswordError}</p>
          }
 
          <button onClick={handleSubmit} className='btn btn-dark mt-2 w-100'>Create an Account</button>
 
        </form>
      </div>
    </>
  )
}
 
export default Register;
 
//Step 1: Make a complete UI or register page (Fields, button, etc)
//Step 2 : Input (type) - Make a state
//Step 3 : Onchange - Set the value to the state

//make a login page
//make a path in App.js
//make a front end with email and password
//make a use State