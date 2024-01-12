
const Author = () =>{

    var postGenre = "Horror";

    return (
        <>
            <h3 style={{color:"black"}}>Author Name</h3>
            <h4>Genre : {postGenre}</h4>   
            <div className="AuthorPost-Detail">
                <h4>Likes <span>120</span> </h4>    
                <h4>Follows <span>20</span> </h4> 
            </div>
                
        </>
    )
}

export default Author;