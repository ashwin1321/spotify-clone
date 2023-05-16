import logo from '../../assets//logo/spotify.png'
import { AiFillHome, AiOutlineSearch, AiFillHeart } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { BsPlusSquare } from 'react-icons/bs'
import { Image } from 'react-bootstrap';
import ListSidebar from '../ListSidebar';
import { NavLink, useLocation } from 'react-router-dom'
import './sidebar.css'

const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();

    const icons1 = [{
        title: 'Home',
        icon: <AiFillHome size={25} />,
        navTO: '/'
    },
    {
        title: 'Search',
        icon: <AiOutlineSearch size={25} />,
        navTO: '/search'
    },
    {
        title: 'Your Library',
        icon: <BiLibrary size={25} />,
        navTO: '#'
    }]

    const icons2 = [{
        title: 'Create Playlist',
        icon: <BsPlusSquare size={25} />,
        navTO: '#'
    },
    {
        title: 'Liked Songs',
        icon: <AiFillHeart size={25} color='#b03333' />,
        navTO: '#'
    }]



    return (
        <div className='p-4 d-flex flex-column gap-5 bg-black sidebar vh-100'>

            {/* logo */}
            <div className=' d-flex gap-2 ' >
                <Image src={logo} fluid className='slogo' />
                <h3 className='mt-2 text-white fs-4'>Spotify</h3>
            </div>

            {/* menu */}
            <div className='w-100 ' >
                <ul className='list-unstyled '>

                    {icons1.map((icon, index) => {
                        return (
                            <NavLink key={index} to={icon.navTO} id='activee' className={`${location.pathname == icon.navTO && "text-white"} `} >
                                <li  >
                                    <ListSidebar icon={icon.icon} title={icon.title} />
                                </li>
                            </NavLink>
                        )
                    })}

                </ul>
                <br />
                <ul className='list-unstyled '>

                    {icons2.map((icon, index) => {
                        return (
                            <li key={index}  >
                                <ListSidebar icon={icon.icon} title={icon.title} />
                            </li>
                        )
                    })}

                </ul>


            </div>

        </div>
    )
}

export default index