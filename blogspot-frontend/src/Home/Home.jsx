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
    const [mainPageCount , setmainPageCount] = useState(0); 
    const [relatedPageCount , setrelatedPageCount] = useState(0); 
    const [relatedPosts , setRelatedPosts] = useState([]);
    const [mainPosts,setmainPosts] = useState([]);
    const [LoaderStatus , setLoaderStatus] = useState(false);
    const [searchValue , setSearchValue] = useState("");
    const [searchStatus , setSeachStatus] = useState(false);
   
    useEffect(()=>{
        setLoaderStatus(true)
        const fetchPostApi = async() =>{
            await axios.get(getAllPosts_API)
            .then(APIresponse => {       
                console.log("API " ,APIresponse.data)      ;   
                SetResponse(APIresponse.data); 
                getAPIdata(APIresponse.data)
              });                 
        }        
        fetchPostApi();
        setLoaderStatus(false)       
        
    },[])

    useEffect(()=>{
        console.log(searchValue)
        let MainPost_Clone = response.slice(mainPageCount,mainPageCount+3) 
        if(searchValue.length > 0){
            setSeachStatus(true);
            let SearchedPost = MainPost_Clone.filter((e)=>{
                if (e.PostTitle.includes(searchValue)){
                    return e;
                }                
           })
           console.log(SearchedPost)
           setmainPosts(SearchedPost)

        }
        else{
            setSeachStatus(false);
            setmainPosts(response.slice(mainPageCount,mainPageCount+3))
        }
    },[searchValue])


    useEffect(()=>{
        let _mainpost = response.slice(mainPageCount,mainPageCount+3);
        let _relatedpost = response.slice(relatedPageCount,relatedPageCount+3)
        setRelatedPosts(_relatedpost)
        setmainPosts(_mainpost)
    },[mainPageCount,relatedPageCount])

    useEffect(()=>{
        if(LoaderStatus == true){
            loader(true);
        }

    },[LoaderStatus])

    
    function trimDescription(postDescription){
        let desc = postDescription?.split('')?.slice(0,200)?.join('') + '...';
        return desc
    }

    const getAPIdata = (value) =>{
        setRelatedPosts( value.slice(relatedPageCount,relatedPageCount+3) )
        setmainPosts(value.slice(mainPageCount,mainPageCount+3) )
        console.log("Mainpost ", value)
    }

    const loader = () =>{    
        if(searchStatus == true){
            return (
                <>
                    <h1 className="NoPost-block">NoPosts Found...</h1>           
                </>
            )
        }
        else     
            return (
                <>
                    <h1 className="loading-block">LOADING...</h1>           
                </>
            )    
        
           
    }
   


    return (
    <>
        <div>
            <div><Searchbar searchValue = {searchValue} setSearchValue = {setSearchValue} setSearchStatus = {setSeachStatus}></Searchbar> </div>    
                
            {mainPosts?.length > 0 ?
                <div className='home-body'>
                <div className="post-outerblock">
                    
                    {mainPosts.map(e => {                        
                            return(
                                <div  className="Post-block" >
                                   <PostDetails 
                                        key={e?.PostId} 
                                        Title = {e?.PostTitle} 
                                        Description = {trimDescription(e?.PostDescription)} 
                                        Body = {e?.PostBody}> </PostDetails>
                                   <Author Key={e?.AuthorId} AuthorName = {e?.PostAuthor} genre = {e?.Genre} args = {e}></Author>
                                </div> 
                            )
                        })}         
                     <div className='Nextpost-btn'>  
                            <button disabled = {mainPageCount >= 3 ? "" : "disabled"} onClick={()=>{setmainPageCount(prev => {return prev-3})}} >Previous</button>
                            <button disabled = {(mainPageCount+3 < response.length) && (mainPosts.length < 3) ? "" : "disabled"} onClick={()=>{setmainPageCount(prev => {return prev+3})}}>NEXT</button> 
                    </div> 
                </div>


                <div className='relatedPost-block'>
                    <h3 className='RelatedPost-title'>Related Post</h3>
                    {relatedPosts.map((item) => {
                        return(
                            <>
                                <RelatedPost 
                                    Title = {item.PostTitle} 
                                    Description = {item.PostDescription}></RelatedPost>                            
                            </>                            
                        )
                    })}
                     
                    
                    <div className='Nextpost-btn'>
                    { relatedPageCount >= 3 &&
                        <button onClick={()=>{setrelatedPageCount( (prev)=>{return prev-3} )}}>Previous</button> 
                    }
                    { relatedPageCount + 3 < response.length &&     
                        <button onClick={()=>{setrelatedPageCount( (prev)=>{return prev+3} )}}>NEXT</button> 
                    }                       
                    </div>  
                </div>

            </div>
             :   
                <div className='parent-loader'>
                    {loader()}                   
                </div>
            }
        </div> 
    </>
    )
}


export default Home;