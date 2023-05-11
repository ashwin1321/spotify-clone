import fs from 'fs';
import NodeID3 from 'node-id3';

// Specify the directory where your songs are located
const songsDirectory = '~/Music';

// Read the directory contents
fs.readdir(songsDirectory, async (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Iterate over each file and extract metadata
    for (const file of files) {
        if (file.endsWith('.mp3')) { // Adjust the file extension if your songs are in a different format
            const songPath = `${songsDirectory}/${file}`;

            try {
                const tags = NodeID3.read(songPath);

                // Extract desired metadata
                const title = tags.title || 'Unknown Title';
                const artist = tags.artist || 'Unknown Artist';
                const album = tags.album || 'Unknown Album';
                const duration = tags.duration;

                // Extract image data
                let imageData = null;
                if (tags.image && tags.image.imageBuffer) {
                    const { imageBuffer, mime } = tags.image;
                    imageData = `data:${mime};base64,${imageBuffer.toString('base64')}`;
                }

                // Print or process the extracted metadata and image
                console.log('Title:', title);
                console.log('Artist:', artist);
                console.log('Album:', album);
                console.log('Duration:', duration, 'seconds');
                console.log('Image Data:', imageData);
                console.log('--------------');
            } catch (err) {
                console.error('Error processing', songPath, ':', err.message);
            }
        }
    }
});

