import './App.css'

import { FaGithub, FaLinkedin, FaArrowRight, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {

  return (
    <>
      <div className="Splash-Page Hero flex flex-row px-10 h-screen items-center">
        <div className="Hero-Left">
          <h3 className="text-2xl text-accent font-bold">Hi, I'm</h3>
          <h1 className="text-7xl text-primary font-extrabold py-2.5 mb-2.5">Vaibhav Saravanan</h1>
          <h3 className="text-2xl text-accent font-bold py-2.5">Student Developer</h3>
          <p className="text-lg text-secondary text py-2.5">
            I'm passionate about innovating and strive to create tech that help bring people together.
          </p>
          <button className="flex items-center justify-center gap-1.5 bg-accent rounded-3xl text-background py-2.5 px-5 mt-2.5">Learn More<FaArrowRight /></button>
        </div>

        <div className="Hero-Right">
          <FaLaptopCode className="text-accent text-6xl" />
        </div>
     </div>

      <div className="Splash-Page Interests flex flex-col justify-center items-center mb-65">
        <h1 className="text-2xl font-bold text-primary"> Interests</h1>
        <hr className="w-48 border-2 border-accent rounded-full mt-2.5" />
        <div className="Splash-Page-Cards flex flex-row gap-20 mt-15">
          <div className="Splash-Page-Card flex flex-col items-center">
            <FaLaptopCode className="text-primary bg-card text-8xl rounded-full p-10" />
            <p className="text-primary">Web Development</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <FaLaptopCode className="text-primary bg-card text-8xl rounded-full p-10" />
            <p className="text-primary">App Development</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <FaLaptopCode className="text-primary bg-card text-8xl rounded-full p-10" />
            <p className="text-primary">Problem Solving</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <FaLaptopCode className="text-primary bg-card text-8xl rounded-full p-10" />
            <p className="text-primary">Content Creation</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <FaLaptopCode className="text-primary bg-card text-8xl rounded-full p-10" />
            <p className="text-primary">Cooking</p>
            <p className="text-secondary">Description</p>
          </div>
        </div>
      </div>

      <div className="Splash-Page Future-Projects flex flex-col justify-center items-center mb-30">
        <hr className="w-350 border-2 border-secondary opacity-25 rounded-full mb-25" />
        <h1 className="text-2xl font-bold text-primary py-1.5">My Projects</h1>
        <p className="text-secondary py-1">Feel free to check out some of the projects I have developed</p>
        <button className="flex items-center justify-center gap-1.5 bg-background border-accent border-2 rounded-xl text-accent py-2.5 px-5 mt-2.5">View Projects <FaArrowRight /></button>
      </div>

      <div className="Splash-Page Footer bg-primary flex flex-row h-25 items-center px-15 gap-240">
        <div className="Footer-Left flex flex-row gap-5 items-center">
          <h3 className="text-2xl text-background font-bold border-2 border-accent rounded-full p-2.5">VS</h3>

          <h3 className="text-2xl text-background font-bold">Vaibhav Saravanan</h3>
        </div>
        <div className="Footer-Right flex flex-row gap-5">
          <a href="https://github.com/LJMSTSAstudent"><FaGithub className="text-background text-4xl" /></a>
          <a href="https://www.linkedin.com/in/ksaravanan"><FaLinkedin className="text-background text-4xl" /></a>
          <a href="mailto: vaibhav.saravanan@gmail.com"><FaEnvelope className="text-background text-4xl" /></a>
        </div>
      </div>
    </>
  )
}

export default App