import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import './header.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Header = () =>{
    
    let userLoggedIn = null
    const navigate = useNavigate();
    const [userName , setUserName] = useState('')

    useEffect(()=>{
        userLoggedIn = sessionStorage.getItem("UserName");
        if(userLoggedIn?.length > 0){
            setUserName(userLoggedIn)
        }
        console.log("Session storage vlues -->" + userLoggedIn)
    },[sessionStorage.getItem("UserName")]);

    const confirmLogout = () =>{       
        
        if(window.confirm("Are you sure you want to log out?")){
            sessionStorage.clear();  
            setUserName("");
            setTimeout(()=>{                
                navigate('/Login');
            },500)                 
        }

    }
    

    return (
        <>
            <div className="header-block">
                <div className="title-block">
                    <h1 className="title">BlogSpot</h1>
                </div>
                <div >
                    <nav className="nav-elements-block">
                        <ul className="nav-elements">                            
                            <Link style={{ textDecoration: 'none'}} to='/' ><button>Home</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/CreatePost'><button>Post</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/About'><button>About</button></Link> 
                            <Link style={(userName == '') ? {display : "",textDecoration: 'none'} : {display : "None",textDecoration: 'none'}} to='/Login'><button >Login</button></Link> 
                            <Link onClick={confirmLogout} style={(userName == '') ? {display : 'none',textDecoration: 'none'} : {display : "",textDecoration: 'none'}} ><Avatar  src="/broken-image.jpg"/></Link>                                             
                        </ul>                       
                    </nav>
                </div>
            </div>
        </>
    )

}


export default Header;