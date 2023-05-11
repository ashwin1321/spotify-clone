import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import './navbar.css';
import { Input } from 'reactstrap';
import Avatar from '../Card/Avatar';
import { useRecoilValue } from 'recoil';
import { user } from '../../recoil/recoilState'

function Navbars() {
    const navigate = useNavigate();
    const page = useMatch('/search/*');
    const [search, setSearch] = useState('');
    const loggedIn = useRecoilValue(user);

    const handleSearch = (e) => {
        setSearch(e.target.value)
        navigate(`/search/${e.target.value}`, { replace: true })
    }

    return (
        <>
            <Navbar className='navbar d-flex justify-content-between p-3 rounded-3' sticky='top'>
                {!page ?
                    <div className='d-flex h3 arrows gap-4 text-secondary  '>
                        <div className='arrow' onClick={() => navigate(-1)}>
                            {"<"}
                        </div>
                        <div className='arrow' onClick={() => navigate(0)}>
                            {">"}
                        </div>
                    </div>
                    : null}

                {page ? <div className='d-flex justify-content-center'>
                    <Input type="search" placeholder="What do you want to listen to?" className='search text-white bg-dark search' value={search}
                        onChange={handleSearch} />
                </div> : null}

                {loggedIn ? <Avatar /> :

                    <div className='buttons'>
                        <Link to='/signup'>
                            <Button variant="outline-light" className="btn1">Sign up</Button>
                        </Link>
                        <Link to='/login'>
                            <Button variant="light" className="btn1">Log in</Button>
                        </Link>
                    </div>
                }
            </Navbar >
        </>

    );
}

export default Navbars;