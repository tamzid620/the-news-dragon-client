import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { AuthContext } from '../../../Providers/AuthProvider';


const Header = () => {
     

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D ,YYYY")}</p>
            </div>
            <div className='d-flex bg-light p-3 rounded-3 mb-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text I can be a React component, multiple React c....
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;