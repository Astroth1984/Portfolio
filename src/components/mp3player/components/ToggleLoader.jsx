import React from 'react';
import { useState } from 'react';

const ToggleLoader = (props) => {

    // const [toggle, setToggle] = useState(false);

    return (
        
        <div className="player">
	        <div id="control-panel" className="control-panel">
		        <div className="album-art" onClick={props.handleToggle}>
                    <img src={props.songs[props.currentSongIndex].img_src} alt="" />
                </div>
	        </div>
        </div>
       
    )
}

export default ToggleLoader
