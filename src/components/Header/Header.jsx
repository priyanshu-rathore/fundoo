import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="left-nav">
            <div className="menu">
                <MenuIcon className='icon'/>
            </div>
                <div className="brand-logo">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
                </div>
                <div className="brand-text">
                    <p>Fundoo</p>
                </div>
            <div className="search-bar">
                <SearchOutlinedIcon className='search-icon icon'/>
                <input type="search" placeholder='Search' />
            </div>
        </div>
        <div className="right-nav">
            <div className="refresh">
            <RefreshOutlinedIcon className='icon'/>
            </div>
            <div className="list-view">
                <ViewStreamOutlinedIcon className='icon' />
            </div>
            <div className="settings">
                <SettingsOutlinedIcon className='icon' />
            </div>
            <div className="google-apps">
                <AppsOutlinedIcon className='icon'/>
            </div>
            <div className="profile">
                <img src="https://www.pngarts.com/files/11/Avatar-Transparent-Image.png" alt="" />
            </div>

        </div>
    </div>
    </>
  )
}

export default Header