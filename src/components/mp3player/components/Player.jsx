import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';
import {ThemeContext} from '../../../context';
import { useContext } from 'react';

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    useEffect(() => {
        if(isPlaying){
            audioEl.current.play()
        } else {
            audioEl.current.pause()
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div 
            className="c-player" 
            style={{
                backgroundColor: darkMode ? "#313131" : "#ddd", 
                opacity: props.toggle ? "0" : 1 , 
                transform: props.toggle ? "scale(0.7)" : "translateX(0)", 
                transition: props.toggle ? "opacity 500ms, transform 500ms" : "opacity 500ms, transform 500ms"
            }}
        >
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong} 
            />
            <p>Next up: <span><strong>{props.songs[props.nextSongIndex]?.title}</strong> by <strong>{props.songs[props.nextSongIndex]?.artist}</strong></span></p>
        </div>
    )
}

export default Player
