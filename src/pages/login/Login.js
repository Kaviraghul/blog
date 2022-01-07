import './login.css'
import {Link} from "react-router-dom"
import { Context } from '../../context/Context';
import axios from 'axios';
import { useContext, useRef } from 'react';

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login",{
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    }
    return (
        <div className='login'>
            
            <form className='loginForm' onSubmit={handleSubmit}>
                <div className='name'>
                    <h1>Adventure Seekers Club</h1>
                    <p>The journey matters more than the destination.</p>
                </div>
                <div className='divider'></div>
                <label>Username</label>
                <input type="text" ref={userRef} placeholder='Enter your username...' />
                <label>Password</label>
                <input type="password" ref={passwordRef} placeholder='Enter your password...' />
                <div className='buttons'>
                    <button className='loginButton' type="submit" >Log in</button>
                    <button className='registerButton'><Link to="/register" style={{textDecoration:"none" , color:"inherit"}}>Register</Link></button>
                </div>
            </form>
        </div>
    )
}
