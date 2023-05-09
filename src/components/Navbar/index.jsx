import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function ColorSchemesExample() {
    return (
        <>
            <Navbar variant="dark" className='navbar'>
                <Container>
                    <div className='d-flex h3 arrows gap-4 text-secondary '>
                        <div className=''>
                            {"<"}
                        </div>
                        <div>
                            {">"}
                        </div>
                    </div>
                    <div className='buttons'>
                        <Button variant="outline-light">Sign up</Button>
                        <Button variant="light">Log in</Button>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;