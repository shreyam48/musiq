import React from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"


const Sidebar = () => {

    return (
        <div class='sidenav'>
            <div className='user'>
                <div className='user-icon'>
                    <FaUserCircle />
                </div>
                <span id='user-name'>Shreya</span>
            </div>
            <div className='center'>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span className='icon'>{item.icon}</span>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}

            </div>
        </div >
    )
}



export default Sidebar