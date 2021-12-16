import './profile.css';
import profiles from './images/profiles.svg';
import vector from './images/Vector.svg';
import men from './images/men-logo.svg';
import woman from './images/woman-logo.svg';

const Profile = () => {
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
                    <div>
                        <img src={profiles} alt="work-out" className='profiles-img2' />
                    </div>

                    <div className="detail-container flex">
                        <div>
                            <div className='inner-box'>
                                <p className='name-title'>NAME</p>
                                <p className='name-details'>Suhail Shaikh</p>
                                <div className='hr-lines'></div>
                            </div>

                            <div className='inner-box'>
                                <p className='name-title'>GENDER</p>
                                <div className="flex">
                                    <p className='name-details'>Male</p>
                                    <img src={men} alt="work-out" className='men-img' />
                                    <img src={woman} alt="work-out" className='woman-img' />
                                </div>
                                <div className='hr-lines'></div>
                            </div>

                            <div className='inner-box'>
                                <p className='name-title'>EMAIL</p>
                                <p className='name-details'>mail@gmail.com</p>
                                <div className='hr-lines'></div>
                            </div>

                        </div>

                        <div className='box-2'>
                            <div className='inner-box'>
                                <p className='name-title'>PHONE NUMBER</p>
                                <p className='name-details'>+91 - 9876543210</p>
                                <div className='hr-lines'></div>
                            </div>

                            <div className='inner-box'>
                                <p className='name-title'>Date Of Birth</p>
                                <p className='name-details'>MM/DD/YYYY</p>
                                <div className='hr-lines'></div>
                            </div>

                            <div className='inner-box'>
                                <p className='name-title'>WORK EMAIL</p>
                                <div className="flex">
                                    <p className='name-details'>Add Work Email</p>
                                    <p className='add-btn'>Add</p>
                                </div>
                                <div className='hr-lines'></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='discard-btn'>DISCARD</button>
                        <button className='save-btn'>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile