import './register.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Registration() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            setError(true);
        }
    }

    return (
        <div className='register'>
            <form className='registerForm' onSubmit={handleSubmit}>
                <span className='registrationTitle'>Registration</span>
                <div className='divider'></div>
                <label>Username</label>
                <input 
                class="registerTitle"  
                type="text" 
                placeholder='Enter your username...' 
                onChange={e => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input 
                class="registerTitle"  
                type="text" 
                placeholder='Enter your email...' 
                onChange={e => setEmail(e.target.value)}
                />
                
                <label>Password</label>
                <input 
                    class="registerTitle"  
                    type="password" 
                    placeholder='Enter your password...' 
                    onChange={e => setPassword(e.target.value)}
                />
                
                <div className='buttons'>
                    <button className='registerButton' type="submit">
                        Register
                    </button>
                    <button className='loginButton'><Link to="" style={{textDecoration:"none" , color:"inherit"}}>Log in</Link></button>
                </div>
            </form>
            
            
            {error && <span style={{color : "red" , margin:"10px"}}>Something went wrong</span>}
        </div>
    )
}
