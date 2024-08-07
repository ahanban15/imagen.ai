import React from 'react'
import { Link } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import {Auth} from "../firebase-config"
import { signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-color.png';
const Navbar = () => {
  const [user] = useAuthState(Auth)
  const navigator = useNavigate()
  const logOut = async () => {
    await signOut(Auth)
    navigator("/")
  }
  return (
    <header>
        <img className='rounded-lg' src={logo} alt="Logo" height='200' width='200'/>

        <div className="menu text-base font-medium text-gray-500 hover:text-gray-900">
            <Link className='link text-center' to="/">Home</Link>
            <Link className='link text-center' to={"/generate"}>Generate</Link>
            {user? <div className='link'><div className='d-flex'><img className='logo' src={user.photoURL} alt="" />  <button onClick={logOut}><LogoutIcon/></button></div></div>
            : <Link className='link' to={"/login"}>Login</Link>
            }
        </div>
    </header>
  )
}

export default Navbar