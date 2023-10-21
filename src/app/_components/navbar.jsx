import Link from 'next/link'
import './nav.css'
import styles from './nav.css'
export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <nav className="navbar" >
            <link rel="stylesheet" href="./nav.css" />

            {/* poner la image del logo */}
            <div className="branding">
                <div href="/" className="imgFluid">
                    <img src="/logoHacktx.png" width="100%"/>
                    <h1 className="imageTitle">RoboSim</h1>
                </div>
            
            </div>
            
            
            <ul>
            <li><Link href="/" className="navItem">Home</Link></li>
            <li><Link href="/login" className="navItem">Log In</Link></li>
            </ul>
            </nav>
        </div>
       
    )
}