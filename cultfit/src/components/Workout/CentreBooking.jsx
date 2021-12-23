
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Centre.module.css"
import { shallowEqual, useSelector } from "react-redux";

export const CentreBooking = () => {

    useEffect(()=>{
        window.scroll({top:0,behavior:'smooth'})
    })

    const obj = useParams();

    const [date, setDate] = useState("2021-12-19")
    const [time, setTime] = useState("")
    const [availableSlots, setAvailableslots] = useState([])
    const [bookingModal, setbookingModal] = useState(false)
    const [sessionBookModal, setsessionBookModal] = useState(false)
    const { sessiontype,centre } = useSelector(store => store.general, shallowEqual)
    const { isAuth, user } = useSelector(store => store.auth, shallowEqual)
    const [sessionid, setSessionid] = useState("")
    const [slotid, setSlotid] = useState("")
    const history = useHistory();
    const trials = localStorage.getItem('trials');

    const [bookingdetails, setbookingdetails] = useState({
        userid: user._id,
        centreid: obj.centre,
        sessionid: "",
        slotsid: "",
        date: date
    })

    useEffect(() => {
        fetchSlots()
    }, [date])

    useEffect(() => {
        fetchSessionid()
    }, [sessiontype])



    const fetchSessionid = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/sessions/sessionid/${sessiontype}`, { withCredentials: true })
            .then(res => {
                setbookingdetails({
                    ...bookingdetails,
                    sessionid: res.data.session[0]._id
                })
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })
    }

    const fetchSlots = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/bookings/availableslots/${date}/${sessiontype}/${obj.centre}`, { withCredentials: true })
            .then(res => {
                setAvailableslots(res.data.filteredslots)
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })
    }


    const DoBooking = () => {

        axios
            .post(`${process.env.REACT_APP_BACKEND_URL}/bookings`, bookingdetails)
            .then(res => {
                setsessionBookModal(true)
                BookDataFunction()
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })
    }


    const loggedInorNot = () => {
        setbookingModal(false)
        if (!isAuth) {
            alert("Kindly login to proceed further")
        } else {
            DoBooking()
        }
    }

    const handleChangeofSlot = (id) => {
        setbookingdetails({
            ...bookingdetails,
            slotsid: id
        })
    }

    const handleChangeofDate = (date) => {
        setbookingdetails({
            ...bookingdetails,
            date: date
        })

        setDate(date)
    }

    const DirecttoBookingDetails = () => {
        setsessionBookModal(false)
        history.push("/bookingdetails")
    }

    const BookDataFunction = () => {
        const BookData = {
            sessiontype: sessiontype,
            date: date,
            time: time,
            address: centre.address
        }

        localStorage.setItem('BookData', JSON.stringify(BookData));
    }

    const makepayment = () => {

        BookDataFunction()

        localStorage.setItem('bookingdetails', JSON.stringify(bookingdetails));
        history.push("/desktop")
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.flex}>
                    <div className={styles.imagesection}>
                        <img src={centre.photo} alt="work-out" className={styles.workOutimg} />
                    </div>
                    <div className={styles.bodysection}>
                        <div className={styles.flex}>
                            <img src="/workoutimages/location.svg" alt="location" />
                            <p className={styles.linkshow}>{centre.centrename}</p>
                            <img src="/workoutimages/dropdown.svg" alt="location" />
                        </div>

                        <div className={styles.flex}>
                            <p className={styles.linkshow}>cult.fit</p>
                            <p className={styles.linkshow}> &gt; </p>
                            <p className={styles.linkshow}>{centre.centrename}</p>
                        </div>

                        <div className={styles.flexs}>
                            <div onClick={() => {
                                setDate("2021-12-19")
                                handleChangeofDate("2021-12-19")
                            }} className={styles.dateDiv}>
                                <p style={{ color: date === "2021-12-19" ? "#FF3278" : "#A2A2A2" }}>SUN</p>
                                <div style={{ backgroundColor: date === "2021-12-19" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-19" ? "white" : "#A2A2A2" }}>19</h3>
                                </div>
                            </div>
                            <div onClick={() => {
                                setDate("2021-12-20")
                                handleChangeofDate("2021-12-20")
                            }} className={styles.dateDiv}>
                                <p style={{ color: date === "2021-12-20" ? "#FF3278" : "#A2A2A2" }}>MON</p>
                                <div style={{ backgroundColor: date === "2021-12-20" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-20" ? "white" : "#A2A2A2" }}>20</h3>
                                </div>
                            </div>
                            <div onClick={() => {
                                setDate("2021-12-21")
                                handleChangeofDate("2021-12-21")
                            }} className={styles.dateDiv} >
                                <p style={{ color: date === "2021-12-21" ? "#FF3278" : "#A2A2A2" }}>TUE</p>
                                <div style={{ backgroundColor: date === "2021-12-21" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-21" ? "white" : "#A2A2A2" }}>21</h3>
                                </div>
                            </div>
                            <div onClick={() => {
                                setDate("2021-12-22")
                                handleChangeofDate("2021-12-22")
                            }} className={styles.dateDiv}>
                                <p style={{ color: date === "2021-12-22" ? "#FF3278" : "#A2A2A2" }}>WED</p>
                                <div style={{ backgroundColor: date === "2021-12-22" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-22" ? "white" : "#A2A2A2" }}>22</h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/workoutimages/safety.svg" alt="safetyguide" />
                        </div>

                        <div className={styles.slotsDiv}>
                            {availableSlots.map((e) => {
                                return <div>
                                    <p>{e.slotTime}</p>
                                    <button onClick={() => {
                                        setbookingModal(true)
                                        setTime(e.slotTime)
                                        handleChangeofSlot(e._id)
                                    }}>{sessiontype.toUpperCase()}</button>
                                </div>
                            })}
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.modal} style={{ display: bookingModal ? "block" : "none" }}>
                <div className={styles.modalcontent}>
                    <div className={styles.modalheader}>
                        <h4 className={styles.modaltitle}>Class Booking</h4>
                        <span onClick={() => setbookingModal(false)} className={styles.closeBtn}>&times;</span>
                    </div>
                    <div className={styles.modalbody}>
                        <div className={styles.desktopcontainer}>
                            <div>
                                <p>{sessiontype}</p>
                                <p>{time}, &nbsp;  {date}</p>
                                <p>{centre.address}</p>
                            </div>
                            <p className={styles.kit}>Bring Your Own Kit (4 items)</p>
                            <div className={styles.lowercontainer}>

                                <div>
                                    <img src="/workoutimages/mat.svg" />
                                    <p>Yoga Mat</p>
                                </div>
                                <div>
                                    <img src="/workoutimages/mobile.svg" />
                                    <p>Mobile Phone</p>
                                </div>
                                <div>
                                    <img src="/workoutimages/Sipper.svg" />
                                    <p>Water Bottle</p>
                                </div>
                                <div>
                                    <img src="/workoutimages/mask.svg" />
                                    <p>Face Mask</p>
                                </div>

                            </div>
                            {trials >= 2 ? <>
                                <div className={styles.bookbtn}>
                                    <button onClick={makepayment} >MAKE PAYMENT</button>
                                </div>

                            </> : <>
                                <div className={styles.bookbtn}>
                                    <button onClick={loggedInorNot} >BOOK FOR FREE</button>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.bookmodal} style={{ display: sessionBookModal ? "block" : "none" }}>
                <div className={styles.bookmodalcontent}>
                    <div className={styles.bookcontainer}>
                        <img src="/workoutimages/confirmmark.svg" />
                        <p className={styles.classbooked}>CLASS BOOKED!</p>
                        <p className={styles.classDetails}>Your Cult Class For {sessiontype} on {date} at {time} at {centre.centrename} is confirmed!</p>
                        <img src="/workoutimages/corona.svg" />
                        <p className={styles.downloadline}>Download cult.fit app for the best experience</p>
                        <div className={styles.storeimages}>
                            <img src="/workoutimages/appstore.svg" />
                            <img src="/workoutimages/playstore.svg" />
                        </div>
                        <button className={styles.okbtn} onClick={DirecttoBookingDetails}>OK</button>
                    </div>
                </div>
            </div>

            {/*             
            <div className="modal" style={{ display: modal ? "block" : "none" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Select A Center</h4>
                        <span onClick={() => setModal(false)} id="closeBtn">&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className="desktop-container">
                            <div className="left-container">
                                <input type="text" placeholder='Search for centres' />
                                <div>
                                    {centres.map((e) => (
                                        <div className="centrediv">
                                            <div className="centredetails">
                                                <h3>{e.centrename}</h3>
                                                <p>{e.address}</p>
                                            </div>
                                            <div>
                                                <p>SELECT</p>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="right-container">
                                <img src="/workoutimages/delhi.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
