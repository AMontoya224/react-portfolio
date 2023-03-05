import { useState, useEffect } from 'react';
import Player from '../../components/Player/Player';
import './Music.css';

function Music() {
    const [songs] = useState([
        {
            title: "Forget me too ft. Halsey",
            artist: "Machine Gun Kelly",
            img_src: "./img/7Year.jpg",
            src: "./music/7Year.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            img_src: "./img/Criminal.jpg",
            src: "./music/Criminal.mp3"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            img_src: "./img/SeeYouAgain.jpg",
            src: "./music/SeeYouAgain.mp3"
        },
        {
            title: "Song 4",
            artist: "Artist 4",
            img_src: "./img/Stan.jpg",
            src: "./music/Stan.mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    return (
        <div className="Music">
            <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
        </div>
    );
}

export default Music;