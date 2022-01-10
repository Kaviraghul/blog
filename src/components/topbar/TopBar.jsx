import './topbar.css';
import { Link } from 'react-router-dom';
import React, {useState, useEffect, useContext} from 'react';
import DropDown from '../DropDown/DropDown';
import { Context } from '../../context/Context';


export default function TopBar() {
    const [dropdown, setDropdown] = useState(false);
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }

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
                 </ul>
                 
             </div> 
             <div className="topRight">
                 {user? <div className='topRightMenu'>
                            <img className="topImage" src={user.profilePic} alt="" />
                            <li className="topListItem"><Link to="/" style={{textDecoration:"none", color:"inherit"}} onClick={handleLogout}>LOGOUT</Link></li>
                        </div>: 
                        <div className='topRightMenu'>
                            <li className="topListItem"><Link to="/login" style={{textDecoration:"none", color:"inherit"}} >LOGIN</Link></li>
                            <li className="topListItem"><Link to="/register" style={{textDecoration:"none", color:"inherit"}} >REGISTER</Link></li>
                        </div> }
             </div>
             


        </div>
        </>
        
    )
}

