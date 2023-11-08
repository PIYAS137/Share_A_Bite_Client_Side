import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png'
import { FaFacebookSquare,FaTwitter,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer p-10 dark:bg-gray-800 dark:text-white bg-green-200 text-base-content mt-20 rounded-t-xl">
      <aside>
        <Link to={'/'}><img className=' w-12' src={Logo} alt="" /></Link>
        <p className='font-bold'><span className=' text-xl'>Share A Bite </span><br />We are since 2023 <br />Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <header className="footer-title">Contact</header>
        <a className="link link-hover flex items-center gap-2"><FaFacebookSquare/> Facebook</a>
        <a className="link link-hover flex items-center gap-2"><FaTwitter/> Twitter</a>
        <a className="link link-hover flex items-center gap-2"><FaInstagram/> Instagram</a>
      </nav>
    </footer>
  )
}

export default Footer