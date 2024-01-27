import { useNavigate } from "react-router-dom"

const PostsDetails = ({key,Title,Description,Body }) =>{

    const navigate = useNavigate();

    const postComponentClick = () =>{        
        navigate('/BlogPost',{state : {PostTitle : Title , PostDescription : Description , PostBody : Body }});
    }
    

    return (
        <>
            <li style={{listStyle:"none"}} >
                <div className='Post' onClick={postComponentClick}>                    
                    <h2>{Title}</h2>
                    <h3>{Description}</h3>
                </div>
            </li>
        </>
    )
}

export default PostsDetails;