import Link from 'next/link'
import './nav.css'
export default function Home() {
  return (
    <>
      <nav class="navbar">
        {/* poner la image del logo */}
        <div class="branding">
          <div class="imgFluid">
            <img src="/logoHacktx.png" width="100%"/>
            <h1 class="imageTitle">RoboSim</h1>
          </div>
        </div>
        
        <ul>
          <li><Link href="/" class="navItem">Home</Link></li>
          <li><Link href="/login" class="navItem">Log In</Link></li>
        </ul>
      </nav>
    </>
  )
}