import { useNavigate } from "react-router-dom"
import PostDetails from "../Home/PostDetails";
import './author.css'

const AuthorDetail = () =>{
    const navigate = useNavigate();

    var postTitle = "Sample Title"
    var postDescription = "This is the sample description for the post component. This is the sample description for the post component. his is the sample description for the post  This is the sample description for the post component. his is the sample description for the post This is the sample description for the post component. his is the sample description for the post This is the sample description for the post component. his is the sample description for the post This is the sample description for the post component. his is the sample description for the post"

    var trimmedDescription = postDescription.split('').slice(0,200).join('') + '...'


    const postComponentClick = () =>{        
        navigate('/BlogPost');
    }
    const authorComponentClick = ()=>{
        navigate('/AuthorDetail');
    }

    return (
        <>
            <div className="mainContainer">
                <div className="authorDetails-block"> 
                    <div className="authorDetails">
                        
                        <div className="bio">
                            <h2>Author Name : <span>rishi</span></h2>
                            <h2>Author Age : <span>12</span></h2>
                            <h2>Author Email : <span>rishi@gmail.com</span></h2>
                            <h2>Author Contact : <span>123456789</span></h2>                            
                        </div>

                    </div>
                    <div className="authorfame-block">
                        <div className="total-block">
                            <h3>Total Blogs</h3>
                            <h4>20</h4>
                        </div>
                        <div className="followers-block">
                            <h3>Total Followers</h3>
                            <h4>120</h4>
                        </div>
                    </div>
                </div>
                <div className="authorPost-block"> 
                    <div className="post-outerblock1">
                        <div  className="Post-block1">
                            <div className='Post1' onClick={postComponentClick}>
                                <PostDetails Title = {postTitle} Description = {trimmedDescription} ></PostDetails> 
                            </div>                                           
                            
                        </div>

                        <div  className="Post-block1">
                            <div className='Post1'>
                                <PostDetails Title = {postTitle} Description = {trimmedDescription}></PostDetails> 
                            </div>
                                            
                            
                        </div>

                        <div  className="Post-block1">
                            <div className='Post1'>
                                <PostDetails Title = {postTitle} Description = {trimmedDescription}></PostDetails> 
                            </div>                        
                        </div>

                        <div className='Nextpost-btn'>
                            <button>Previous</button>
                            <button>NEXT</button>  
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )

}

export default AuthorDetail;