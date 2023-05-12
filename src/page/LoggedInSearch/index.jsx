import React from 'react'
import "./logSearch.css"
import { Button } from 'react-bootstrap'
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap'
import SearchPage from '../SearchPage'
import { BsFillPlayFill } from "react-icons/bs";
import { songs } from '../../assets/data/spotify'
import { Link } from 'react-router-dom'
import SongCard from '../../components/Card/SongCard'

const index = () => {

    const cardData = [
        { id: 1, imageUrl: "https://i.scdn.co/image/ab67616100005174d42a27db3286b58553da8858", title: "Dua Lipa", subtitle: "Artist" },
        { id: 2, imageUrl: "https://i.scdn.co/image/ab676161000051749e690225ad4445530612ccc9", title: "Ed Sheeran", subtitle: "Artist" },
        { id: 3, imageUrl: "https://i.scdn.co/image/ab676161000051745a00969a4698c3132a15fbb0", title: "Taylor Swift", subtitle: "Artist" },
        { id: 4, imageUrl: "https://i.scdn.co/image/ab67616100005174cdce7620dc940db079bf4952", title: "Ariana Grande", subtitle: "Artist" },
    ];

    function shuffleArray(array) {
        const shuffledArray = [...array]; // Make a copy of the original array

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }

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

    const shuffleSongsList = shuffleArray(songsList);
    const shuffleSongsList1 = shuffleArray(songsList);
    const shuffleSongsList2 = shuffleArray(songsList);
    const shuffleSongsList3 = shuffleArray(songsList);

    return (
        <>
            <Container fluid className=" mt-2 cont ">
                <Row className='ms-0 w-75'>
                    <div className='serbutton'>
                        <Button className="sbtn ">All</Button>
                        <Button className="sbtn" >Songs</Button>
                        <Button className="sbtn" >Artists</Button>
                        <Button className="sbtn" >Albums</Button>
                        <Button className="sbtn" >Podcasts & Shows</Button>
                        <Button className="sbtn" >Playlists</Button>
                        <Button className="sbtn" >Genres & Moods</Button>
                        <Button className="sbtn" >Profiles</Button>
                    </div>
                </Row>

                <Row className='ms-0 mt-4'>
                    <Col className='col-4'>

                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-bold fs-4 text-white">Top results</h2>
                        </div>

                        <div className=" p-0 border-5  mt-2">
                            <Card className="cardComp cardssss border-0 rounded-3 gap-3  ">
                                <div className="position-relative  ">
                                    <img src={`https://i.scdn.co/image/ab67616100005174d42a27db3286b58553da8858`} alt="..." className=" imgg1 rounded-circle" />
                                </div>
                                <CardBody className="m-0 p-0 ">
                                    <CardText className="m-0 fw-bold fs-3 cardtitle text-white">Dua Lipa</CardText>
                                    <Button className="sbtn ">Artist</Button>
                                </CardBody>
                                <Button className="playButton rounded-circle border-0 d-flex justify-content-center align-items-center p-2  mb-3 me-2 shadow">
                                    <BsFillPlayFill fill="black" size={30} />
                                </Button>
                            </Card>
                        </div>
                    </Col>

                    <Col className='col-8 songcol'>

                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-bold fs-4 text-white">Songs</h2>
                        </div>

                        {shuffleSongsList3.slice(0, 4).map((song, i) => (

                            <div key={i} className='m-0 ms-0 mt-2 d-flex table-roww p-2 align-items-center' >
                                <div className="col-9">
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
                                <div className="col-3 fs-6 text-center">3:57</div>
                            </div>
                        ))}

                    </Col>
                </Row>

            </Container>

            <Container fluid className="p-0 my-2 ms-3 mb-2 contd ">
                {renderSections("Featuring Dua Lipa", shuffleSongsList.slice(0, 4))}
            </Container>

            <Container fluid className="p-0 my-2 ms-3 contd my-3">
                <div className="d-flex justify-content-between align-items-end mt-4">
                    <h2 className="fw-bold fs-4 mt-3 text-white">Artists</h2>
                </div>

                <div className=" p-0 border-5 d-flex gap-4 mt-3">
                    {cardData.map((card) => (
                        <Card className="cardComp cardsssa border-0 rounded-3 gap-3" key={card.id}>
                            <div className="position-relative">
                                <img src={card.imageUrl} alt="..." className="imgg2 rounded-circle" />
                            </div>
                            <CardBody className="m-0 p-0">
                                <CardText className="m-0 fw-Semibold fs-4 cardtitle text-white mbody">{card.title}</CardText>
                                <CardText className="m-0 fs-6 text-secondary mbody">{card.subtitle}</CardText>
                            </CardBody>
                            <Button className="playButtons rounded-circle border-0 d-flex justify-content-center align-items-center p-2 mb-3 me-2 shadow">
                                <BsFillPlayFill fill="black" size={30} />
                            </Button>
                        </Card>
                    ))}
                </div>

            </Container>

            <Container fluid className="p-0 my-2  mb-2 contd">
                {renderSections("Playlists", shuffleSongsList1.slice(0, 7))}
            </Container>

            <Container fluid className="p-0 my-2 mt-3 mb-2 contd ">
                {renderSections("Podcasts", shuffleSongsList2.slice(0, 7))}
            </Container>
        </>


    )
}

export default index



const renderSections = (sectionTitle, songs) => {
    return (

        <div>
            <div className="d-flex justify-content-between align-items-end">
                <h2 className="fw-bold fs-4 text-white mt-3">{sectionTitle}</h2>
            </div>
            <div className="mt-3 cards gap-4 px-1">
                {songs.map((song, i) => (
                    <SongCard
                        key={i}
                        id={i}
                        imgSrc={song.imgTags}
                        title={song.title}
                        subtitle={song.artist}
                    />
                ))}
            </div>
        </div>
    )
};