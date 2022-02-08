import React from 'react'
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
    {
        title: 'Home',
        path: '/musicplayer',
        icon: <MdIcons.MdHome />,
        cName: 'nav-text',
    },
    {
        title: 'Discover',
        path: '#',
        icon: <RiIcons.RiCompassDiscoverFill />,
        cName: 'nav-text'
    },
    {
        title: 'Your Library',
        path: '#',
        icon: <MdIcons.MdLocalLibrary />,
        cName: 'nav-text'
    },

    {
        title: 'Create Playlist',
        path: '#',
        icon: < MdIcons.MdPlaylistAdd />,
        cName: 'nav-text',
    },
    {
        title: 'Liked Songs',
        path: '#',
        icon: < RiIcons.RiHeartsFill />,
        cName: 'nav-text'
    }
];
