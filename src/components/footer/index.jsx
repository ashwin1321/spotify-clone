import React from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import "./footer.css"

const index = () => {
    return (
        <div className="footer mt-5  ">
            <div className=" mt-4 d-flex justify-content-between  ">
                <div className="row w-75 " >
                    <div className="col-md-2 ">
                        <nav>
                            <ul className=" list-unstyled ">
                                <li>
                                    <a href="#" className="text-white font-weight-bold">Company</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Jobs</a>
                                </li>
                                <li>
                                    <a href="#">For the Record</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-2">
                        <nav>
                            <ul className=" list-unstyled">
                                <li>
                                    <a href="#" className="text-white font-weight-bold" >Communities</a>
                                </li>

                                <li>
                                    <a href="#">For Artists</a>
                                </li>
                                <li>
                                    <a href="#">Developers</a>
                                </li>
                                <li>
                                    <a href="#">Advertising</a>
                                </li>
                                <li>
                                    <a href="#">Investors</a>
                                </li>
                                <li>
                                    <a href="#">Vendors</a>
                                </li>
                                <li>
                                    <a href="#">Spotify for Work</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-2">
                        <nav>
                            <ul className=" list-unstyled">
                                <li>
                                    <a href="#" className="text-white font-weight-bold">Useful links</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                                <li>
                                    <a href="#" >Free Mobile App</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <nav>
                    <ul className="d-flex icons  gap-2 list-unstyled">
                        <li>
                            <a href="https://instagram.com" className="p-2 rounded-5 bg-dark">
                                <BsInstagram size={20} className="mb-1" />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com" className="p-2 rounded-5 bg-dark">
                                <BsTwitter size={20} className="mb-1" />
                            </a>
                        </li>

                        <li>
                            <a href="https://facebook.com" className="p-2 rounded-5 bg-dark" >
                                <BsFacebook size={20} className="mb-1" />
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <hr />
            <footer className="p-5">
                <p>&copy; 2023 Spotify AB</p>
            </footer>
        </div>
    );
};

export default index;
