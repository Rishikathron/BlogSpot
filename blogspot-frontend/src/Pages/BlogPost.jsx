

const BlogPost = () =>{

    var titile = "New Title"
    var authorName = "Author Name"
    var postContent = "Blackmailed into playing a dating simulator set in a matriarchy, an ordinary man must put up with the unbearable and convoluted world until he clears the game. After countless days of grinding, he finally manages to beat it, but his hardcore gaming comes at a cost: extreme sleep deprivation and hunger.While heading out to the convenience store to solve one of these problems, the man tumbles down the stairs and falls unconscious, only to wake up to the worst possible realization—he has been reincarnated into the game as the mob character Leon Fou Bartfort. Now trapped in a world he despises, Leon must use his knowledge of the game to navigate through the plot safely and sustain himself in a society where the odds are heavily stacked against him."
    return (
        <>
            <div className="blog-outerblock">
                <div className="Title-block">
                    <h2 className="title">{titile} <span>{authorName}</span></h2>
                </div>
                <div className="Postcontent-block">
                    <p>{postContent}</p>
                </div>
            </div>
        </>
    )

}

export default BlogPost;