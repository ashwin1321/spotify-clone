import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
                    <Link to='/signup'>
                        <Button variant="outline-light" className="btn1">Sign up</Button>
                    </Link>
                    <Link to='/login'>
                        <Button variant="light" className="btn1">Log in</Button>
                    </Link>
                </div>
            </Navbar >
        </>
    );
}

export default ColorSchemesExample;