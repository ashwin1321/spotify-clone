import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbMathGreater, TbMathLower } from 'react-icons/tb';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="rgb(120, 120, 120)" variant="dark">
                <Container>

                    <Nav className="me-auto">
                        <div className='d-flex  gap-3 align-items-center'>
                            <div className='bg-0066cc'>
                                {<TbMathLower size={20} />}
                            </div>
                            <div>
                                {<TbMathGreater size={20} />}
                            </div>
                        </div>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        </>
    );
}

export default ColorSchemesExample;