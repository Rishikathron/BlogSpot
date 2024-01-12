import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import './header.css'

const Header = () =>{

    return (
        <>
            <div className="header-block">
                <div className="title-block">
                    <h1 className="title">BlogSpot</h1>
                </div>
                <div >
                    <nav className="nav-elements-block">
                        <ul className="nav-elements">                            
                            <Link style={{ textDecoration: 'none' }} to='/'><button>Home</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/CreatePost'><button>Post</button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/About'><button>About</button></Link> 
                            <Link style={{ textDecoration: 'none' }} to='/Login'><Avatar src="/broken-image.jpg" /></Link>
                                             
                        </ul>                       
                    </nav>
                </div>
            </div>
            
            
        </>
    )

}


export default Header;