/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { Image } from "react-bootstrap";
import { Alert, Toggle } from "reactstrap"
import "./login.css";
import "./signin.css";
import logo from "../../assets/logo/spotify.png";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


const signinForm = () => {

    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [emailError, setEmailError] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [passwordError, setPasswordError] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible1, setVisible1] = useState(true);
    const onDismiss1 = () => setVisible1(false);


    const handleSignUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signup successful!")
                console.log("user signed in", user);
                navigate("/login")


            })
            .catch((error) => {
                console.log('Signup error:', error);
                if (error.code === "auth/email-already-in-use") {
                    setEmailError(true);
                    setVisible(true);
                }

                if (error.code == "auth/weak-password") {
                    setPasswordError(true);
                    setVisible1(true);
                }

            });
    };

    return (
        <Container className=" login  ">
            <Container className="mt-5 mb-3">
                <Container className="d-flex flex-column align-items-center gap-3">
                    <div className=" d-flex gap-3 ">
                        <Image src={logo} fluid width={50} />
                        <h3 className="mt-2 text-white ">Spotify</h3>
                    </div>
                    <h3 className="text-center m-3 ">Sign up for free to start listening.</h3>

                    <Button className=" btnn d-flex justify-content-around rounded-5 px-5  text-light fb" >
                        <BsFacebook className=" mt-1" />
                        <div className="">
                            CONTINUE WITH FACEBOOK
                        </div>
                    </Button>
                    <Button className="d-flex btnn justify-content-around rounded-5 px-5  google" >
                        <BsGoogle className="mt-1" />
                        <div className="me-3">
                            CONTINUE WITH GOOGLE
                        </div>
                    </Button>
                    <div className="d-flex gap-4">
                        <div className="w-25">-</div>
                        <div className=" h5">or</div>
                        <div>-</div>
                    </div>
                    <h5 className="text-center  ">Signup with your email address</h5>
                </Container>
            </Container>

            <Form className="formm " onSubmit={handleSignUp}>
                <FormGroup>
                    <Label for="email">What's your email?</Label>
                    <Input name="email" placeholder="Enter your email." id="email" type="email" className="bg-black text-white" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    {emailError ? <Alert color="danger" isOpen={visible} toggle={onDismiss} className="mt-2">email already in use</Alert> : null}
                </FormGroup>

                <FormGroup>
                    <Label for="password">Create a password</Label>
                    <Input
                        name="password" placeholder="Create a password." type="password" className="mb-2 bg-black text-white "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    {passwordError ? <Alert color="danger" isOpen={visible1} toggle={onDismiss1} className="mt-2">password should be at least 6 characters</Alert> : ""}
                </FormGroup>

                <FormGroup>
                    <Label for="username">What Should we call you?</Label>
                    <Input
                        name="text" placeholder="Enter your profile name." type="username" className="mb-2 bg-black text-white" required disabled />
                    <a href="#" >
                        This appears on your profile.
                    </a>
                </FormGroup>

                <FormGroup>
                    <Label for="dob">What's your date of birth?</Label>
                    <Input
                        name="date" placeholder="Enter your date of birth." type="date" className="mb-2 bg-black text-white" required disabled />
                </FormGroup>

                <FormGroup>
                    <Label for="dob">What's your gender?</Label>
                    <br />

                    <div className="d-flex  flex-wrap">
                        <div className="d-flex gap-2 mx-2">
                            <Input type="radio" className="checkbox" id="male" disabled />
                            <Label for=" male">Male</Label>
                        </div>
                        <div className="d-flex gap-2 mx-2">
                            <Input type="radio" className="checkbox" id="female" disabled />
                            <Label for=" male">Female</Label>
                        </div>
                        <div className="d-flex gap-2 mx-2">
                            <Input type="radio" className="checkbox" id="non-binary" disabled />
                            <Label for=" male">Non-binary</Label>
                        </div>
                        <div className="d-flex gap-2 mx-2">
                            <Input type="radio" className="checkbox" id="other" disabled />
                            <Label for=" male">Other</Label>
                        </div>
                        <div className="d-flex gap-2 mx-2">
                            <Input type="radio" className="checkbox" id="silent" disabled />
                            <Label for=" male">Prefer not to say</Label>
                        </div>
                    </div>



                </FormGroup>

                <Container className="d-flex flex-column gap-1 mt-4 justify-content-between align-content-center">
                    <div className="d-flex gap-2 ">
                        <Input type="checkbox" className="checkbox" id="checkbox1" checked disabled />
                        <Label for="checkbox1">Send me updates about Spotify</Label>
                    </div>

                    <div className="d-flex gap-2 ">
                        <Input type="checkbox" className="checkbox" id="checkbox2" checked disabled />
                        <Label for="checkbox2">Share my registration data with Spotify.</Label>
                    </div>

                    <div className="d-flex gap-2 ">
                        <Input type="checkbox" className="checkbox" id="checkbox3" checked disabled />
                        <Label for="checkbox3">I agree to the <a href="#" className="agree">Terms and Conditions</a> and <a href="#" className="agree">Privacy Policy</a>.</Label>
                    </div>
                </Container>

                <Container className="d-flex  justify-content-center mt-4">

                    <Button className="bg-success text-dark rounded-5 sign mt-3 p-2   ">
                        SIGN UP
                    </Button>
                </Container>

                <Container className="d-flex  justify-content-center mt-4">
                    <h6 className="text-center">Have an account? <Link to="/login" className="agree">Log in</Link>.</h6>
                </Container>

            </Form>

        </Container>
    );
};

export default signinForm;
