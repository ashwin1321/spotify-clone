import React from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { Image } from "react-bootstrap";
import "./login.css";
import logo from "../../assets/logo/spotify.png";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";


const loginForm = () => {
    return (
        <Container className=" login  ">
            <Container className="mt-5">
                <Container className="d-flex flex-column align-items-center gap-3">
                    <div className=" d-flex gap-3 ">
                        <Image src={logo} fluid width={50} />
                        <h3 className="mt-2 text-white ">Spotify</h3>
                    </div>
                    <hr className=" hr1" />
                    <h6 className="text-center mt-3">To continue, log in to Spotify.</h6>

                    <Button className=" d-flex justify-content-between rounded-5 px-5 btn  text-light fb" >
                        <BsFacebook className=" mt-1" />
                        <div className="">
                            CONTINUE WITH FACEBOOK
                        </div>
                    </Button>
                    <Button className=" d-flex justify-content-between rounded-5 px-5 btn apple " >
                        <BsApple className="mt-1 " />
                        <div className="me-4">
                            CONTINUE WITH APPLE
                        </div>
                    </Button>
                    <Button className="d-flex  justify-content-between rounded-5 px-5 btn google" >
                        <BsGoogle className="mt-1" />
                        <div>
                            CONTINUE WITH GOOGLE
                        </div>
                    </Button>
                    <div className="d-flex gap-3 my-3">
                        <div>-</div>
                        <div className="">or</div>
                        <div>-</div>
                    </div>

                </Container>
            </Container>

            <Form className=" loginForm">
                <FormGroup>
                    <Label for="exampleEmail">Email address or username</Label>
                    <Input name="email" placeholder="Enter your password" type="email" className=" bg-black text-white" required />
                </FormGroup>
                <FormGroup >
                    <Label for="examplePassword">Password</Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        className="mb-2 bg-black text-white"

                        required
                    />
                    <a href="#" className="aa ">
                        Forgot your password?
                    </a>
                </FormGroup>
                <Container className="d-flex gap-5 justify-content-between align-content-center text-center">
                    <div className="d-flex ">
                        <input type="checkbox" className="checkbox" />
                        <label className="p-2 ">Remember me</label>
                    </div>
                    <Button className="bg-success text-dark rounded-5 w-25  ">
                        LOG IN
                    </Button>
                </Container>
            </Form>
            <br />
            <Container className="d-flex flex-column justify-content-center align-items-center mt-2">
                <hr className="hr2" />
                <Container className="d-flex flex-column align-items-center">
                    <p className="text-center">Dont have an account?</p>
                    <Button className="rounded-5 px-5" outline color="secondary">
                        SIGN UP FOR SPOTIFY
                    </Button>
                </Container>
            </Container>
        </Container>
    );
};

export default loginForm;
