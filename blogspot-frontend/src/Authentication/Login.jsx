import './Authentication.css'
import { useNavigate } from "react-router-dom"

const Login = () =>{
    
    const navigate = useNavigate();
    return (
        <>
            
            <div class="container" >                
                <div class="sign-in-container">
                    <div >
                        <h1>Sign in</h1><br/>                        
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        
                        <div className='authbtns'>
                            <button className='button'>Sign In</button>
                            <button className='button' onClick={() => navigate("/Registration")}>Sign Up</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>

        </>
    )
}

export default Login;