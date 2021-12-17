import './profiles.css';
import profiles from './images/profiles.svg';
import vector from './images/Vector.svg';
import runs from './images/runs.svg';

const Profiles = () => {
    return (
        <div className='profile-container'>
            <div className="flex">
                <div className='left-container'>
                    <div className="flex">
                        <div>
                            <img src={profiles} alt="work-out" className='profiles-img' />
                        </div>
                        <div>
                            <p className="profile-name" >Suhail Shaikh</p>
                            <p className="profile-title">VIEW PROFILE</p>
                        </div>
                    </div>
                    <div className="hr-line"></div>
                    <div className='menu-container'>
                        <div className="menus-box flex">
                            <div className='menu-title'>Profile</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Workouts</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Medical Records</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Active Packs</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Redeem Voucher</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Account</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Support</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                        <div className="menus-box flex">
                            <div className='menu-title'>Logout</div>
                            <img src={vector} alt="work-out" className='vector-img' />
                        </div>
                    </div>
                </div>

                <div className='right-containe'>
                    <div className='workout-title'>WORKOUTS</div>
                    <div className='mains-container flex'>
                        <div>
                            <p className='workout-name'>Hatha Yoga</p>
                            <p className='workout-duration'>45 Minutes</p>
                            <p className='workout-date'>Wed, 15 Dec 07:00 | 07:45 pm</p>
                        </div>
                        <div>
                            <img src={runs} alt="work-out" className='runs-img' />
                            <p className='view-title'>View</p>
                        </div>
                        <div>
                            <p className='cancel-title'>Cancel this session</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles