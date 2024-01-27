import { useNavigate } from "react-router-dom"
import PostDetails from "../Home/PostDetails";
import './author.css'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import axios from 'axios';

const AuthorDetail = () =>{
    const navigate = useNavigate();
    const location = useLocation();

    const [UserData , setUserData] = useState({});
    const [Post , setPost] = useState([]);
    const [authorPosts,setauthorPosts] = useState([]);
    const [authorPageCount , setauthorPageCount] = useState(0);

    const AuthorId = location?.state?.AuthorId;
    const GetUserData_API = 'http://localhost:3001/auth/getUserDetails?id=' +  AuthorId;
    const GetPostDetails_API = 'http://localhost:3001/posts/getUserPosts?id=' +  AuthorId;

    useEffect(()=>{
        if(AuthorId != null){
            fetchUsers();
            fetchPostDetails()
        }
        
        
        
    },[]);
    const fetchUsers = async ()=>{
        try{                
            let res = await axios.get(GetUserData_API);
            console.log(res.data);
            setUserData(res.data);            
        }
        catch(ex){console.log(ex) }
    }
    const fetchPostDetails = async () =>{
        try{
            let res = await axios.get(GetPostDetails_API);
            console.log(res.data);
            setPost(res.data);
            let _authorpost = res.data.slice(authorPageCount,authorPageCount+3);
            setauthorPosts(_authorpost);
        }
        catch(ex){console.log(ex)}
    }


    function trimDescription(postDescription){
        let desc = postDescription.split('').slice(0,200).join('') + '...';
        return desc
    }

    return (
        <>{AuthorId != null ? 
            <div className="mainContainer">
                <div className="authorDetails-block"> 
                    <div className="authorDetails">                        
                        <div className="bio">
                            <h3>Author : <span>{UserData.UserName}</span></h3>                            
                            <h3>Email : <span>{UserData.Email}</span></h3>
                            <h3>Contact : <span>{UserData.ContactNumber}</span></h3>                            
                        </div>
                    </div>

                    <div className="authorfame-block">
                        <div className="total-block">
                            <h3>Total Blogs</h3>
                            <h4>{Post.length}</h4>
                        </div>
                        <div className="followers-block">
                            <h3>Total Followers</h3>
                            <h4>120</h4>
                        </div>
                    </div>
                </div>
                
                <div className="authorPost-block"> 
                    <div className="post-outerblock1">
                        { authorPosts.map((e)=>{
                            return(
                                <PostDetails  
                                key = {e.PostBody}
                                Title = {e.PostTitle} 
                                Description = {trimDescription(e.PostDescription)} 
                                Body = {e.PostBody}></PostDetails>
                            )
                        })}  
                        
                        
                           
                        {Post.length >3 && <div className='Nextpost-btn'>  
                            <button disabled = {Post >= 3 ? "" : "disabled"} onClick={()=>{setauthorPageCount(prev => {return prev-3})}} >Previous</button>
                            <button disabled = {Post+3 < Post.length ? "" : "disabled"} onClick={()=>{setauthorPageCount(prev => {return prev+3})}}>NEXT</button> 
                        </div>  }
                    </div>
                    
                </div>
            </div> : <div >
                <h1 className="anonymous">
                    Anonymus post Details not Available :)
                </h1>
                
                </div>
        }
        </>
    )

}

export default AuthorDetail;