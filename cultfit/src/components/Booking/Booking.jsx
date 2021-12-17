import styles from "./Booking.module.css"
import WorkoutImg from './image/yoga.svg';
import eclipse from './image/Ellipse.svg'
import cancel from './image/cancel.svg'
import mat from './image/mat.svg'
import phone from './image/phone.svg'
import bottel from './image/bottel.svg'
import mask from './image/mask.svg'
import alarm from './image/alarm.svg'
import map from './image/maps.svg'

const Booking = () => {
    return (
        <div className={styles.bookingContainer}>
            <div className={styles.flex}>
                <div>
                    <img src={WorkoutImg} alt="work-out" className={styles.workoutImage} />
                </div>
                <div>
                    <div className={styles.linksContainer}>
                        <div className={styles.flex}>
                            <p className={styles.links}>Cult.fit</p>
                            <p className={styles.links}> &gt; </p>
                            <p className={styles.links}>Cult Janakpuri</p>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div>
                            <p className={styles.yogaTitles}>Hatha Yoga</p>
                            <p className={styles.yogaDuration}>45 Minutes</p>
                            <p className={styles.yogaDate}>Wed, 15 Dec 07:00 | 07:45 pm</p>
                        </div>
                        <div className={styles.eclipseDiv}>
                            <img src={eclipse} alt="work-out" className={styles.eclipse} />
                            <img src={eclipse} alt="work-out" className={styles.eclipse} />
                            <img src={eclipse} alt="work-out" className={styles.eclipse} />
                        </div>
                    </div>

                    <div className={styles.cancelDiv}>
                        <div className={styles.flex}>
                            <img src={cancel} alt="work-out" className={styles.cancelImage} />
                            <p className={styles.cancelTitle}>Cancel this session</p>
                        </div>
                    </div>

                    <div className={styles.kitDiv}>
                        <p className={styles.kitTitle}>Bring Your Own Kit (4 items)</p>
                        <div className={styles.flex}>
                            <div className={styles.kitBox}>
                                <img src={mat} alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}> Yoga Mat</p>
                            </div>
                            <div className={styles.kitBox}>
                                <img src={phone} alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}>Mobile Phone</p>
                            </div>
                            <div className={styles.kitBox}>
                                <img src={bottel} alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}>Water Bottle</p>
                            </div>
                            <div className={styles.kitBox}>
                                <img src={mask} alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}>Face Mask</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.hrLine}></div>

                    <div className={styles.saftyDiv}>
                        <p className={styles.saftyTitle}>Safety Guidelines</p>
                        <div className={styles.flex}>
                            <div className={styles.saftyBox}>
                                <div className={styles.flex}>
                                    <div>
                                        <img src={alarm} alt="work-out" className={styles.alarmImage} />
                                    </div>
                                    <div>
                                        <p className={styles.alarmTitle} >Changes at the center</p>
                                    </div>
                                    <div>
                                        <p className={styles.alarmArrow}> &gt; </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.saftyBox2}>
                                <div className={styles.flex}>
                                    <div>
                                        <img src={alarm} alt="work-out" className={styles.alarmImage} />
                                    </div>
                                    <div>
                                        <p className={styles.alarmTitle} >Changes at the center</p>
                                    </div>
                                    <div>
                                        <p className={styles.alarmArrow}> &gt; </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.locationDiv}>
                        <p className={styles.locationTitle} >Location</p>
                        <p className={styles.locationAddress} >1st Floor, Vantagio, Next to Flechazo, Wakad Road, Shankar Kalat Nagar, Wakad, Pune</p>
                        <img src={map} alt="work-out" className={styles.mapImage} />
                        <p className={styles.locationDesc}>A training methodology that creates stimulus for improved strength & endurance and while helping participants build a great physique, improved range of motion and all round functional fitness.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking