import './topbar.css';
import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import DropDown from '../DropDown/DropDown';


export default function TopBar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
        <div className = "top" >
             <div className="topLeft">
             <i className="topIcon fab fa-facebook-f"></i>
             </div>
             <div className="topCenter">
                 <ul className="topList">
                     <li className="topListItem"><Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link></li>
                     <li className="topListItem"><Link to="/settings" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link></li>
                     <li className="topListItem" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                         <Link  to="" style={{textDecoration:"none", color:"inherit", height:"50px", display:'flex', alignItems:"center"}} >CATEGORIES</Link>
                         {dropdown && <DropDown />}
                    </li>
                     <li className="topListItem"><Link to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link></li>
                     <li className="topListItem"><Link to="/login" style={{textDecoration:"none", color:"inherit"}}>LOGOUT</Link></li>
                 </ul>
                 
             </div> 
             <div className="topRight">
                 <i className="searchIcon fas fa-search"></i>
                 <img className="topImage" src="https://scontent.fcjb6-1.fna.fbcdn.net/v/t1.18169-9/14089289_1576152542688931_2648781964389453995_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=HdyKNLyu4CkAX8JQCY7&_nc_ht=scontent.fcjb6-1.fna&oh=00_AT8xzDVA32p4I05eMV3Eg2hJA0TPyekGDJx_QE3jLGLUvg&oe=61E563A3" alt="" />   
             </div>
             
        </div>
        </>
        
    )
}

