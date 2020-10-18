import React from 'react'
import './HomeSection.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListIcon from '@material-ui/icons/List';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

function HomeSection() {
    return (
        <div>
            <div className="home_section">
            <div className="home_section1">
            <CheckCircleIcon /> 
            <h4>1000+ Happy Customers</h4>
            <p>Extraordinary Service for our Users.</p>
            </div>
            <div className="home_section1">
                <ListIcon />
                <h4>5+ Cities Covered</h4>
            <p>The difference is miserable where everyone knows your name.</p>
                </div>
                <div className="home_section1">
                <SupervisedUserCircleIcon />
                <h4>300+ Doctors</h4>
            <p>There is no Substitute. Better Care Better Understanding.</p>
                </div>
                <div className="home_section1">
                <LocalHospitalIcon />
                <h4>100+ Hospitals</h4>
            <p>We are here for you forever. Heart of your healthcare.</p>
                </div>
                
            </div>
        </div>
    )
}

export default HomeSection
