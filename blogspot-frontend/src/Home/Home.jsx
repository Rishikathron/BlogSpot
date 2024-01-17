import './home.css';
import Searchbar from "../SearchBar/Searchbar.jsx";
import PostDetails from "./PostDetails.jsx";
import Author from './Author.jsx';
import RelatedPost from './RelatedPost.jsx';
import { useEffect,useState } from 'react';
import axios from 'axios';



const Home = () =>{

    
    const getAllPosts_API = "http://localhost:3001/posts/getAllPosts";
    const [response , SetResponse] = useState([]);   
   
    useEffect(()=>{
        const fetchPostApi = async() =>{
            await axios.get(getAllPosts_API)
            .then(response => {                
                SetResponse(response.data); 
              });            
        }
        fetchPostApi(); 
    },[])

    
    function trimDescription(postDescription){
        let desc = postDescription.split('').slice(0,200).join('') + '...';
        return desc
    }

    return (
    <>
        <div>
            <div><Searchbar></Searchbar> </div>           

            <div className='home-body'>
                <div className="post-outerblock">
                    
                    {response.map(e => {                        
                            return(
                                <div  className="Post-block" >
                                   <PostDetails key={e.PostId} Title = {e.PostTitle} Description = {trimDescription(e.PostDescription)} Body = {e.PostBody}> </PostDetails>
                                   <Author key={e._id} AuthorName = {e.PostAuthor} genre = {e.Genre}></Author>
                                </div> 
                            )
                        })}         

                    <div className='Nextpost-btn'>
                        <button>Previous</button>
                        <button>NEXT</button>  
                    </div> 

                </div>


                <div className='relatedPost-block'>
                    <h3 className='RelatedPost-title'>Related Post</h3>
                    {response.map((item) => {
                        {console.log("Outer the realted post" , item);}
                        return(
                            <>
                                <RelatedPost Title = {item.PostTitle} Description = {item.PostDescription}></RelatedPost>                            
                            </>                            
                        )
                    })}
                     
                    
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