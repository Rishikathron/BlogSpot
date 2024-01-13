import './home.css';
import Searchbar from "../SearchBar/Searchbar.jsx";
import PostDetails from "./PostDetails.jsx";
import Author from './Author.jsx';
import RelatedPost from './RelatedPost.jsx';
import { useNavigate } from "react-router-dom"



const Home = () =>{

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
        <div>
            <div><Searchbar></Searchbar> </div>

            <div className='home-body'>
                <div className="post-outerblock">
                    <div  className="Post-block">
                        <div className='Post' onClick={postComponentClick}>
                            <PostDetails Title = {postTitle} Description = {trimmedDescription} ></PostDetails> 
                        </div>
                        <div className='Author' onClick={authorComponentClick}><Author></Author></div>                    
                        
                    </div>

                    <div  className="Post-block">
                        <div className='Post'>
                            <PostDetails Title = {postTitle} Description = {trimmedDescription}></PostDetails> 
                        </div>
                        <div className='Author'><Author></Author></div>                    
                        
                    </div>

                    <div  className="Post-block">
                        <div className='Post'>
                            <PostDetails Title = {postTitle} Description = {trimmedDescription}></PostDetails> 
                        </div>
                        <div className='Author'><Author></Author></div>  
                    </div>
                    <div className='Nextpost-btn'>
                        <button>Previous</button>
                        <button>NEXT</button>  
                    </div> 
                </div>
                <div className='relatedPost-block'>
                    <h3 className='RelatedPost-title'>Related Post</h3>
                    <div className="relatedPost" onClick={postComponentClick}>
                        <RelatedPost Title = {postTitle} Description = {postDescription}></RelatedPost>
                    </div>  
                    <div className="relatedPost">
                        <RelatedPost Title = {postTitle} Description = {postDescription}></RelatedPost>
                    </div>  
                    <div className="relatedPost">
                        <RelatedPost Title = {postTitle} Description = {postDescription}></RelatedPost>
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


export default Home;