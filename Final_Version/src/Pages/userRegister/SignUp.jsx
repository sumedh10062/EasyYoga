import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../Component/navbar/Navbar';
import usePostFetch from '../../hooks/usePostFetch';
import httpCommon from '../../http-common';
import "./SignUp.css";

const SignUp = () => {

    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [repassword,setRepassword]=useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [myDate , setMyDate]=useState(Date.now);

    const goLogin = () => {
        navigate("/login")
    }
    function submitHandler(event){
        event.preventDefault();
        
        
        
        //date validation
        //console.log("Date : ",DateValidation(myDate));

        //password validation
        //console.log("Password validation : ",passwordValidation(password,repassword));
        if(passwordValidation(password,repassword) && DateValidation(myDate)){
            const newCustomer = {
                name: name,
                email: email,
                dateOfBirth: myDate,
                phoneNumber : phoneNumber,
                password: password};
            console.log(newCustomer);
            try {
                const { data } = httpCommon.post("/customers", newCustomer);
                console.log("before Navigate", data);
                goLogin();
            }
            catch {
            
            }
            
            
            
        }else{
            console.log("Invalid Data entered");
        }

        
    }


    function nameHandler (event){
        setName(event.target.value);
        if(event.target.value.length<4){
            document.getElementById("nameMsg").innerHTML="Length must be greater than 4";
        }else{
            document.getElementById("nameMsg").innerHTML="<span style='color:green;'>Ok Length</span>";
        }
    }

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };
    
    function dobHandler(event){
        setMyDate(event.target.value);
        
    }

    function emailHander(event) {
        setEmail(event.target.value);
    }

    function passwordHandler(event){
        setPassword(event.target.value);
        const regEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(password.match(regEx)){
            document.getElementById("passMsg").innerHTML="<span style='color:green'>Strong</span>";
        }else{
            document.getElementById("passMsg").innerHTML="<span style='color:red'>Weak</span>";
        }
    }

    function repasswordHandler(event){
        setRepassword(event.target.value);
        
    }

    return (
        <>
        <Navbar/>
        <div className="container">
            
		<h2 className='header2'>Register as Customer</h2>
		<form className='signUpForm' onSubmit={submitHandler}>
			<label>Name:</label>
			<input type="text" id="name" name="name" placeholder="Enter your name" onChange={nameHandler} required/>
            <br></br>
            <span id="nameMsg"></span>
            <br></br>
			<label>Email:</label>
			<input type="email" id="email" name="email" placeholder="Enter your email" onChange={emailHander} required/>
                <br></br>
                <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
                </label>
                <br />
			<label>Date of Birth:</label>
			<input type="date" id="dob" name="dob" onChange={dobHandler} required/>
                <br></br>
                <span id="dobMsg"></span>

            <br/><br/>
			<label>Password:</label>
			<input type="password" id="password" name="password" placeholder="Enter your password" onChange={passwordHandler} required/>
                <br></br>
                <span id="passMsg"></span>
                <br></br>
			<label>Re-enter Password:</label>
			<input type="password" id="repassword" name="repassword" placeholder="Re-enter your password" onChange={repasswordHandler} required/>
                <br></br>
                <span id="repassMsg"></span>
            <br/><br/>
                    <input type="submit" value="Register" />
                    
		</form>
            </div>
            </>
    )

    function DateValidation(myDate){
        const d1=new Date(Date.now());
        const d2=new Date(myDate);
            
        if(d1.getFullYear()-d2.getFullYear()>18){
            document.getElementById("dobMsg").innerHTML="<spam style='color:green'>Valid Age</span>";
            return true;
        }else{
            document.getElementById("dobMsg").innerHTML="<spam style='color:red'>Invalid Age</span>";
        }
        return false;
    }
    
    function passwordValidation(password,repassword){
        const regEx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(password.match(regEx)){
            if(password.includes(repassword))
                return true;
            else
                document.getElementById("repassMsg").innerHTML="<spam style='color:red'>Password is not same</spam>";
                return false;
        }else{
            return false;
        }
    }
    
}
export default SignUp;