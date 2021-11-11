import React from 'react';
import { useState, useEffect } from 'react';
import { useTransition } from 'react-transition-state';
import Player from './components/Player';
import ToggleLoader from './components/ToggleLoader';
import"./player.css";

const Mp3Player = () => {
    const [songs] = useState([
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

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNexttSongIndex] = useState(currentSongIndex + 1);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() =>{
      setNexttSongIndex(() => {
        if(currentSongIndex + 1 > songs.length){
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      }); 
    }, [currentSongIndex])

    return (
        <div className="mp3-player">
            <Player 
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex} 
              nextSongIndex={nextSongIndex} 
              songs={songs}
              toggle={toggle}
            />
            
            <ToggleLoader handleToggle={handleToggle} songs={songs} currentSongIndex={currentSongIndex} />
        </div>

    )
}

export default Mp3Player
