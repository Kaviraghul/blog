import './post.css'

export default function Post() {
    return (
        <div className='posts'>
            <img src="https://img.indianautosblog.com/resize/750x-/2021/11/23/royal-enfield-sg650-concept-77e2.jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                Royal Enfield SG650
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                   The SG650 Concept is the result of a challenge set to Royal Enfield’s Industrial Design Team by Mark Wells, Chief of Design. At its core, the message underpinning the concept build was about celebrating ‘transition’. The aim, through this challenge, was for the Royal Enfield team to embark on a new creative journey with the SG650 Concept; starting from within Royal Enfield’s classic design sensibilities and then pushing into a whole new era of what the Royal Enfield’s of the future could look like.
            </p>
        </div>
    )
}
