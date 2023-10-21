import './nav.css'
export default function Home() {
  return (
    <>
      <nav class="navbar">
        {/* poner la image del logo */}
        <div class="branding">
          <div class="imgFluid">
            <img src="/logoHacktx.png" width="100%"/>
            <h1>RoboSim</h1>
          </div>
        </div>
        
        <ul>
          <li>Home</li>
          <li>Log In</li>
        </ul>
      </nav>
    </>
  )
}