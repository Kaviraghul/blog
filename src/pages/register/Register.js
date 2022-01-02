import './register.css'

export default function Rogin() {
    return (
        <div className='register'>
            <form className='registerForm'>
                <label>Username</label>
                <input type="text" placeholder='Enter your username...' />
                <label>Email</label>
                <input type="text" placeholder='Enter your email...' />
                <label>Password</label>
                <input type="password" placeholder='Enter your password...' />
                <button className='button'>Register</button>
            </form>
        </div>
    )
}
