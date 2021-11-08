import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

const Player = (props) => {
    return (
        <div className="c-player">
            <audio></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls /> 
            <p>Next up: <span><strong>{props.songs[props.nextSongIndex].title}</strong> by <strong>{props.songs[props.nextSongIndex].artist}</strong></span></p>
        </div>
    )
}

export default Player
