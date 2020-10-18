import React from 'react'
import './Home.css';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';


function Home() {
    return (
        <div>
        <div className="home_image">
        <div className="home_box">
                <h1>MyDoctor App</h1>
                <h5>Provide best quality healthcare for you</h5>
                <CheckIcon />
                <p className="box_items">Book appointments online</p>
                <p className="box_items2">Now you can book your appointment anytime anywhere.</p>
                <CheckIcon />
                <p className="box_items">Choose your preferred doctor</p>
                <p className="box_items2">We provide the facility to choose your preferred doctor so that you can consult with him/her on call, whatsapp, or at your home as per your convenience.</p>
                <CheckIcon />
                <p className="box_items">Online appointment tracking system</p>
                <p className="box_items2">Gone are the days of waiting in long queues. With our online appointment tracking system, you can always keep a track of your turn.</p>
              <Button variant="contained" color="secondary">
                <span>Free Consult with Doctor</span>
                </Button>

            </div>
        </div>
        </div>
    )
}

export default Home