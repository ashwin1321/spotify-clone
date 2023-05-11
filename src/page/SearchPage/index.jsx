import {
    Container,
} from "reactstrap";
import SongCard from "../../components/Card/SongCard";
import "./songcard.css"
import { albums } from "../../assets/data/spotify";

const SearchPage = () => {

    const albumList = albums.items.map((album) => {
        const albumName = album.name;
        const artists = album.artists.map((artist) => artist.name).join(", ");
        const releaseDate = album.release_date;
        const coverImage = album.images[0].url;
        const albumUrl = album.external_urls.spotify;

        return { albumName, artists, releaseDate, coverImage, albumUrl };
    });

    console.log(albumList);

    return (
        <div className="homePage px-4">

            <Container fluid className="p-0 my-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold fs-3  mt-4">Albums</h2>
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
                    {albumList.map((album, i) => (
                        <SongCard
                            key={i}
                            id={i}
                            imgSrc={album.coverImage}
                            title={album.albumName}
                            subtitle={album.artists}
                        />
                    ))}
                    {albumList.map((album, i) => (
                        <SongCard
                            key={i}
                            id={i}
                            imgSrc={album.coverImage}
                            title={album.albumName}
                            subtitle={album.artists}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default SearchPage;