import './settings.css';
import SideBar from '../../components/sidebar/SideBar'
import TopBar from '../../components/topbar/TopBar';

export default function Settings() {
    return (
        <>
        <TopBar />
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <label className='settingsUpdateTitle'>Update Account</label>
                    <label className='settingsDeleteTitle'>Delete Account</label>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img className='profilepic' src="https://media-exp1.licdn.com/dms/image/C5603AQEXqmfQL-1yhA/profile-displayphoto-shrink_800_800/0/1639071686743?e=1646265600&v=beta&t=BSuqErftK1GALvNtXdAL3S-eNWDu9ed1VHwvrRDXUk4" alt="" />
                        <label htmlFor='inputEditIcon'><i class="profileChangeIcon fas fa-pen"></i></label>
                        <input type= "file" id='inputEditIcon' style={{display:"none"}}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Kavi' />
                    <label>Email</label>
                    <input type="email" placeholder='Kavi@gmail.com' />
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                    <button className='settingsButton'>Save Changes</button>
                </form>
                
            </div>
            
            <SideBar />            
        </div>
        </>
        
    )
}
