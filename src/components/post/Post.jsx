import './post.css';
import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div className='post'>
            <div className="postImage">
               {post.photo && (<img className='postImg' src={post.photo} alt="" />)}
               <span className="postCat">{post.categories}</span>
            </div>
            
            <div className="postInfo">      
                <Link style={{textDecoration:"none", color:"inherit"}}  to = {`/post/${post._id}`}>
                        <span className="postTitle">
                        {post.title}
                        </span>
                </Link>
                <hr />
                <div className="authorAndDate">
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <span className="postDate">{post.username}</span>
                </div>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
