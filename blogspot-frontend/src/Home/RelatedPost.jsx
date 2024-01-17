import PostsDetails from "./PostDetails"
import {  useNavigate } from "react-router-dom"


const RelatedPost = (props) =>{
    const navigate = useNavigate();

    
   
    const relatedPostDescription = String(props.Description).split("").slice(0,50).join('')+'...';  
    
    const postComponentClick = () =>{        
        navigate('/BlogPost');
    }

    return (
        <> 
        {console.log("Inside related Post" , props)}
        
            <PostsDetails Title = {props.Title} Description = {relatedPostDescription} onClick={postComponentClick}></PostsDetails>
            {/* <div className="relatedPost" >
                <PostsDetails Title = {props.Title} Description = {relatedPostDescription}></PostsDetails>
            </div>             */}
       
                
            
        </>
    )
}


export default RelatedPost;