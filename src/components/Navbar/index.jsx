import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function ColorSchemesExample() {
    return (
        <>
            <Navbar variant="dark" className='navbar d-flex justify-content-between p-3 ' sticky='top'>

                <div className='d-flex h3 arrows gap-4 text-secondary  '>
                    <div className='arrow'>
                        {"<"}
                    </div>
                    <div className='arrow'>
                        {">"}
                    </div>
                </div>
                <div className='buttons'>
                    <Button variant="outline-light" className="btn1">Sign up</Button>
                    <Button variant="light" className="btn1">Log in</Button>
                </div>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;