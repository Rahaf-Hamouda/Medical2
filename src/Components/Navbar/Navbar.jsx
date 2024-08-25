 import './Navbar.css';
import menu from '../../assets/menu1.svg'
import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);

    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <div className="navbarMenu">
                    <Link className="list" activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                    <Link className="list" activeClass="active" to="Services" spy={true} smooth={true} offset={-50} duration={500}>Services</Link>
                    <Link className="list" activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} >Docotors</Link>
                    <Link className="list" activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} >Contact Us</Link>
                </div>
               
                <img src={menu} alt="MobMenu" className="MobMenu" onClick={() => setshowMenu(!showMenu)} />
                <div className="navmenuMob" style={{ display: showMenu ? 'flex' : 'none' }}>
                    <Link className="listItemMob" activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(!false)}>Home</Link>
                    <Link className="listItemMob" activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setshowMenu(!false)}>About</Link>
                    <Link className="listItemMob" activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}  onClick={()=>setshowMenu(!false)}>Portfolio</Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar;