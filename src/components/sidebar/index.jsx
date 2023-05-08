import React from 'react'
import logo from '../../assets//logo/spotify.png'
import { AiFillHome, AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { BsPlusSquare } from 'react-icons/bs'
import { Image } from 'react-bootstrap';
import ListSidebar from '../listSidebar';

const index = () => {

    const icons = [{
        title: 'home',
        icon: <AiFillHome size={30} />
    },
    {
        title: 'search',
        icon: <AiOutlineSearch size={30} />
    },
    {
        title: 'your library',
        icon: <BiLibrary size={30} />
    },
    {
        title: 'create playlist',
        icon: <BsPlusSquare size={30} />
    },
    {
        title: 'liked songs',

        icon: <AiFillHeart size={30} />
    }]



    return (
        <div className='p-4 d-flex flex-column gap-4  '>

            {/* logo */}
            <div className=' d-flex gap-2 ' >
                <Image src={logo} fluid width={45} />
                <h3 className='mt-2 '>Spotify</h3>
            </div>

            {/* menu */}
            <div className='w-25' >
                <ul className='list-unstyled '>

                    {icons.map((icon, index) => {
                        return (
                            <li key={index}  >
                                <ListSidebar icon={icon.icon} title={icon.title} />
                                <br />
                            </li>
                        )
                    })}

                </ul>

            </div>

        </div>
    )
}

export default index