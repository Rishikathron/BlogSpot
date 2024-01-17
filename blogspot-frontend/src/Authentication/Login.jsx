import { useState } from 'react';
import './Authentication.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Login = () =>{

    const loginAPI = 'http://localhost:3001/auth/Login';

    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const navigate = useNavigate();

    const authLogin = async () =>{
        const apibody = {name : email , password : password};
        console.log(email , password);
        try{
            const response = await axios.post(loginAPI,apibody);
            console.log("this is =>" + response.data.userData.UserName)            
            
            sessionStorage.setItem("UserEmail", response.data.userData.Email);
            sessionStorage.setItem("UserName", response.data.userData.UserName);
            sessionStorage.setItem("UserId", response.data.userData.UserId);
            
            alert(response.data.message);
            setTimeout(() => {                
                navigate("/") ;
                console.log("Logged in")
            }, 500);
        }
        catch(ex){
            console.log(ex);
        }        
        
    }


    return (
        <>            
            <div class="container" >                
                <div class="sign-in-container">
                    <div >
                        <h1>Sign in</h1><br/>                        
                        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                        
                        <div className='authbtns'>
                            <button className='button' onClick={authLogin}>Sign In</button>
                            <button className='button' onClick={() => navigate("/Registration")}>Sign Up</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Login;