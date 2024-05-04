import React from 'react'
import './fixednav.css'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import logo from '../fixednavbar/assets/NewLogoPng.png';
import { Link } from 'react-router-dom';

export default function FixedNav({selectedPage}) {
  return (
    <nav className='navbar_con'>
        <Link to={"/"} href="#" className='Logo'>
            <img className='logoImage' src={logo} alt="Logo Image" />
        </Link>
        <ul className="navPages">
            <li className={`navPage ${selectedPage == 'Home' ? 'active' : null}`}><Link to={"/Home"} href="">Home</Link></li>
            <li className={`navPage ${selectedPage == 'packages' ? 'active' : null}`}><Link to={"/packagegridview"} href="">Packages</Link></li>
            <li className={`navPage ${selectedPage == 'offers' ? 'active' : null}`}><Link to={"/viewoffer"}>Offers</Link></li>
            <li className={`navPage ${selectedPage == 'dayTour' ? 'active' : null}`}><Link to={"/onedaytour"} href="">Day Tours</Link></li>
            <li className={`navPage ${selectedPage == 'more' ? 'active' : null}`}><Link>More</Link></li>
            {/* <li className="navPage shopping"><a href=""><ShoppingCartRoundedIcon sx={{ fontSize: 20 }}/></a></li> */}
            <li className="navPage shopping"><a href=""><AccountCircleOutlinedIcon sx={{ fontSize: 30 }}/></a></li>
        </ul>
      </nav>
  )
}
