import './Desktop.css';
import WorkoutImg from './font/yoga.svg';
import location from './font/location-icon.svg'
import calender from './font/calender.svg';

import {ModalInFunctionalComponent} from "./Modal/Modal";

const Desktop = () => {
    return (
        <div className='desktop-container'>
            <div className="flex">
                <div className='order-container'>
                    <div>
                        <p className='order-title'>Order Summary</p>
                    </div>
                    <div className='order-detail-container flex'>
                        <div>
                            <img src={WorkoutImg} alt="work-out" className='workOut-img' />
                        </div>
                        <div>
                            <p className='order-detail'>Hatha Yoga</p>
                            <p className='order-price'>420</p>
                        </div>
                    </div>
                </div>

                <div className='location-container'>
                    <div className="flex">
                        <div>
                            <div><img src={location} alt="work-out" className='location-img' /></div>
                        </div>
                        <div>
                            <p className='center-title'> Preferred Center</p>
                            <p className='center-details'>Cult Baani, Sector 56</p>
                        </div>
                    </div>
                    <div className='hr-line'></div>

                    <div className="center-date flex">
                        <div>
                            <div><img src={calender} alt="work-out" className='calender-img' /></div>
                        </div>
                        <div>
                            <p className='center-title'> 14th December 2021</p>
                            <p className='center-details'>Today</p>
                        </div>
                    </div>
                    <div className='hr-line'></div>

                    <div className="center-date flex">
                          <p className='MRP-title'>MRP</p>
                          <p className='MRP-tag'>450.00</p>
                    </div>
                    <div className="center-price flex">
                        <p className='Preferred-Center-title'>Preferred Center</p>
                        <p className="price-tag">450.00</p>
                    </div>
                    <div>
                        <button className='pay-btn'><ModalInFunctionalComponent/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desktop