import './sidebar.css'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className= "myImg" src="https://avatars.githubusercontent.com/u/68986366?v=4" alt="" />
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItems">Life</li>
                    <li className="sidebarListItems">Music</li>
                    <li className="sidebarListItems">Style</li>
                    <li className="sidebarListItems">Sport</li>
                    <li className="sidebarListItems">Tech</li>
                    <li className="sidebarListItems">Cinema</li>
                </ul>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US ON</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-f"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                        <i className="sidebarIcon fab fa-linkedin-in"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
