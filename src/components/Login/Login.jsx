import { LinkedIn } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../../Firebase';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    })
                )
                
            })
            .catch((error) => alert(error))
    }

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })
            })
            .catch(error => alert(error))
    }

  return (
    <div className='login'>
        <h1>Linked<LinkedIn sx={{ color: '#0072b1', fontSize: 90}} /></h1>

        <form>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
                type="text" 
                placeholder='Full name (required if registering)' 
            />

            <input 
                value={profilePic}
                onChange={e => setProfilePic(e.target.value)}
                type="text" 
                placeholder='Profile pic URL (optional )'
            />

            <input
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                type="email" 
                placeholder='Email' 
            />

            <input 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" placeholder='passwod'
            />

            <button onClick={loginToApp}>Sign In</button>
        </form>

        <p>
            Not a member?
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login