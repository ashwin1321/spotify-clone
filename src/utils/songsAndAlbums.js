import { albums, songs } from "../config/data/spotify";


export function shuffleArray(array) {
    const shuffledArray = [...array]; // Make a copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export const albumList = albums.items.map((album) => {
    const albumName = album.name;
    const artists = album.artists.map((artist) => artist.name).join(", ");
    const releaseDate = album.release_date;
    const coverImage = album.images[0].url;
    const albumUrl = album.external_urls.spotify;

    return { albumName, artists, releaseDate, coverImage, albumUrl };
});


export const songsList = songs.song.map(song => {
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