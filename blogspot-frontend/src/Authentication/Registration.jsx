import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";

const Registration = () =>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setconfirmPassword] = useState('');
    const [contact,setContact] = useState('');
    const registerAPI = "http://localhost:3001/auth/Registration";

    const navigate = useNavigate();
    const authRegister = async () => {       
        const apiBody = {
            name: name,
            password: password,   
            ConfirmPassword: confirmPassword,
            email: email,
            contact: contact
        }
        try{
            const response = await axios.post(registerAPI,apiBody);
            if(response.data.message == "Success"){
                setTimeout(() => {
                    alert("User Registerd, Please login with the created Credentials")
                    navigate("/Login");
                }, 1000);                
            }   

        }
        catch(ex){
            console.log(ex)
        }
    }

    return (
        <>
            <div class="container" >                
                <div class="sign-in-container">
                    <div >
                        <h1>Sign Up</h1><br/>  
                        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>                      
                        <input type="number" placeholder="Contact" onChange={(e)=>setContact(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                        <input type="text" placeholder="Conifirm Password" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                        
                        <div className='authbtns'>
                            <button className='button' onClick={authRegister}>Register</button>                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Registration