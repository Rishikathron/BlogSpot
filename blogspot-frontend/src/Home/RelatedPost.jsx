import PostsDetails from "./PostDetails"


const RelatedPost = (props) =>{
   
    const relatedPostDescription = String(props.Description).split("").slice(0,50).join('')+'...';    

    return (
        <>
            
            <PostsDetails Title = {props.Title} Description = {relatedPostDescription}></PostsDetails>
        </>
    )
}


export default RelatedPost;