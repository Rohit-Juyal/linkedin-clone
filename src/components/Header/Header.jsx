import { Home, HomeRepairService, LinkedIn, Message, Notifications, Search, SupervisorAccount } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../Firebase'
import HeaderOption from '../HeaderOption/HeaderOption'
import './header.css'

const Header = () => {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
        <div className="header__left">
            <LinkedIn sx={{color: '#0072b1', fontSize: 50}} />
            <div className="header__search">
                <Search />
                <input type='text' />
            </div>
        </div>
        <div className="header__right">
             <HeaderOption Icon={Home} title="Home" />
             <HeaderOption Icon={SupervisorAccount} title="My Network" />
             <HeaderOption Icon={HomeRepairService} title="Jobs" />
             <HeaderOption Icon={Message} title="Messages" />
             <HeaderOption Icon={Notifications} title="Notifications" />
             <HeaderOption avatar={true} onClick={logoutOfApp}  title="Me"/>
        </div>
    </div>
  )
}

export default Header