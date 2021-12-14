import './Workout.css';
import WorkoutImg from './image/unsplash_t1NEMSm1rgI.svg';
import fire from './image/fire.svg';
const Workout = () => {
    return (
        <div className="container">
            <div className="main">
                <div className="flex">
                    <div className='image-section'>
                        <img src={WorkoutImg} alt="work-out" className='workOut-img' />
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
                            <p className='body-title'>Yoga</p>
                        </div>
                        <div className="flex">
                            <p className='body-title2'>CALORIES</p>
                            <p className='body-title3'>INTENSITY</p>
                        </div>
                        <div className="flex">
                            <div className="flex">
                                <img src={fire} alt="work-out" className='fire-img' />
                                <p className='body-title4'>450</p>
                            </div>
                            <div className="spaceBetween flex">
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>
                        </div>
                        <div>
                            <p className='benefit-title'>BENEFIT</p>
                            <p className='benefit-desc'>Flexibility | Stress reduction | Mental & Emotional Well Being</p>
                            <div className='benefit-logo'>Yoga</div>
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