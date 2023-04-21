import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Navbar className='mb-4' bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/category/0">Home</Link>
                            {/* <Link to="/about">About</Link>
                            <Link to="/Carrer">Carrer</Link> */}
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/Carrer">Carrer</Nav.Link>

                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>}
                                {user ?
                                    <Button variant="secondary">Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;