import Link from 'next/link'
import './nav.css'
export default function Navbar() {
    return (
        <nav className="navbar">
        {/* poner la image del logo */}
        <div className="branding">
          <div className="imgFluid">
            <img src="/logoHacktx.png" width="100%"/>
            <h1 className="imageTitle">RoboSim</h1>
          </div>
        </div>
        
        <ul>
          <li><Link href="/" className="navItem">Home</Link></li>
          <li><Link href="/login" className="navItem">Log In</Link></li>
        </ul>
      </nav>
    )
}