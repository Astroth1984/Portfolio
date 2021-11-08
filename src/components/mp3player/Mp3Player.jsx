import React from 'react';
import { useState } from 'react';
import Player from './components/Player';
import"./player.css";

const Mp3Player = () => {
    const [songs, setSongs] = useState([
        {
            title: "In This River",
            artist: "Black Label Society",
            img_src: "./images/song-1.jpg",
            src: "./music/in-this-river.mp3"
          },
          {
            title: "Nutshell",
            artist: "Alice In Chains",
            img_src: "./images/song-2.jpg",
            src: "./music/nutshell.mp3"
          },
          {
            title: "Song 3",
            artist: "Artist 3",
            img_src: "./images/song-2.jpg",
            src: "./music/in-this-river.mp3"
          },
          {
            title: "Song 4",
            artist: "Artist 4",
            img_src: "./images/song-1.jpg",
            src: "./music/nutshell.mp3"
          }
    ]);

    const [currentSongIndex, setcurrentSongIndex] = useState(0);
    const [nextSongIndex, setNexttSongIndex] = useState(currentSongIndex + 1);

    return (
        <div className="mp3-player">
            <Player 
              currentSongIndex={currentSongIndex} 
              nextSongIndex={nextSongIndex} 
              songs={songs} 
            />
        </div>
    )
}

export default Mp3Player
