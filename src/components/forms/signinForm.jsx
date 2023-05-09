import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import "./login.css";
import "./signin.css";
import logo from "../../assets/logo/spotify.png";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";


const signinForm = () => {
    return (
        <div className="container login  ">
            <div className="mt-5">
                <div className="d-flex flex-column align-items-center gap-4">
                    <div className=" d-flex gap-3 ">
                        <Image src={logo} fluid width={50} />
                        <h3 className="mt-2 text-white ">Spotify</h3>
                    </div>
                    <h3 className="text-center m-3 ">Sign up for free to start listening.</h3>

                    <Button className="rounded-5 px-5 py-2 btnn bg-primary text-light" outline color="secondary" disabled>
                        SIGN UP WITH FACEBOOK
                    </Button>
                    <Button className="rounded-5 px-5  py-2 btnn bg-body-tertiary" outline color="secondary" disabled>
                        SIGN UP WITH GOOGLE
                    </Button>
                    <div className=" h5">or</div>
                    <h5 className="text-center  ">Signup with your email addess</h5>
                </div>
            </div>

        </div>
    );
};

export default signinForm;
