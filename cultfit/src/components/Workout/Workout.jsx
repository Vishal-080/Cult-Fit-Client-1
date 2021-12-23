import './Workout.css';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Actions } from '../../Store/GeneralStore/actions';
import { SET_CENTRE } from '../../Store/GeneralStore/actionTypes';

const workoutData = {
    "Yoga": ["Yoga", "250", "/workoutimages/Yoga.png", "Flexibility | Stress reduction | Mental & Emotional Well Being", "Yoga", "Every class has an array of breathing techniques, a variety of asanas and meditation techniques. Helps in improving confidence & balance while gaining a stronger body in the process."],
    "Badminton": ["Badminton Court Access", "350", "/workoutimages/Badminton.png", "Muscle Gain | Flexibility | Full body strength", "Cardio", "Simple yet effective cardio and core workout to sweat away those calories while enjoying sports"],
    "Dance Fitness": ["Dance Fitness", "550", "/workoutimages/Dance.png", "Stress reduction | Calorie Burning | Cardiovascular endurance", "Cardio", "A full body aerobic workout, divided into different genres of music providing peaks and troughs of intensity."],
    "S&C": ["S&C", "400", "/workoutimages/Gym.png", "Strength | Endurance | Mobility | Stamina", "Strength", "A training methodology that creates stimulus for improved strength & endurance while helping participants build a great physique, improved range of motion and all round functional fitness"],
    "HRX Workout": ["HRX Workout", "400", "/workoutimages/Hritik.png", "Core Strength | Full body strength | Muscle Gain | Mobility", "Strength", "A combination of primal movements, zero momentum reps & conditioning routines designed to improve muscle endurance and building lasting fitness."],
    "Boxing": ["Boxing", "450", "/workoutimages/Boxing.png", "Fat burn | Learn boxing | Stamina | Core strength", "Cardio", "Simple yet effective cardio and core workout designed to sweat away those calories, burn fat and learn Boxing at the same time"]
}

const Workout = () => {

    useEffect(()=>{
        window.scroll({top:0,behavior:'smooth'})
    })

    const obj = useParams();
    const [data, setData] = useState(workoutData[obj.session])
    const [modal, setModal] = useState(false)
    const [centres, setCentres] = useState([])
    const { sessiontype, location } = useSelector(store => store.general, shallowEqual)
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchCenters = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/cities/centres/${location}`, { withCredentials: true })
            .then(res => {
                setCentres(res.data)
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
            })
    }

    const moveToCentre = (e) => {
        dispatch(Actions(SET_CENTRE, e));
        localStorage.setItem("currentcentre", e.centrename)
        history.push(`/centrebooking/${e._id}`)
    }

    return (
        <div className="container">
            <div className="main">
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
                                            <div onClick={()=>moveToCentre(e)}>
                                                <p className='Select'>SELECT</p>
                                            </div>
                                            {/* <Link to={`/centrebooking/${e._id}`}>
                                                <div>
                                                    <p>SELECT</p>
                                                </div>
                                            </Link> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="right-container">
                                <img src={`/image/${location}.jpg`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout

