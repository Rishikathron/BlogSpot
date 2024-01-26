import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import './header.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Header = () =>{
    
    let userLoggedIn = null
    const navigate = useNavigate();
    const [userName , setUserName] = useState('')
    const [isMenuVisible , setisMenuVisible] = useState(false)

    if(isMenuVisible == true){
       setTimeout(() => {
        setisMenuVisible(false)
       }, 5000);
    }

    
    useEffect(()=>{
        userLoggedIn = sessionStorage.getItem("UserName");
        if(userLoggedIn?.length > 0){
            setUserName(userLoggedIn)
        }        
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

    

    const dropdownMenu = () =>{
        setisMenuVisible(prevElement => {return !prevElement})  
    }

    
   
    

    return (
        <>
            <div className="header-block">
                <div className="title-block">
                    <h1 className="title">BlogSpot</h1>
                </div>
                <div >
                    <nav className="nav-elements-block" >
                        <ul className="nav-elements">                            
                            <Link style={{ textDecoration: 'none'}} to='/' ><button>Home</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/CreatePost'><button>Post</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/About'><button>About</button></Link> 
                            <Link style={(userName == '') ? {display : "",textDecoration: 'none'} : {display : "None",textDecoration: 'none'}} to='/Login'><button >Login</button></Link> 
                            <div 
                                className="AvatarBlock" 
                                style={(userName == '') ? {display : 'none',textDecoration: 'none'} : {display : "",textDecoration: 'none'}}
                                onClick={()=>dropdownMenu()}
                                >
                                <Avatar className="Avatar0" src="/broken-image.jpg"/> 
                            </div>
                        </ul>  
                        {isMenuVisible && <div className="dropdown-box dropdown-box-display">
                           
                           <div> <p className="dropdown-item-text">Hello {userName}</p></div>
                           <div><Link onClick={confirmLogout}><p className="dropdown-item-text">Log Out</p></Link>  </div>                                           
                        </div>  }
                                            
                    </nav>
                </div>
            </div>
        </>
    )

}


export default Header;