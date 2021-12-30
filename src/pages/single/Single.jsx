import Header from '../../components/header/Header'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'
import TopBar from '../../components/topbar/TopBar'
import './single.css'

export default function Single() {
    return (
        <div className = "single">
            <SinglePost />
            <SideBar />

        </div>
    )
}
