import './topbar.css'

export default function TopBar() {
    return (
        <div className = "top" >
             <div className="topLeft">
             <i className="topIcon fab fa-facebook-f"></i>
             <i className="topIcon fab fa-twitter"></i>
             <i className="topIcon fab fa-linkedin-in"></i>
             </div>
             <div className="topCenter">
                 <ul className="topList">
                     <li className="topListItem">HOME</li>
                     <li className="topListItem">ABOUT</li>
                     <li className="topListItem">CONTACT</li>
                     <li className="topListItem">WRITE</li>
                     <li className="topListItem">LOGOUT</li>
                 </ul>
             </div>  
             <div className="topRight">
                 <img className="topImage" src="https://scontent.fcjb6-1.fna.fbcdn.net/v/t1.18169-9/14089289_1576152542688931_2648781964389453995_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=HdyKNLyu4CkAX8JQCY7&_nc_ht=scontent.fcjb6-1.fna&oh=00_AT8xzDVA32p4I05eMV3Eg2hJA0TPyekGDJx_QE3jLGLUvg&oe=61E563A3" alt="" />
                 <i className="searchIcon fas fa-search"></i>
             </div>
        </div>
    )
}

