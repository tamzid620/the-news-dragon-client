import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub , FaFacebook, FaTwitter,  FaInstagram  } from 'react-icons/fa';
import './RightNav.css'
import Qzone from '../Qzone/Qzone';
import bg from  '../../../assets/bg.png' ;

const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className='btn-google mb-2' variant="outline-primary"> <FaGoogle /> Login with Googgle</Button>
            <Button className='btn-github' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mt-5'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> < FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item> < FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item> < FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;