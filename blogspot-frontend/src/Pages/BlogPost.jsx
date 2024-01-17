import { useLocation } from "react-router-dom"

const BlogPost = () =>{
    
    const location = useLocation();

    return (
        <>
            {console.log("Inside blog post ", location)}
            <div className="blog-outerblock">
                <div className="Title-block">
                    <h1 className="title">{location.state.PostTitle}</h1>
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