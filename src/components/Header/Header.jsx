import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { connect } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Header = ({setDisplayNav,displayNav,title}) => {
    const logOut = () => {
        localStorage.removeItem("token")
    }

    const refresh = () => {
        window.location.reload(true)
    }

  return (
    <>
    <div className="header">
        <div className="left-nav">
            <div className="menu" onClick={()=>setDisplayNav(!displayNav)}>
                <MenuIcon className='icon'/>
            </div>
                <div className="brand-logo">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
                </div>
                <div className="brand-text">
                    <p>{title}</p>
                </div>
            <div className="search-bar">
                <SearchOutlinedIcon className='search-icon icon'/>
                <input type="search" placeholder='Search' />
            </div>
        </div>
        <div className="right-nav">
            <div className="refresh">
            <RefreshOutlinedIcon onClick={refresh} className='icon'/>
            </div>
            <div className="list-view">
                <ViewStreamOutlinedIcon className='icon' />
            </div>
            <div className="settings">
                <SettingsOutlinedIcon className='icon' />
            </div>
            <div className="google-apps">
              <Link to="/" onClick={logOut}><LogoutIcon  className='icon' /></Link>
            </div>
            <div className="profile">
                <img src="https://www.pngarts.com/files/11/Avatar-Transparent-Image.png" alt="" />
            </div>

        </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        title:state.navReducer.title
    }
}

export default  connect(mapStateToProps)(Header)