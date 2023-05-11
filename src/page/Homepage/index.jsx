import {
    Button,
    Card,
    CardBody,
    CardText,
    Col,
    Container,
    Row,
} from "reactstrap";
import SongCard from "../../components/Card/SongCard";

const Home = () => {
    return (
        <div className="homePage px-4">
            <Container fluid className="p-0 my-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold fs-3  mt-3">Focus</h2>
                    <a
                        href="#"
                        className="text-decoration-none text-white fw-bold"
                        style={{
                            fontSize: "0.8rem",
                        }}
                    >
                        SHOW ALL
                    </a>
                </div>
                <div className="mt-3 cards gap-5 px-1">
                    {Array(6)
                        .fill(0)
                        .map((_, i) => (
                            <SongCard
                                key={i}
                                id={i}
                                imgSrc={"https://picsum.photos/200/200"}
                                title={"Peaceful Piano"}
                                subtitle={"Relax and indulge with beautiful piano pieces"}
                            />
                        ))}
                </div>
            </Container>
            <Container fluid className="p-0 my-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold fs-3  mt-4">Spotify's Playlists</h2>
                    <a
                        href="#"
                        className="text-decoration-none text-white fw-bold"
                        style={{
                            fontSize: "0.8rem",
                        }}
                    >
                        SHOW ALL
                    </a>
                </div>
                <div className="mt-3 cards gap-5 px-1">
                    {Array(6)
                        .fill(0)
                        .map((_, i) => (
                            <SongCard
                                key={i}
                                id={i}
                                imgSrc={"https://picsum.photos/200/200"}
                                title={"Chill Hits"}
                                subtitle={"Kick back to the best new and recent chill tunes."}
                            />
                        ))}
                </div>
            </Container>
        </div>
    );
};

export default Home;