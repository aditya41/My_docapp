import Button from '@material-ui/core/Button';
import React from 'react'
import './Hospital.css'
import Container from 'react-bootstrap/Container';


function Hospital() {
    return (
        <div>

        <Container className="container">
        <div className="con_item">
            <h3>Search Hospitals By Categories</h3>
            <Button className="hospital_button" variant="contained" color="secondary">
             Search More
            </Button>
            </div>
            <img className="img" src="https://i.ibb.co/51b2Cvp/slip.png"></img>
            <h5 className="hos1">Multispeciality Hospitals</h5>
            <a className="hos11" href="">Consult Now</a>
            <img className="img1" src="https://i.ibb.co/N73CfgL/child.png"></img>
            <h5 className="hos2">Child Care Hospitals</h5>
            <a className="hos22" href="">Consult Now</a>
            <img className="img2" src="https://i.ibb.co/4tb5BFX/skin.png"></img>
            <h5 className="hos3">Skin Care Hospitals</h5>
            <a className="hos33" href="">Consult Now</a>
            <img className="img3" src=" https://i.ibb.co/ykHwXL9/bone.png"></img>
            <h5 className="hos4">Skin Care Hospitals</h5>
            <a className="hos44" href="">Consult Now</a>
            </Container>
          
        </div>
          
    )
}

export default Hospital
