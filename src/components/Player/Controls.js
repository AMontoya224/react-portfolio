import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'


function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                {/*<FontAwesomeIcon icon={faBackward} />*/}
                <span class="material-icons-round">skip_previous</span>     
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {/*<FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />*/}
                <span class="material-icons-round">play_arrow</span>
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                {/*<FontAwesomeIcon icon={faForward} />*/}
                <span class="material-icons-round">skip_next</span>
            </button>
        </div>
    )
}

export default Controls