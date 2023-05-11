import {
    Container,
} from "reactstrap";
import SongCard from "../../components/Card/SongCard";
import "./songcard.css"
import { albums, songs } from "../../assets/data/spotify";

const SearchPage = () => {

    const albumList = albums.items.map((album) => {
        const albumName = album.name;
        const artists = album.artists.map((artist) => artist.name).join(", ");
        const releaseDate = album.release_date;
        const coverImage = album.images[0].url;
        const albumUrl = album.external_urls.spotify;

        return { albumName, artists, releaseDate, coverImage, albumUrl };
    });

    // Shuffle array function (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle the albumList array and select a desired number of random elements
    const shuffledAlbumList = shuffleArray(albumList);



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


    return (
        <div className="homePage px-4">
            <Container fluid className="p-0 my-4">
                <div className="d-flex justify-content-between align-items-end">
                    <h2 className="fw-bold fs-4 text-white mt-4">Browse all</h2>

                </div>
                <div className="mt-3 cards gap-5 px-1">

                    {Array.from({ length: 3 }, () => (
                        shuffledAlbumList.map((album, index) => (
                            <SongCard
                                key={index}
                                id={index}
                                imgSrc={album.coverImage}
                                title={album.albumName}
                                subtitle={album.artists}
                            />
                        ))
                    ))}
                    {/* {songsList.map((song, i) => (
                        <SongCard

                            key={i}
                            id={i}
                            imgSrc={song.imgTags}
                            title={song.title}
                            subtitle={song.artist}
                        />
                    ))} */}


                </div>
            </Container>
        </div>
    );
};

export default SearchPage;