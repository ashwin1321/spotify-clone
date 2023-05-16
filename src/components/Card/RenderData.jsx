import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import SongCard from "./SongCard.jsx";


export const renderAlbums = (sectionTitle, albums) => {
    return (


        <Container fluid className="p-0 my-4">
            <div className="d-flex justify-content-between align-items-end">
                <h2 className="fw-bold fs-3 text-white mt-3">{sectionTitle}</h2>
                <div
                    className={`text-decoration-none  text-white fw-bold me-4`}
                    style={{
                        fontSize: "0.8rem",
                    }}
                >
                    Show all
                </div>
            </div>

            <div className="mt-3 cards gap-4 px-1 ">
                {albums.map((album, i) => (
                    <Link key={i} to={`/album/${album.albumName}`} className="text-decoration-none" state={{ album }}>
                        <SongCard
                            key={i}
                            id={i}
                            imgSrc={album.coverImage}
                            title={album.albumName}
                            subtitle={album.artists}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    )
};


export
    const renderSongs = (sectionTitle, songs) => (
        <div>
            <div className="d-flex justify-content-between align-items-end">
                <h2 className="fw-bold fs-3 text-white mt-3">{sectionTitle}</h2>
                <a
                    href="#"
                    className="text-decoration-none text-white fw-bold"
                    style={{
                        fontSize: "0.8rem",
                    }}
                >
                    Show all
                </a>
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
    );