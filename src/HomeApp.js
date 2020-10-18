
import { Container } from '@material-ui/core'
import React from 'react'
import './HomeApp.css'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WavesIcon from '@material-ui/icons/Waves';
import OpacityIcon from '@material-ui/icons/Opacity';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Button from '@material-ui/core/Button';




function HomeApp() {
    return (
        <div>
            <div className="home_app">
            <Container>
            <img className="doc_img" src="https://i.ibb.co/XDXPwFG/img-1.jpg"></img>
            <div className="home_itemBox">
            <DirectionsBikeIcon className="step"/>
            <h3>Step Counter</h3>
            <PermIdentityIcon className="step1"/>
            <h3>Doctors</h3>
            <WavesIcon className="step2"/>
            <h3>Laboratories</h3>
            <OpacityIcon className="step3"/>
            <h3>Blood Bank</h3>
            <LocalHospitalIcon  className="step4"/>
            <h3>Hospitals</h3>
            <ContactPhoneIcon  className="step5" />
            <h3>Free Consultancy</h3>
            </div>
            <div className="download">
            <Button variant="contained" color="secondary">
            Download App

            </Button>
            </div>
           
            </Container>
           
            </div>
            <div className="feautures">
            <h1>Feauture Facilities</h1>
            <p>Some of the features of the app for a preview.</p>
            <div className="left_img">
            <img className="img_2" src="https://i.ibb.co/Yj0cq82/2.png"></img>
            <img className="img_3" src="https://i.ibb.co/8XWrh1j/3.png"></img>
            <img className="img_4" src="https://i.ibb.co/yq7PBW5/1.png"></img>
            </div>
            <img className="img_1" src="https://i.ibb.co/ckgt5hh/Homeimage.png"></img>
            </div>
           <div className="right_img">
           <img className="img_4" src="https://i.ibb.co/XJ9x5Ln/4.png"></img>
           <img className="img_4" src="https://i.ibb.co/423CMt0/5.png"></img>
           <img className="img_4" src="https://i.ibb.co/mFbr7Cs/6.png"></img>
           </div>
         <a href="https://play.google.com/store/apps/details?id=com.skywalkersapps.mydoctor">   <h1 className="app_dow">Download Our App</h1></a>
                 </div>
    )
}
export default HomeApp
