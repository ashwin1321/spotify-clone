import React from 'react'
import "./logSearch.css"
import { Button, Col, Container, Row } from 'react-bootstrap'

const index = () => {
    return (
        <Container fluid className=" mt-2  ">
            <div>
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
            </div>

        </Container>



    )
}

export default index