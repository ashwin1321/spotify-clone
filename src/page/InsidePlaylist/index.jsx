import { BsFillPlayFill, BsSpotify } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Button, Col, Container, Row, Table } from "reactstrap";
import { VscEllipsis } from "react-icons/vsc";
import { GiHearts } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { songs } from "../../assets/data/spotify";
import { Image } from "react-bootstrap";
import avatar from "../../assets/image/avatar.jpg";
import { user } from "../../recoil/recoilState"
import { useRecoilValue } from "recoil";
import "./indise.css"

const InsidePlaylist = () => {
    const location = useLocation();
    const { album } = location.state;
    const loggedIn = useRecoilValue(user);

    const songsList = songs.song.map(song => {
        const title = song.title;
        const artist = song.artist;
        const album = song.album;
        const duration = song.duration;

        const fileName = song.image.fileName;
        const format = song.image.format;
        const imageData = song.image.data;
        const imgTags = `data:${format};base64,${imageData}`;

        return { title, artist, album, duration, fileName, format, imgTags };
    });

    function shuffleArray(array) {
        const shuffledArray = [...array]; // Make a copy of the original array

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }

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
                        <span>{album.releaseDate}</span>
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
                            <div className="col-1">Date added</div>
                            <div className="col-1 text-end pe-3 mb-1">
                                <AiOutlineClockCircle size={20} />
                            </div>
                        </div>
                        {shuffleSongsList.map((song, index) => {
                            console.log(song);
                            return (
                                <div key={index} className="d-flex align-items-center table-roww p-2">
                                    <div className="col-1 col1">{index + 1}</div>
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
                                    <div className="col-5 songt">{song.artist}</div>
                                    <div className="col-1">2023-03-15</div>
                                    <div className="col-1 text-end">3:57</div>
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