import React from 'react'
import {Link} from 'react-router-dom';
import './dropdown.css';

export default function DropDown() {
    return (
        <ul className='dropdown'>
            <li className='dropdownlist'><Link to="/swimming" style={{textDecoration:"none", color:"inherit"}}>SWIMMING</Link></li>
            <li className='dropdownlist'><Link to="/swimming" style={{textDecoration:"none", color:"inherit"}}>MOUNTAINEERING</Link></li>
            <li className='dropdownlist'><Link to="/swimming" style={{textDecoration:"none", color:"inherit"}}>KAYAKKING</Link></li>
            <li className='dropdownlist'><Link to="/swimming" style={{textDecoration:"none", color:"inherit"}}>BIKE RIDING</Link></li>
        </ul>
    )
}
