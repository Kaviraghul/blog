import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/SideBar';
import './home.css';
import TopBar from '../../components/topbar/TopBar';
import axios from "axios";
import {useEffect, useState} from "react";


export default function Home() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts");
            setPosts(res.data);
        }
        fetchPosts();
    })
    return (
        <>
            <TopBar />
            <Header /> 
            <div className='home'>
                <Posts posts={posts} />
            </div>
        </>
        
    )
}
