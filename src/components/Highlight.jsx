import React from 'react';
import docImg from '../assets/Ellipse 725.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Highlight=()=> {
    return (
        <div className="App_wrapper">
            <div className="info_container">
                <div className="profile_container">
                    <figure className="doctor">
                        <img src={docImg} alt="" />
                    </figure>
                    <div className="rating_container">
                        4.5
                        <FontAwesomeIcon  className="star" icon="fa-solid fa-star" />
                    </div>
                </div>
                <div className="consult_info">
                    <div className="consult_name">
                    Dr. Prerna Narang
                    </div>
                    <div className="consult_details">
                        <div className="cdetails">
                            <FontAwesomeIcon icon="fa-solid fa-link" />
                            <p>General Medical Checkup</p>
                        </div>
                        <div className="cdetails">
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
                            <p>years of experience</p>
                        </div>
                        <div className="cdetails">
                            <FontAwesomeIcon icon="fa- fa-message" />
                            <p>Speaks: Hindi,English,Telugu</p>
                        </div>
                    </div>
                    <div className="consult_type">
                        <div className="videeo">
                            <h4>Video Consultation</h4>
                            <p>₹800</p>
                        </div>
                        <div className="videeo">
                            <h4>Chat Consultation</h4>
                            <p>Free</p>
                        </div>
                        

                    </div>
                </div>
            </div>
            <div className="booking_container">
                <div className="view">
                    View Profile
                </div>
                <div className="view book">
                    Book a Consultation
                </div>
            </div>
        </div>
    );
}

export default Highlight;