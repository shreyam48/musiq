import React from 'react'
import Sidebar from './MusicPlayer/Sidebar/Sidebar'
import PlayList from './MusicPlayer/Playbar/PlayList'
import './Layout.css'



const MusicPlayer = () => (
    <div className="container-fluid h-100 ">

        <div className="row h-100">
            <div className="col-2" style={{ padding: 0 }}>
                <div className="sticky-top">
                    <Sidebar />
                </div>
            </div>
            <PlayList />
        </div>
    </div >
)

export default MusicPlayer