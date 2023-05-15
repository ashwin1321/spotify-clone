import { BsFillPlayFill, BsSpotify } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { VscEllipsis } from "react-icons/vsc";
import { GiHearts } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
import { Image } from "react-bootstrap";
import avatar from "../../assets/image/avatar.jpg";
import { user } from "../../recoil/recoilState"
import { useRecoilValue } from "recoil";
import { shuffleArray, songsList } from "../../utils/songsAndAlbums";
import "./indise.css"
import { FaPlay } from "react-icons/fa"

const InsidePlaylist = () => {
    const location = useLocation();
    const { album } = location.state;
    const loggedIn = useRecoilValue(user);

    const shuffleSongsList = shuffleArray(songsList);

    return (
        <>
            <Container fluid className="px-4 mt-4  ">
                <Row className="m-0 p-0">
                    <Col className="m-0 p-0 col-2">
                        <img
                            src={album.coverImage}
                            style={{ width: "232px", height: "232px" }}
                        />
                    </Col>
                    <Col className="mt-4 d-flex flex-column ms-4">
                        <span>Playlist</span>
                        <span className="m-0 p-0 fw-bold" style={{ fontSize: "70px" }}>
                            {album.albumName}
                        </span>
                        <span className="mb-2">Release Date : &nbsp; {album.releaseDate}</span>
                        <div className="d-flex align-items-center mt-1">
                            {album.artists && (
                                <>
                                    {loggedIn && <Image src={avatar} width={25} height={25} className="rounded-5 avatar me-2" />}
                                    <span className="me-1 fw-semibold">{album.artists}</span>
                                </>
                            )}
                            {!album.artists && (
                                <div className=" d-flex align-items-center ">
                                    <BsSpotify size={20} />
                                    <span className="ms-1 fw-bold">Spotify</span>
                                </div>
                            )}
                            <span>•</span>
                            <span className="mx-1">
                                {shuffleSongsList.length}{" "}
                                {shuffleSongsList > 1 ? " songs" : " song"}{", "}
                            </span>
                            <span className="ms-1 text-secondary">about 8 hr</span>
                        </div>
                    </Col>
                </Row>

                <Col className="mt-5 d-flex align-items-center">
                    <Button
                        className="rounded-circle buttonPlay border-0  bottom-0 end-0 me-4">
                        <BsFillPlayFill size={30} color="black" />
                    </Button>

                    <GiHearts size={35} className="me-4 iconss" />
                    <VscEllipsis size={24} className="fw-semibold " />
                </Col>

                <Col className="mt-4">
                    <div className="text-secondary">
                        <div className="d-flex align-items-center mb-3 thead font-weight-bold">
                            <div className=" col-1 col1 ">#</div>
                            <div className="col-4">Title</div>
                            <div className="col-5">Artist</div>
                            <div className="col-2 d-flex justify-content-between datee">

                                <div>Date added</div>
                                <div className="col-1 text-end pe-3 mb-1">
                                    <AiOutlineClockCircle size={20} />
                                </div>
                            </div>
                        </div>
                        {shuffleSongsList.map((song, index) => {
                            return (
                                <div key={index} className="d-flex align-items-center table-roww p-2">
                                    <div className="col-1 col1 titleNum">{index + 1}</div>
                                    <div className="col-1 col1 titleLogo"> <FaPlay size={14} color="white" /></div>
                                    <div className="col-4">
                                        <div className="d-flex ">
                                            <img
                                                src={song.imgTags}
                                                style={{ width: "40px", height: "40px" }}
                                                className="me-3"
                                            />
                                            <div className="d-flex flex-column">
                                                <span className="text-white fw-bold songt">{song.title}</span>
                                                <span className="songt">{song.artist}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 songt d-flex justify-content-between">
                                        <div>{song.artist}</div>
                                    </div>

                                    <div className="col-2 d-flex justify-content-between datee">
                                        <div className="">2023-03-15</div>
                                        <div className=" d-flex justify-content-between timee">
                                            <div className="heartIcon"><AiOutlineHeart size={22} /></div>
                                            <div>3:57</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Col>
            </Container>
        </>
    );
};
export default InsidePlaylist;