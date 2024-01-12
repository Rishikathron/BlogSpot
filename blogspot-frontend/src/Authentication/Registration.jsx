import { useNavigate } from "react-router-dom"

const Registration = () =>{

    const navigate = useNavigate();

    return (
        <>
            <div class="container" >                
                <div class="sign-in-container">
                    <div >
                        <h1>Sign Up</h1><br/>  
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />                      
                        <input type="number" placeholder="Contact" />
                        <input type="password" placeholder="Password" />
                        <input type="text" placeholder="Conifirm Password" />
                        
                        <div className='authbtns'>
                            <button className='button' onClick={() => navigate("/Login")}>Register</button>
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Registration