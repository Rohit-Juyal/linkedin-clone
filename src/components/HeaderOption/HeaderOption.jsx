import './headerOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

const HeaderOption = ({ onClick, avatar, Icon, title }) => {
  const user = useSelector(selectUser)

  return (
    <div onClick={onClick} className='headerOption'>
        {avatar && 
          <Avatar src={user?.photoUrl} className='headerOption__icon'>
            {user?.email[0]}
          </Avatar>
        }
        {Icon && <Icon className='headerOption__icon'/>}
        <h5 className='headerOption__title'>{title}</h5>
    </div>
  )
}

export default HeaderOption