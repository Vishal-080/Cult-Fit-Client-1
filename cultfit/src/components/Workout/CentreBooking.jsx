
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

    useEffect(() => {
        fetchCenter()
    }, [obj.centre])

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
                            <div className={styles.dateDiv}>
                                <p>SUN</p>
                                <div>
                                    <h3>19</h3>
                                </div>
                                
                            </div>
                            <div className={styles.dateDiv}>
                                <p>MON</p>
                                <div>
                                    <h3>20</h3>
                                </div>
                            </div>
                            <div className={styles.dateDiv}>
                                <p>TUE</p>
                                <div>
                                    <h3>21</h3>
                                </div>
                            </div>
                            <div className={styles.dateDiv}>
                                <p>WED</p>
                                <div>
                                    <h3>22</h3>
                                </div>
                            </div>
                        </div>

                        <div>
                            <img src="/workoutimages/safety.svg" alt="safetyguide" />
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
