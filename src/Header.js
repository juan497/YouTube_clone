//type rfce  its from a vs extension , es7.


import React from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon/>
            <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'/>
        </div>
        <div className='header__center'>
            <input placeholder="Search" type='text'/>
            <SearchIcon/>
        </div>

        <div className='header__right'>
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <AccountCircleIcon/>
        </div>
    </div>
  )
}

export default Header