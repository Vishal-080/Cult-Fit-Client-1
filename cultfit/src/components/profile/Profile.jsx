
import vector from './images/Vector.svg';
import men from './images/men-logo.svg';
import woman from './images/woman-logo.svg';
import styles from "./profile.module.css"
import { shallowEqual, useSelector } from 'react-redux';

const Profile = () => {

    const { user } = useSelector(store => store.auth, shallowEqual)

    return (
        <div className={styles.profilecontainer}>
            <div className={styles.flex}>
                <div className={styles.leftcontainer}>
                    <div className={styles.flex}>
                        <div>
                            <img src="https://static.cure.fit/assets/images/user-default.png" alt="work-out" className={styles.profilesimg} />
                        </div>
                        <div>
                            <p className={styles.profilename}>{user.firstname}</p>
                            <p className={styles.profiletitle}>VIEW PROFILE</p>
                        </div>
                    </div>
                    <div className={styles.hrline}></div>
                    <div className={styles.menucontainer}>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Profile</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Workouts</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Medical Records</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Active Packs</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Redeem Voucher</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Account</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Support</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                        <div className={`${styles.menusbox} ${styles.flex}`}>
                            <div className={styles.menutitle}>Logout</div>
                            <img src={vector} alt="work-out" className={styles.vectorimg} />
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="https://static.cure.fit/assets/images/user-default.png" alt="work-out" className={styles.profilesimg2} />
                    </div>

                    <div className={`${styles.detailcontainer} ${styles.flex}`}>
                        <div>
                            <div className={styles.innerbox}>
                                <p className={styles.nametitle}>NAME</p>
                                <p className={styles.namedetails}>{user.firstname}</p>
                                <div className={styles.hrlines}></div>
                            </div>

                            <div className={styles.innerbox}>
                                <p className={styles.nametitle}>GENDER</p>
                                <div className={styles.flex}>
                                    <p className={styles.namedetails}></p>
                                    <div className={styles.gendericons}>
                                        <img src={men} alt="work-out" className={styles.menimg} />
                                        <img src={woman} alt="work-out"/>
                                    </div>
                                </div>
                                <div className={styles.hrlines}></div>
                            </div>

                            <div className={styles.innerbox}>
                                <p className={styles.nametitle}>EMAIL</p>
                                <p className={styles.namedetails}>{user.email}</p>
                                <div className={styles.hrlines}></div>
                            </div>

                        </div>

                        <div className={styles.box2}>
                            <div className={styles.innerbox}>
                                <p className={styles.nametitle}>PHONE NUMBER</p>
                                <p className={styles.namedetails}>+91 - 9876543210</p>
                                <div className={styles.hrlines}></div>
                            </div>

                            <div className={styles.innerbox}>
                                <p className={styles.nametitle}>Date Of Birth</p>
                                <p className={styles.namedetails}>MM/DD/YYYY</p>
                                <div className={styles.hrlines}></div>
                            </div>

                            <div className={styles.innerbox}>
                                <p className={styles.nametitle}>WORK EMAIL</p>
                                <div className={styles.flex}>
                                    <p className={styles.namedetails}>Add Work Email</p>
                                    <p className={styles.addbtn}>Add</p>
                                </div>
                                <div className={styles.hrlines}></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={styles.discardbtn}>DISCARD</button>
                        <button className={styles.savebtn}>SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile