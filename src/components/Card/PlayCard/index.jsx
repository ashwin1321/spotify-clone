import { Col, Navbar } from 'reactstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlinePictureInPictureAlt } from 'react-icons/md';
import './playCard.css'

function ColorSchemesExample() {

    return (
        <>
            <Navbar className=' playsong d-flex justify-content-between bg-dark rounded-3' sticky='bottom'>
                <Col className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <img src='https://images.unsplash.com/photo-1586095087956-bc66fe634955?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=60&h=70&q=80' alt='song' className='img-fluid rounded-3 ' />
                        <div className='ms-3 '>
                            <h6 className='text-white m-0 fs-6'>Hotline Bling</h6>
                            <p className='text-secondary fs-6 mb-1 icon'>Drake</p>
                        </div>

                        <div className='d-flex ms-4 gap-3 align-items-center'>
                            <AiOutlineHeart size={20} className='icon' />
                            <MdOutlinePictureInPictureAlt size={20} className='icon' />
                        </div>
                    </div>


                </Col>

                <Col className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <i className='fas fa-random me-3 text-white'></i>
                        <i className='fas fa-step-backward me-3 text-white'></i>
                        <i className='fas fa-pause-circle me-3 text-white'></i>
                        <i className='fas fa-step-forward me-3 text-white'></i>
                        <i className='fas fa-redo-alt me-3 text-white'></i>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i className='fas fa-volume-up me-3 text-white'></i>
                        <div className='progress w-50'>
                            <div className='progress-bar bg-white' role='progressbar' style={{ width: '25%' }} aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    f
                </Col>

                <Col className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <i className='fas fa-list-ul me-3 text-white'></i>
                        <i className='fas fa-desktop me-3 text-white'></i>
                        <i className='fas fa-volume-up me-3 text-white'></i>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i className='fas fa-list-ul me-3 text-white'></i>
                        <i className='fas fa-desktop me-3 text-white'></i>
                        <i className='fas fa-volume-up me-3 text-white'></i>
                    </div>\s
                </Col>



            </Navbar >
        </>

    );
}

export default ColorSchemesExample;