import { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { Image } from "react-bootstrap";
import { Alert } from "reactstrap"
import "./login.css";
import logo from "../../assets/logo/spotify.png";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../utils/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRecoilState } from "recoil";
import { user } from "../../recoil/recoilState";


const loginForm = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email, setEmail] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState("");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isEmailError, setIsEmailError] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isPasswordError, setIsPasswordError] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [visible1, setVisible1] = useState(true);
    const onDismiss1 = () => setVisible1(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loggedIn, setLoggedIn] = useRecoilState(user);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(`user logged in`, user);

                const userdetail = {
                    email: user.email,
                    uid: user.uid,
                    accessToken: user.accessToken,
                };
                setLoggedIn(userdetail);
                sessionStorage.setItem("user", JSON.stringify(userdetail));
                navigate("/")

            })
            .catch((error) => {
                console.error(`login error`, error.code);
                if (error.code === "auth/user-not-found") {
                    setIsEmailError(true);
                    setVisible(true);
                }

                else if (error.code === "auth/wrong-password") {
                    setIsPasswordError(true);
                    setVisible1(true);
                }

                else {
                    alert(error.code)
                }
            });
    }

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
                        <div className="ms-3">
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
                        <div className="me-2">
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

            <Form className=" loginForm" onSubmit={handleLogin}>
                <FormGroup>
                    <Label for="exampleEmail">Email address or username</Label>
                    <Input name="email" placeholder="Enter your Email" type="email" className=" bg-black text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    {isEmailError ? <Alert color="danger" isOpen={visible} toggle={onDismiss} className="mt-2">user not found</Alert> : null}
                </FormGroup>
                <FormGroup >
                    <Label for="examplePassword">Password</Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        className="mb-2 bg-black text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    {isPasswordError ? <Alert color="danger" isOpen={visible1} toggle={onDismiss1} className="mt-2">wrong password</Alert> : null}

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

                    <Link to="/signup">
                        <Button className="rounded-5 px-5" outline color="secondary">
                            SIGN UP FOR SPOTIFY
                        </Button>
                    </Link>
                </Container>
            </Container>
        </Container>
    );
};

export default loginForm;
