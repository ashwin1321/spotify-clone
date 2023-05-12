import React from 'react'
import "./logSearch.css"
import { Button } from 'react-bootstrap'
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap'
import SearchPage from '../SearchPage'
import { BsFillPlayFill } from "react-icons/bs";

const index = () => {
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
                            <Card className="cardComp cardsss border-0 rounded-3 gap-3  ">
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
                    <Col className='col-8'>

                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-bold fs-4 text-white">Songs</h2>
                        </div>
                    </Col>
                </Row>

            </Container>

            <SearchPage />
        </>


    )
}

export default index