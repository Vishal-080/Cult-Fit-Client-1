import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import styles from "./Booking.module.css"

const Booking = () => {

    useEffect(()=>{
        window.scroll({top:0,behavior:'smooth'})
    })

    const { location } = useSelector(store => store.general, shallowEqual)
    const BookData = JSON.parse(localStorage.getItem('BookData'));

    const currentcentre = localStorage.getItem('currentcentre');

    return (
        <div className={styles.bookingContainer}>
            <div className={styles.flex}>
                <div>
                    <img src={`/image/${BookData.sessiontype}.svg`} alt="work-out" className={styles.workoutImage} />
                </div>
                <div>
                    <div className={styles.linksContainer}>
                        <div className={styles.flex}>
                            <p className={styles.links}>Cult.fit</p>
                            <p className={styles.links}> &gt; </p>
                            <p className={styles.links}>{currentcentre}</p>
                        </div>
                    </div>
                    <div className={styles.flexs}>
                        <div className={styles.timedetails}>
                            <p className={styles.yogaTitles}>{BookData.sessiontype}</p>
                            <p className={styles.yogaDuration}>45 Minutes</p>
                            <p className={styles.yogaDate}>{BookData.date} | {BookData.time}</p>
                        </div>
                        <div className={styles.eclipseDiv}>
                            <img src="/image/Ellipse.svg" alt="work-out" className={styles.eclipse} />
                            <img src="/image/Ellipse.svg" alt="work-out" className={styles.eclipse} />
                            <img src="/image/Ellipse.svg" alt="work-out" className={styles.eclipse} />
                        </div>
                    </div>

                    <div className={styles.cancelDiv}>
                        <div className={styles.flex}>
                            <img src="/image/cancel.svg" alt="work-out" className={styles.cancelImage} />
                            <p className={styles.cancelTitle}>Cancel this session</p>
                        </div>
                    </div>

                    <div className={styles.kitDiv}>
                        <p className={styles.kitTitle}>Bring Your Own Kit (4 items)</p>
                        <div className={styles.flex}>
                            <div className={styles.kitBox}>
                                <img src="/image/mat.svg" alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}> Yoga Mat</p>
                            </div>
                            <div className={styles.kitBox}>
                                <img src="/image/phone.svg" alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}>Mobile Phone</p>
                            </div>
                            <div className={styles.kitBox}>
                                <img src="/image/bottel.svg" alt="work-out" className={styles.matImage} />
                                <p className={styles.kitName}>Water Bottle</p>
                            </div>
                            <div className={styles.kitBox}>
                                <img src="/image/mask.svg" alt="work-out" className={styles.matImage} />
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
                                        <img src="/image/alarm.svg" alt="work-out" className={styles.alarmImage} />
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
                                        <img src="/image/alarm.svg" alt="work-out" className={styles.alarmImage} />
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
                        <p className={styles.locationAddress} >{BookData.address}</p>
                        <img src={`/image/${location}.jpg`} alt="work-out" className={styles.mapImage} />
                        <p className={styles.locationDesc}>A training methodology that creates stimulus for improved strength & endurance and while helping participants build a great physique, improved range of motion and all round functional fitness.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking