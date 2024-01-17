import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
import './createpost.css'
const CreatePost = ()=>{

    const navigate = useNavigate();

    const [postTitle , setPostTitle] = useState('');
    const [genre , setGenre] = useState('');
    const [description , setDescription] = useState('');
    const [postBody , setPostBody] = useState('');

    const createPost_API = ' http://localhost:3001/posts/createPost'

    let PostapiBody = {
        postId : crypto.randomUUID(),
        postTitle : postTitle,
        postDescription : description,
        postBody : postBody,
        authorId : sessionStorage.getItem('UserId'),
        authorName : sessionStorage.getItem('UserName'),
        genre : genre
    }

    const submitPost = async () =>{
        console.log(PostapiBody);
        const response = await axios.post(createPost_API,PostapiBody);
        console.log(response.data)
        setTimeout(()=>{
            alert('Blog Posted...!')
            navigate('/')
        },500)
    }


    return (
        <>
            <div className="containerPost">
                <div className="left-block">
                    <h2>Create New Post</h2> <br/>
                    <input placeholder='Title' onChange={(e)=>setPostTitle(e.target.value)}/>
                    <input placeholder='Genre' onChange={(e)=>setGenre(e.target.value)}/>
                    <textarea placeholder='Description' className='input-Desc'  onChange={(e)=>setDescription(e.target.value)}/>                    
                </div>
                <div className="right-block">
                    <div className="textarea">
                        <textarea placeholder='Sclupture your post...' className='input-post'  onChange={(e)=>setPostBody(e.target.value)} />
                    </div>
                    <div >
                        <button className='btn' onClick={submitPost}>POST</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default CreatePost;