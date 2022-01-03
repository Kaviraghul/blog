import './post.css';
import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div className='posts'>
            {post.photo && (<img className='postImg' src={post.photo} />)}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to = {"/post/${post._id}"}>
                        <span className="postTitle">
                        {post.title}
                        </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
