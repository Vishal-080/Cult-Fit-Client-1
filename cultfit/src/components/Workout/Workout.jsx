import './Workout.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

const workoutData = {
    "Yoga":["Yoga","250","/workoutimages/Yoga.png","Flexibility | Stress reduction | Mental & Emotional Well Being"],
    "Badminton":["Badminton Court Access","350","/workoutimages/Badminton.png","Flexibility | Stress reduction | Mental & Emotional Well Being"],
    "Dance Fitness":["Dance Fitness","550","/workoutimages/Dance.png","Flexibility | Stress reduction | Mental & Emotional Well Being"],
    "S&C":["S&C","400","/workoutimages/Gym.png","Flexibility | Stress reduction | Mental & Emotional Well Being"],
    "HRX Workout":["HRX Workout","400","/workoutimages/Hritik.png","Flexibility | Stress reduction | Mental & Emotional Well Being"],
    "Boxing":["Boxing","450","/workoutimages/Boxing.png","Flexibility | Stress reduction | Mental & Emotional Well Being"]
}

const Workout = () => {

    const obj = useParams();
    const [data,setData] = useState(workoutData[obj.session])

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
                            <p className='link-show'>Workout</p>
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
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <div>
                            <p className='benefit-title'>BENEFIT</p>
                            <p className='benefit-desc'>{data[3]}</p>
                            <div className='benefit-logo'>{data[0]}</div>
                        </div>
                        <div>
                            <p className='session-title'>A typical YOGA Session</p>
                        </div>

                        <div className="flex">
                            <p className='workout-type'>Begin</p>
                            <div className="time-bar-1"></div>
                            <div className="time-bar-2"></div>
                            <div className="time-bar-3"></div>
                            <div className="time-bar-4"></div>
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
                            <p className='class-details'>Every class has an array of breathing techniques,
                                a variety of asanas and meditation techniques. Helps in improving confidence &
                                balance while gaining a stronger body in the process. </p>

                            <button className='book-class-btn'>BOOK CLASS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout