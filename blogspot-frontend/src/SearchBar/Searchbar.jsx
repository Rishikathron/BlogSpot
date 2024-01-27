import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';


const Searchbar = (props) => {

    
    const SearchPosts = () =>{        
        props.setSearchValue(props.searchValue);
    }

    return (
    <>
        <div className='search-bar'>          
            <input type="text" placeholder="Search..." class="Input-field" onChange={(e)=>props.setSearchValue(e.target.value.trim())} />
                <IconButton onClick={()=>SearchPosts()} type="button" sx={{ p: '10px' ,fontSize:20, color:'black' }} aria-label="search">
                    <SearchIcon sx={{fontSize:39, color:'black',marginTop:0.8 }}></SearchIcon>
                </IconButton>             
        </div>
    </>
    )
}

export default Searchbar;