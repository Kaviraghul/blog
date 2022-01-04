import './register.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Registration() {
    const [username, newUsername] = useState("");
    const [email, newEmail] = useState("");
    const [password, newPassword] = useState("");
    const [error, setError] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false)
        try{
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace('/login');
        }catch(err){
            setError(true)
        }
    }

    return (
        <div className='register'>
            <form className='registerForm' onSubmit={handleSubmit}>

                <label>Username</label>
                <input 
                class="registerTitle"  
                type="text" 
                placeholder='Enter your username...' 
                onChange={(e) => {newUsername(e.target.value)}}
                />

                <label>Email</label>
                <input 
                class="registerTitle"  
                type="text" 
                placeholder='Enter your email...' 
                onChange={(e) => {newEmail(e.target.value)}}
                />
                
                <label>Password</label>
                <input 
                    class="registerTitle"  
                    type="password" 
                    placeholder='Enter your password...' 
                    onChange={(e) =>{ newPassword(e.target.value)}}
                />
                
                <button className='registerButton' type="submit">Register</button>

            </form>
            <button className='registerLoginButton' type="submit">
                    <Link className='link' to='/login'>
                      Login
                    </Link>
            </button>
            {error && <span style={{color : "red" , margin:"10px"}}>Something went wrong</span>}
        </div>
    )
}
