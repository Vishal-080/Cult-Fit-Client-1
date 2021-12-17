import './Centre.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import axios from 'axios';

export const CentreBooking = () => {

    const obj = useParams();
    console.log(obj.centre)
    // const [data, setData] = useState(workoutData[obj.session])
    // const [modal, setModal] = useState(false)
    // const [centres, setCentres] = useState([])

    // const fetchCenters = () => {
    //     axios
    //         .get(`http://localhost:7765/cities/centres/Mumbai`, { withCredentials: true })
    //         .then(res => {
    //             console.log("data", res.data)
    //             setCentres(res.data)
    //         })
    //         .catch(err => {
    //             console.log("Not properly authenticated!");
    //             console.log("Error", err);
    //         })
    // }

    return (
        <div className="container">
            <h1>hello</h1>
            {/* <div className="main">
                <div className="flex">
                    <div className='image-section'>
                        <img src={data[2]} alt="work-out" className='workOut-img' />
                    </div>
                    <div className='body-section'>
                        <div className="flex">
                            <p className='link-show'>Home</p>
                            <p className='link-show'> &gt; </p>
                            <p className='link-show'>Cult</p>
                            <p className='link-show'> &gt; </p>
                            <p className='link-show'>At Center</p>
                            <p className='link-show'>&gt;</p>
                            <p className='link-show' style={{ color: "black" }}>Workout</p>
                        </div>
                        <div>
                            <p className='body-title'>{data[0]}</p>
                        </div>
                        <div className="flex">
                            <p className='body-title2'>CALORIES</p>
                            <p className='body-title3'>INTENSITY</p>
                        </div>
                        <div className="flex">
                            <div className="flex">
                                <img src="/workoutimages/fire.svg" alt="work-out" className='fire-img' />
                                <p className='body-title4'>{data[1]}</p>
                            </div>
                            <div className="spaceBetween flex">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3" style={{ backgroundColor: obj.session === "Yoga" || obj.session === "HRX Workout" ? "#A2A2A2" : "black" }}></div>
                            </div>
                        </div>
                        <div>
                            <p className='benefit-title'>BENEFIT</p>
                            <p className='benefit-desc'>{data[3]}</p>
                            <div className='benefit-logo'>{data[4]}</div>
                        </div>
                        <div>
                            <p className='session-title'>A typical {obj.session.toUpperCase()} Session</p>
                        </div>

                        <div className="flex">
                            <p className='workout-type'>Begin</p>
                            <div className="time-bar-1"></div>
                            <div className="time-bar-2"></div>
                            <div className="time-bar-3"></div>
                            <div className="time-bar-4"></div>
                            <p className='workout-time'>50min</p>
                        </div>

                        <div className="flex">
                            <div className="Timings-bar-1"></div>
                            <div>
                                <p className='time-in-digit'>8</p>
                                <p className='time-in-mins'>Mins</p>
                            </div>
                            <div>
                                <p className='workout-details'>Warm Up</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="Timings-bar-2"></div>
                            <div>
                                <p className='time-in-digit3'>10</p>
                                <p className='time-in-mins3'>Mins</p>
                            </div>
                            <div>
                                <p className='workout-details3'>Suryanamaskar</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="Timings-bar-3"></div>
                            <div>
                                <p className='time-in-digit4'>24</p>
                                <p className='time-in-mins4'>Mins</p>
                            </div>
                            <div>
                                <p className='workout-details4'>Asana Practice</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="Timings-bar-4"></div>
                            <div>
                                <p className='time-in-digit2'>8</p>
                                <p className='time-in-mins2'>Mins</p>
                            </div>
                            <div>
                                <p className='workout-details2'>Relaxation</p>
                            </div>
                        </div>
                        <div className='hr-line'></div>
                        <div>
                            <p className='class-details'>{data[5]}</p>

                            <button className='book-class-btn' onClick={() => {
                                setModal(true)
                                fetchCenters()
                            }}>BOOK CLASS</button>
                        </div>
                    </div>
                </div>
            </div>
            
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
