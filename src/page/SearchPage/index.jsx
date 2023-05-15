import { Container } from "reactstrap";
import SongCard from "../../components/Card/SongCard";
import "./songcard.css"
import { shuffleArray, albumList } from "../../utils/songsAndAlbums";

const SearchPage = () => {

    // Shuffle the albumList array and select a desired number of random elements
    const shuffledAlbumList = shuffleArray(albumList);

    return (
        <div className="homePage px-4">
            <Container fluid className="p-0 my-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold fs-4 text-white mt-4">Browse all</h2>

                </div>
                <div className="mt-3 cards gap-5 px-1">

                    {Array.from({ length: 3 }, () => (
                        shuffledAlbumList.slice(0, 9).map((album, index) => (
                            <SongCard
                                key={index}
                                id={index}
                                imgSrc={album.coverImage}
                                title={album.albumName}
                                subtitle={album.artists}
                            />
                        ))
                    ))}

                </div>
            </Container>
        </div>
    );
};

export default SearchPage;