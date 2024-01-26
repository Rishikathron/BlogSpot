import { Icon } from '@mui/material';
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const Searchbar = (props) => {

    const SearchPosts = (value) =>{
        
        props.mainPosts.map((post) => {
            if(post.PostTitle.includes(value)){
                props.setmainPosts(post);
            }
        });
        console.log(props.mainPosts)
        
        
    }

    return (
    <>
        <div className='search-bar'>          
            <input type="text" placeholder="Search..." class="Input-field" />
                <IconButton onClick={(e)=>SearchPosts(e.target.value)} type="button" sx={{ p: '10px' ,fontSize:20, color:'black' }} aria-label="search">
                    <SearchIcon sx={{fontSize:39, color:'black',marginTop:0.8 }}></SearchIcon>
                </IconButton>             
        </div>
    </>
    )
}

export default Searchbar;