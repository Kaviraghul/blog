import './login.css'
import {Link} from "react-router-dom"

export default function Login() {
    return (
        <div className='login'>
            
            <form className='loginForm'>
                <div className='name'>
                    <h1>Adventure Seekers Club</h1>
                    <p>The journey matters more than the destination.</p>
                </div>
                <div className='divider'></div>
                <label>Username</label>
                <input type="text" placeholder='Enter your username...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password...' />
                <div className='buttons'>
                    <button className='loginButton'>Log in</button>
                    <button className='registerButton'><Link to="/register" style={{textDecoration:"none" , color:"inherit"}}>Register</Link></button>
                </div>
            </form>
        </div>
    )
}
