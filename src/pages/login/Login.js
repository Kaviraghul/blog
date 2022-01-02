import './login.css'

export default function Login() {
    return (
        <div className='login'>
            
            <form className='loginForm'>
                <div className='name'>
                    <h1>Adventure Seekers Club</h1>
                    <p>The journey matters more than the destination.</p>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Enter your username...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password...' />
                <button className='button'>Log in</button>
            </form>
        </div>
    )
}
