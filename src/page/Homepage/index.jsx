import { Container } from "reactstrap";
import './homepage.css'
import HomeDashboardCard from "../../components/Card/homeDashboad";
import { user } from "../../recoil/recoilState"
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { shuffleArray, albumList, songsList } from "../../utils/songsAndAlbums";
import { renderAlbums, renderSongs } from "../../components/Card/RenderData";

const Home = () => {

    const loggedIn = useRecoilValue(user);

    // Shuffle the albumList array and select a desired number of random elements
    const shuffledAlbumList = shuffleArray(albumList);
    const shuffledAlbumList1 = shuffleArray(albumList);
    const shuffledAlbumList2 = shuffleArray(albumList);

    // Shuffle the songsList array and select a desired number of random elements
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
                                <Link key={i} to={`/album/${album.albumName}`} className="text-decoration-none" state={{ album }}>
                                    <HomeDashboardCard
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

                    <Container fluid className="p-0 my-4">
                        {renderSongs("Made For You", shuffleSongsList1.slice(0, 7))}
                    </Container>

                    <Container fluid className="p-0 my-3">
                        {renderSongs("Your Top Mixes", shuffleSongsList.slice(0, 7))}
                    </Container>

                    <Container fluid className="p-0 my-4">
                        {renderSongs("Recently Played", shuffleSongsLis2.slice(0, 7))}
                    </Container>

                </div>

                :
                (<div className="homePage px-4" >
                    {renderAlbums("Focus", shuffledAlbumList.slice(0, 7))}
                    {renderAlbums("Spotify's Playlists", shuffledAlbumList1.slice(0, 7).reverse())}
                    {renderAlbums("Focus", shuffledAlbumList2.slice(0, 7))}
                </div>
                )}
        </>
    );
};

export default Home;
