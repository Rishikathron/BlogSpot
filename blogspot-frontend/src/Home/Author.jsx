import { useNavigate } from "react-router-dom"
const Author = (props) =>{

    const navigate = useNavigate();
    var postGenre = "Horror";
    const authorComponentClick = ()=>{
        navigate('/AuthorDetail');
    }

    return (
        <>
        <li style={{listStyle:"none"}} >
            <div className='Author' onClick={authorComponentClick}>
                <h3 style={{color:"black"}}>{props.AuthorName}</h3>
                <h4>Genre : {props.genre}</h4>   
                <div className="AuthorPost-Detail">
                    <h4>Likes <span>120</span> </h4>    
                    <h4>Follows <span>20</span> </h4> 
                </div>
            </div>
        </li>
        
                
        </>
    )
}

export default Author;