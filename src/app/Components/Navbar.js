
import './Navbar.css'
import './Downloadbtn'
import logo from '../doodle.png'
import Link from 'next/link';
import DownloadButton from './Downloadbtn';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logoContainer'>
        <Image src={logo} alt="Logo" className='logo' />
      </div>
      <ul className='navList'>
        <li className='navItem'>
          <Link href="/">Emotions</Link>
        </li>
        <li className='navItem'>
          <Link href="/manifest">Manifesto</Link>
        </li>
        <li className='navItem'>
          <Link href="/self">Self-awarness test</Link>
        </li>
        <li className='navItem'>
          <Link href="/work">Work With Us</Link>
        </li>
      </ul>
      <DownloadButton/>
    </nav>
  );
};

export default Navbar;
