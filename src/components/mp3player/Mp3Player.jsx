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
            title: "Hunger",
            artist: "Temple Of Dog",
            img_src: "./images/song-3.jpg",
            src: "./music/ihunger-strike.mp3"
          },
          {
            title: "Slip Away",
            artist: "Mad Season",
            img_src: "./images/song-4.jpg",
            src: "./music/slip-away.mp3"
          },
          {
            title: "Society",
            artist: "Eddie Vedder",
            img_src: "./images/song-5.jpg",
            src: "./music/society.mp3"
          },
          {
            title: "The Gift",
            artist: "Seether",
            img_src: "./images/song-6.jpg",
            src: "./music/the-gift.mp3"
          },
          {
            title: "Falls Apart",
            artist: "Hurt",
            img_src: "./images/song-7.jpg",
            src: "./music/falls-apart.mp3"
          },
          {
            title: "To Remind You",
            artist: "Staind",
            img_src: "./images/song-8.jpg",
            src: "./music/remind.mp3"
          },
          {
            title: "J'accuse",
            artist: "Damien Saez",
            img_src: "./images/song-9.jpg",
            src: "./music/jaccuse.mp3"
          },
          {
            title: "Rock Out",
            artist: "Motorhead",
            img_src: "./images/song-10.jpg",
            src: "./music/rock-out.mp3"
          }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNexttSongIndex] = useState(currentSongIndex + 1);
    const [toggle, setToggle] = useState(true);

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
