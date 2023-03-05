import { useState, useEffect, createElement } from 'react';
import './Music2.css';

function Music2(props) {
    const { selectLan } = props;

    const music_list = [
        {
            img : './img/Stan.jpg',
            name : 'Stan Long',
            artist : 'Eminem ft Dido',
            music : './music/Stan.mp3'
        },
        {
            img : 'img/Criminal.jpg',
            name : 'Smooth Criminal',
            artist : 'Michael Jackson',
            music : './music/Criminal.mp3'
        },
        {
            img : 'img/SeeYouAgain.jpg',
            name : 'See You Again',
            artist : 'Wiz Khalifa ft Charlie Puth',
            music : 'music/SeeYouAgain.mp3'
        },
        {
            img : 'img/7Year.jpg',
            name : '7 Year',
            artist : 'Lukas Graham',
            music : 'music/7Year.mp3'
        }
    ];

    let background = document.querySelector('.Music2');
    let now_playing = document.querySelector('.now-playing');
    let track_art = document.querySelector('.track-art');
    let track_name = document.querySelector('.track-name');
    let track_artist = document.querySelector('.track-artist');

    let playpause_btn = document.querySelector('.playpause-track');
    let next_btn = document.querySelector('.next-track');
    let prev_btn = document.querySelector('.prev-track');

    let seek_slider = document.querySelector('.seek_slider');
    let volume_slider = document.querySelector('.volume_slider');
    let curr_time = document.querySelector('.current-time');
    let total_duration = document.querySelector('.total-duration');
    let wave = document.getElementById('wave');
    let randomIcon = document.querySelector('.fa-random');
    let curr_track = document.createElement('audio');

    let track_index = 0;
    let isPlaying = false;
    let isRandom = false;
    let updateTimer;

    const reset = () => {
        curr_time = document.querySelector('.current-time');
        curr_time.textContent = "00:00";
        total_duration.textContent = "00:00";
        seek_slider.value = 0;
    };
    
    const loadTrack = track_index => {
        clearInterval(updateTimer);
        reset();
        
        //curr_track.src = music_list[track_index].music;
        curr_track.src = "https://soundcloud.com/yotam-baruchyan/stan-eminem-ft-dido-cover";

        console.log(curr_track)
        curr_track.load();
    
        //track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
        track_art.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/e/e8/Eminem_-_Stan_CD_cover.jpg')";
        track_name.textContent = music_list[track_index].name;
        track_artist.textContent = music_list[track_index].artist;
        now_playing.textContent = "Música " + (track_index + 1) + " de " + music_list.length;
    
        updateTimer = setInterval(setUpdate, 1000);
    
        curr_track.addEventListener('ended', nextTrack);
        random_bg_color();
    };

    const random_bg_color = () => {
        let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    
        const populate = a => {
            for(let i=0; i<6; i++){
                let x = Math.round(Math.random() * 14);
                let y = hex[x];
                a += y;
            }
            return a;
        };

        let Color1 = populate('#');
        let Color2 = populate('#');
        let angle = 'to right';
    
        let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
        background.style.background = gradient;
    
    };

    const randomTrack = () => {
        isRandom ? pauseRandom() : playRandom();
    };

    const playRandom = () => {
        isRandom = true;
        randomIcon.classList.add('randomActive');
    };

    const pauseRandom = () => {
        isRandom = false;
        randomIcon.classList.remove('randomActive');
    };

    const repeatTrack = () => {
        let current_index = track_index;
        loadTrack(current_index);
        playTrack();
    };

    const playpauseTrack = () => {
        loadTrack(track_index);
        isPlaying ? pauseTrack() : playTrack();
    };

    const playTrack = () => {
        curr_track.play();
        isPlaying = true;
        track_art.classList.add('rotate');
        wave.classList.add('loader');
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    };

    const pauseTrack = () => {
        curr_track.pause();
        isPlaying = false;
        track_art.classList.remove('rotate');
        wave.classList.remove('loader');
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    };

    const nextTrack = () => {
        if(track_index < music_list.length - 1 && isRandom === false){
            track_index += 1;
        }
        else if(track_index < music_list.length - 1 && isRandom === true){
            let random_index = Number.parseInt(Math.random() * music_list.length);
            track_index = random_index;
        }
        else{
            track_index = 0;
        }

        loadTrack(track_index);
        playTrack();
    };
    
    const prevTrack = () => {
        if(track_index > 0){
            track_index -= 1;
        }else{
            track_index = music_list.length -1;
        }
        loadTrack(track_index);
        playTrack();
    };

    const seekTo = () => {
        let seekto = curr_track.duration * (seek_slider.value / 100);
        curr_track.currentTime = seekto;
    };

    const setVolume = () => {
        curr_track.volume = volume_slider.value / 100;
    };

    const setUpdate = () => {
        let seekPosition = 0;
        if(!isNaN(curr_track.duration)){
            seekPosition = curr_track.currentTime * (100 / curr_track.duration);
            seek_slider.value = seekPosition;
    
            let currentMinutes = Math.floor(curr_track.currentTime / 60);
            let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
            let durationMinutes = Math.floor(curr_track.duration / 60);
            let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
            if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
            if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
            if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
            if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    
            curr_time.textContent = currentMinutes + ":" + currentSeconds;
            total_duration.textContent = durationMinutes + ":" + durationMinutes;
        }
    };

    /*const hhh = () =>{
        loadTrack(track_index)
    }

    setTimeout(hhh, 1000);*/

    return (
        <div className="Music2">
            <div className="wrapper">
                <div className="details">
                    <div className="now-playing">Música X de Y</div>
                    <div className="track-art"></div>
                    <div className="track-name">Nombre de la canción</div>
                    <div className="track-artist">Nombre del artista</div>
                </div>

                <div className="slider_container">
                    <div className="current-time">00:00</div>
                    <input type="range" min="1" max="100" value="0" className="seek_slider" onChange={seekTo}/>
                        <div className="total-duration">00:00</div>
                </div>

                <div className="slider_container">
                    <i className="fa fa-volume-down"></i>
                    <input type="range" min="1" max="100" value="99" className="volume_slider" onChange={setVolume}/>
                        <i className="fa fa-volume-up"></i>
                </div>

                <div className="buttons">
                    <div className="random-track" onClick={randomTrack}>
                        <i className="fas fa-random fa-2x" title="random">r</i>
                    </div>
                    <div className="prev-track" onClick={prevTrack}>
                        <i className="fa fa-step-backward fa-2x">j</i>
                    </div>
                    <div className="playpause-track" onClick={playpauseTrack}>
                        <i className="fa fa-play-circle fa-5x">k</i>
                    </div>
                    <div className="next-track" onClick={nextTrack}>
                        <i className="fa fa-step-forward fa-2x">l</i>
                    </div>
                    <div className="repeat-track" onClick={repeatTrack}>
                        <i className="fa fa-repeat fa-2x" title="repeat">p</i>
                    </div>
                </div>

                <div id="wave">
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                    <span className="stroke"></span>
                </div>

            </div>
        </div>
    );
}

export default Music2;