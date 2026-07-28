import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="Splash-Page Intro">
        <h3 className="text-l">Hi I'm</h3>
        <h1 className="text-3xl">Vaibhav Saravanan</h1>
        <h3>Student Developer</h3>
        <p>I'm passionate about building software that helps those around the world as well as learning new things</p>
        <button>Learn More</button>
      </div>
      
      <div class="Splash-Page Interests">
        <h1>Interests</h1>
        <div class="Splash-Page-Cards">
          <div class="Splash-Page-Card">
            <p>Web Development</p>
          </div>
          <div class="Splash-Page-Card">
            <p>App Development</p>
          </div>
          <div class="Splash-Page-Card">
            <p>Problem Solving</p>
          </div>
          <div class="Splash-Page-Card">
            <p>Cooking</p>
          </div>
          <div class="Splash-Page-Card">
            <p>Content Creation</p>
          </div>
        </div>
      </div>

      <div class="Splash-Page Future-Projects">
        <h1>My Projects</h1>
        <p>Feel free to check out some of my cool projects</p>
        <button>View Projects</button>
      </div>
    </>
  )
}

export default App