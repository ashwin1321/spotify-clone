import { useState } from "react";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Container
} from "reactstrap";
import { Button, Image } from "react-bootstrap";
// import useAuth from "../../hooks/useAuth";
import avatar from "../../assets/image/avatar.jpg";
import "./avatar.css";
import { FiDownload } from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { user } from "../../recoil/recoilState";

const Avatar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useRecoilState(user);

    const logout = () => {
        sessionStorage.removeItem("user");
        setLoggedIn(false);
        navigate("/login");
    };

    return (

        <Container className="avatar f-flex w-25 justify-content-end ">

            <Button variant="outline-light" className="btn11"> <FiDownload className="mb-1 me-1" /> Install App</Button>

            <Dropdown isOpen={isOpen} toggle={() => setIsOpen((p) => !p)}>
                <DropdownToggle className=" rounded-5 d-flex w-75 border-0 bg-black justify-content-center avt ">
                    <Image src={avatar} width={30} height={30} className="rounded-5 avatar" />
                </DropdownToggle>
                <DropdownMenu dark={true} >
                    <DropdownItem >Profile</DropdownItem>
                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Container>
    );
};

export default Avatar;
