import React, { Component } from 'react'
import './Playbar.css';
import './Content.css';
import { artistList } from '../Artist/artistData'
import { IoPlaySkipBack, IoPlaySkipForward, IoPlayCircle, IoPauseCircle } from 'react-icons/io5'
import Topbar from '../Topbar/Topbar'
import { Link } from "react-router-dom"





class PlayList extends Component {
    state = {
        index: 3,
        currentTime: '0:00',
        musicList: [
            {
                name: 'Nice piano and ukulele',
                author: 'Royalty',
                img: "./musicimages/music1.jpg",
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '2:02',
                cName: 'track',
            },
            {
                name: 'Gentle acoustic',
                author: 'Acoustic',
                img: './musicimages/music2.jpg',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:20',
                cName: 'track',
            },
            {
                name: 'Corporate motivational',
                author: 'Corporate',
                img: './musicimages/music3.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-energy.mp3',
                duration: '2:59',
                cName: 'track',
            },
            {
                name: 'Slow cinematic',
                author: 'Royalty',
                img: 'https://www.bensound.com/bensound-img/slowmotion.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3',
                duration: '3:26',
                cName: 'track',
            },
            {
                name: 'Morning memories',
                author: 'DJ-M',
                img: './musicimages/music4.jpg',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02',
                cName: 'track',
            },
            {
                name: 'Pop Music',
                author: 'one-d',
                img: './musicimages/music5.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-energy.mp3',
                duration: '2:02',
                cName: 'track',
            },
            {
                name: 'Sound Of River',
                author: 'G-Band',
                img: './musicimages/music6.png',
                audio: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3',
                duration: '2:02',
                cName: 'track',
            },
            {
                name: 'Serenity',
                author: 'Swift',
                img: './musicimages/music9.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '2:02',
                cName: 'track',
            },
            {
                name: 'Melody',
                author: 'Grande',
                img: './musicimages/music10.jpg',
                audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
                duration: '2:02',
                cName: 'track',
            },
        ],
        pause: false,
        speed: 4,
    };



    updatePlayer = () => {
        const { musicList, index } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        this.playerRef.load();
    }

    nextSong = () => {
        const { musicList, index, pause } = this.state;
        this.setState({
            index: (index + 1) % musicList.length
        });
        this.updatePlayer();
        if (pause) {
            this.playerRef.play();
        }
    };

    prevSong = () => {
        const { musicList, index, pause } = this.state;

        this.setState({
            index: (index + musicList.length - 1) % musicList.length
        });
        this.updatePlayer();
        if (pause) {
            this.playerRef.play();
        }
    };


    playOrPause = () => {
        const { musicList, index, pause } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        if (!this.state.pause) {
            this.playerRef.play();

        } else {
            this.playerRef.pause();
        }
        this.setState({
            pause: !pause,
        })
    }

    clickAudio = (key = 3) => {
        const { pause } = this.state;

        this.setState({
            index: key,
        });

        this.updatePlayer();
        if (pause) {
            this.playerRef.play();
        }
    }


    render() {
        const { musicList, index, pause } = this.state;
        const currentSong = musicList[index];
        return (
            <>
                <div className="col-10 h-100 play-nav" style={{ padding: 0 }}>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <Topbar />
                    </nav>

                    <div className="content">
                        <h2 className="heading">Recently Played</h2>
                        <div className="play-list" >
                            {musicList.map((music, key = 0) =>
                                <div key={key}
                                    onClick={() => this.clickAudio(key)}
                                    className="track">
                                    <div className="center-img">
                                        <img className="track-img" src={music.img} alt="song-img" />
                                    </div>
                                    <div className="track-discr" >
                                        <span className="track-name" >{music.name}</span>
                                        <span className="track-author" >{music.author}</span>
                                    </div>
                                    <span className="track-duration" >
                                        {music.duration}
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="row">

                            {/* ARTIST */}
                            <div className="col-6">
                                <h2 className="heading">Artist</h2>
                                <div className="artist-list" >
                                    {artistList.map((artist, key = 0) =>
                                        <div key={key}
                                            className="a-track">
                                            <Link to="/artist-details" style={{ textDecoration: 'none', color: 'white' }}>
                                                <div className="center-img">
                                                    <img className="artist-img" src={artist.img} alt="artist-img" />
                                                    <span className="artist-name" >{artist.name}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* TOP SONGS */}
                            <div className="col-6">
                                <h2 className="heading">Top Songs</h2>
                                <div className="artist-list" >
                                    {musicList.slice(2, 6).map((music, key) =>
                                        <div key={key}
                                            onClick={() => this.clickAudio(key)}
                                            className="a-track">
                                            <div className="center-img">
                                                <img className="track-img" src={music.img} alt="song-img" />
                                            </div>
                                            <div className="track-discr" >
                                                <span className="track-name" >{music.name}</span>
                                                <span className="track-author" >{music.author}</span>
                                            </div>
                                            <span className="track-duration" >
                                                {music.duration}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* playbar */}
                <div className="fixed-bottom">
                    <div className="playbar" >
                        <audio ref={ref => this.playerRef = ref}>
                            <source src={currentSong.audio} type="audio/ogg" />
                    Your browser does not support the audio element.
                 </audio>
                        <div className="col-2">
                            <div className="player-img">
                                <img src={currentSong.img} alt='currently playing'
                                    className={"current-img"}
                                    style={{
                                        animation: `spin ${this.state.speed}s linear infinite`
                                    }}
                                />
                            </div>

                            <span className="song-name">{currentSong.name}</span>
                            <span id="singer-name">{currentSong.author}</span>

                        </div>

                        <div className="col-10 d-flex justify-content-center" >

                            <div className="controls">
                                <button onClick={this.prevSong} className="prev prev-next current-btn"><IoPlaySkipBack /></button>

                                <button onClick={this.playOrPause} className="play">
                                    {
                                        (!pause) ? <IoPlayCircle className="play-pause" />
                                            : <IoPauseCircle className="play-pause" />
                                    }
                                </button>
                                <button onClick={this.nextSong} className="next prev-next current-btn"><IoPlaySkipForward /></button>
                            </div>
                        </div>

                    </div >
                </div>
            </>
        )
    }
}

export default PlayList