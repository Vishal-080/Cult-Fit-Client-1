
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDebugValue, useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./Centre.module.css"

export const CentreBooking = () => {

    const obj = useParams();
    console.log(obj.centre)
    // const [data, setData] = useState(workoutData[obj.session])
    // const [modal, setModal] = useState(false)
    const [centre, setCentre] = useState({})
    const [date, setDate] = useState("2021-12-19")
    const sessionid = "61bc09e46744538c3297dcd4"
    const [availableSlots, setAvailableslots] = useState([])

    useEffect(() => {
        fetchCenter()
    }, [obj.centre])


    useEffect(() => {
        fetchSlots()
    }, [date])



    const fetchCenter = () => {
        axios
            .get(`http://localhost:7765/centres/${obj.centre}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setCentre(res.data.centre)
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })
    }

    const fetchSlots = () => {
        axios
            .get(`http://localhost:7765/bookings/availableslots/${date}/${sessionid}/${obj.centre}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.filteredslots)
                setAvailableslots(res.data.filteredslots)
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })
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

                        <div className={styles.flex}>
                            <div onClick={() => setDate("2021-12-19")} className={styles.dateDiv}>
                                <p style={{ color: date === "2021-12-19" ? "#FF3278" : "#A2A2A2" }}>SUN</p>
                                <div style={{ backgroundColor: date === "2021-12-19" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-19" ? "white" : "#A2A2A2" }}>19</h3>
                                </div>
                            </div>
                            <div onClick={() => setDate("2021-12-20")} className={styles.dateDiv}>
                                <p style={{ color: date === "2021-12-20" ? "#FF3278" : "#A2A2A2" }}>MON</p>
                                <div style={{ backgroundColor: date === "2021-12-20" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-20" ? "white" : "#A2A2A2" }}>20</h3>
                                </div>
                            </div>
                            <div onClick={() => setDate("2021-12-21")} className={styles.dateDiv} >
                                <p style={{ color: date === "2021-12-21" ? "#FF3278" : "#A2A2A2" }}>TUE</p>
                                <div style={{ backgroundColor: date === "2021-12-21" ? "#FF3278" : "white" }}>
                                    <h3 style={{ color: date === "2021-12-21" ? "white" : "#A2A2A2" }}>21</h3>
                                </div>
                            </div>
                            <div onClick={() => setDate("2021-12-22")} className={styles.dateDiv}>
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
                                    <p>{e}</p>
                                    <button>YOGA</button>
                                </div>
                            })}
                        </div>

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
