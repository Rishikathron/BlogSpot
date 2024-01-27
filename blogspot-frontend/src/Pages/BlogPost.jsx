import { useLocation } from "react-router-dom"
import './blogpost.css'
import { useEffect, useState } from "react";
const BlogPost = () =>{
    
    const location = useLocation();
    const [isLiked , setIsLiked] = useState(false)

    return (
        <>
            {console.log("Inside blog post ", location)}
            <div className="blog-outerblock">

                <div className="Title-block">
                    <h1 className="title">{location.state.PostTitle}</h1>
                    <div className="hearts" onClick={()=>{setIsLiked(prev => {return !prev})}}>
                        {isLiked == false ? <span className="like-icon-black"></span> : <span className="like-icon-red"></span>}
                    </div>
                </div>

                <div className="Postcontent-block">
                    <br/>
                    <p style={{fontSize : "1.5rem"}} > {location.state.PostBody} </p>
                </div>

            </div>
        </>
    )

}

export default BlogPost;