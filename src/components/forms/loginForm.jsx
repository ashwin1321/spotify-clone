import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import "./login.css";
import logo from "../../assets/logo/spotify.png";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";


const loginForm = () => {
    return (
        <div className="container login  ">
            <div className="mt-5">
                <div className="d-flex flex-column align-items-center gap-3">
                    <div className=" d-flex gap-3 ">
                        <Image src={logo} fluid width={50} />
                        <h3 className="mt-2 text-white ">Spotify</h3>
                    </div>
                    <hr className=" hr1" />
                    <h6 className="text-center mt-3">To continue, log in to Spotify.</h6>

                    <Button className="rounded-5 px-5 btn bg-primary text-light" outline color="secondary" disabled>
                        CONTINUE WITH FACEBOOK
                    </Button>
                    <Button className="rounded-5 px-5 btn bg-body-secondary" outline color="secondary" disabled>
                        CONTINUE WITH APPLE
                    </Button>
                    <Button className="rounded-5 px-5 btn bg-body-tertiary" outline color="secondary" disabled>
                        CONTINUE WITH GOOGLE
                    </Button>
                    <div className="my-2">OR</div>

                </div>
            </div>

            <Form className="w-25">
                <FormGroup>
                    <Label for="exampleEmail">Email address or username</Label>
                    <Input name="email" placeholder="Enter your password" type="email" required />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        className="mb-2"
                        required
                    />
                    <a href="#" className="aa ">
                        Forgot your password?
                    </a>
                </FormGroup>
                <div className="d-flex gap-5 justify-content-between align-content-center text-center">
                    <div className="d-flex ">
                        <input type="checkbox" className="checkbox" />
                        <label className="p-2 ">Remember me</label>
                    </div>
                    <Button className="bg-success text-dark rounded-5 w-25  ">
                        LOG IN
                    </Button>
                </div>
            </Form>
            <br />
            <div className="d-flex flex-column justify-content-center align-items-center mt-2">
                <hr className="hr2" />
                <div className="d-flex flex-column align-items-center">
                    <p className="text-center">Dont have an account?</p>
                    <Button className="rounded-5 px-5" outline color="secondary">
                        SIGN UP FOR SPOTIFY
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default loginForm;
