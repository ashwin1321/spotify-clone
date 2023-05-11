import { Container } from "reactstrap";
import SongCard from "../../components/Card/SongCard";
import { albums, songs } from "../../assets/data/spotify";
import './homepage.css'
import HomeDashboardCard from "../../components/Card/homeDashboad";
import { user } from "../../recoil/recoilState"
import { useRecoilValue } from "recoil";

const Home = () => {

    const loggedIn = useRecoilValue(user);

    const albumList = albums.items.map((album) => {
        const albumName = album.name;
        const artists = album.artists.map((artist) => artist.name).join(", ");
        const releaseDate = album.release_date;
        const coverImage = album.images[0].url;
        const albumUrl = album.external_urls.spotify;

        return { albumName, artists, releaseDate, coverImage, albumUrl };
    });

    function shuffleArray(array) {
        const shuffledArray = [...array]; // Make a copy of the original array

        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }
    // Shuffle the albumList array and select a desired number of random elements
    const shuffledAlbumList = shuffleArray(albumList);
    const shuffledAlbumList1 = shuffleArray(albumList);
    const shuffledAlbumList2 = shuffleArray(albumList);


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
    const shuffleSongsLis2 = shuffleArray(songsList);

    return (
        <>
            {loggedIn ?
                <div className="homePage px-4">


                    <Container fluid className="p-0 my-4 ">
                        <div className="d-flex justify-content-between align-items-end">
                            <h2 className="fw-bold fs-3 text-white">Good Afternoon</h2>
                        </div>

                        <div className="mt-4 cardLog gap-4 ">
                            {albumList.slice(0, 6).map((album, i) => (
                                <HomeDashboardCard
                                    key={i}
                                    id={i}
                                    imgSrc={album.coverImage}
                                    title={album.albumName}
                                    subtitle={album.artists}
                                />
                            ))}
                        </div>
                    </Container>

                    <Container fluid className="p-0 my-4">
                        {renderAfterLogin("Made For You", shuffleSongsList1.slice(0, 7))}
                    </Container>

                    <Container fluid className="p-0 my-3">
                        {renderAfterLogin("Your Top Mixes", shuffleSongsList.slice(0, 7))}
                    </Container>

                    <Container fluid className="p-0 my-4">
                        {renderAfterLogin("Recently Played", shuffleSongsLis2.slice(0, 7))}
                    </Container>

                </div>

                :
                (<div className="homePage px-4" >
                    {renderdefaultHome("Focus", shuffledAlbumList.slice(0, 7))}
                    {renderdefaultHome("Spotify's Playlists", shuffledAlbumList1.slice(0, 7).reverse())}
                    {renderdefaultHome("Focus", shuffledAlbumList2.slice(0, 7))}
                </div>
                )}
        </>
    );
};

export default Home;


const renderdefaultHome = (sectionTitle, albums) => (
    <Container fluid className="p-0 my-4">
        <div className="d-flex justify-content-between align-items-end">
            <h2 className="fw-bold fs-3 text-white mt-3">{sectionTitle}</h2>
            <a
                href="#"
                className="text-decoration-none text-white fw-bold me-4"
                style={{
                    fontSize: "0.8rem",
                }}
            >
                Show all
            </a>
        </div>
        <div className="mt-3 cards gap-4 px-1">
            {albums.map((album, i) => (
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
);

const renderAfterLogin = (sectionTitle, songs) => (
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

{/* <Container fluid className="p-0 my-4">
<div className="d-flex justify-content-between align-items-end">
    <h2 className="fw-bold fs-3 text-white mt-3">Focus</h2>
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
    {shuffledAlbumList.slice(0, 7).map((album, i) => (
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

<Container fluid className="p-0 my-4">
<div className="d-flex justify-content-between align-items-end">
    <h2 className="fw-bold fs-3 text-white mt-4">Spotify's Playlists</h2>
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
<div className="mt-3 cards gap-5 px-1">
    {shuffledAlbumList.slice(0, 7).reverse().map((album, i) => (
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

<Container fluid className="p-0 my-4">
<div className="d-flex justify-content-between align-items-end">
    <h2 className="fw-bold fs-3 text-white mt-3">Focus</h2>
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
    {albumList.slice(0, 7).map((album, i) => (
        <SongCard
            key={i}
            id={i}
            imgSrc={album.coverImage}
            title={album.albumName}
            subtitle={album.artists}

        />
    ))}
</div>
</Container> */}