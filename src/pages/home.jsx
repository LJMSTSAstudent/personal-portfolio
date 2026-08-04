import { FaGithub, FaLinkedin, FaArrowRight, FaLaptopCode, FaEnvelope, FaChartPie } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { TbChefHatFilled } from "react-icons/tb";
import { IoMdPhonePortrait } from "react-icons/io";

import ProjectCardSmall  from "../components/project-card-small";
import PageHeader from "../components/page-header";
import PageFooter from "../components/page-footer";

function Home() {
    return(
    <>
      <div className="Hero-Section bg-card">
        <PageHeader />

        <div className="Splash-Page Hero flex flex-row px-10 pb-43 pt-25 items-center">
          <div className="Hero-Left">
            <h3 className="text-2xl text-accent font-bold">Hi, I'm</h3>
            <h1 className="text-7xl text-primary font-extrabold py-2.5 mb-2.5">Vaibhav Saravanan</h1>
            <h3 className="text-2xl text-accent font-bold py-2.5">Student Developer</h3>
            <p className="text-lg text-secondary text py-2.5">
              I'm passionate about innovating and strive to create tech that help bring people together.
            </p>
            <button className="flex items-center justify-center gap-1.5 border-2 border-opacity-100 bg-accent rounded-3xl text-background py-2.5 px-5 mt-2.5 hover:bg-background hover:border-accent hover:text-accent transition-colors duration-200">Learn More<FaArrowRight /></button>
          </div>

          <div className="Hero-Right">
            <FaLaptopCode className="text-accent text-6xl" />
          </div>
        </div> 
     </div>

      <div className="Splash-Page Interests flex flex-col justify-center items-center mb-65 mt-15">
        <h1 className="text-2xl font-bold text-primary"> Interests</h1>
        <hr className="w-48 border-2 border-accent rounded-full mt-2.5" />
        <div className="Splash-Page-Cards flex flex-row gap-20 mt-15">
          <div className="Splash-Page-Card flex flex-col items-center">
            <MdOutlineComputer className="text-accent bg-card text-8xl rounded-full p-5" />
            <p className="text-primary">Web Development</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <IoMdPhonePortrait className="text-accent bg-card text-8xl rounded-full p-5" />
            <p className="text-primary">App Development</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <FaChartPie className="text-accent bg-card text-8xl rounded-full p-5" />
            <p className="text-primary">Problem Solving</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <IoCamera className="text-accent bg-card text-8xl rounded-full p-5" />
            <p className="text-primary">Content Creation</p>
            <p className="text-secondary">Description</p>
          </div>

          <div className="Splash-Page-Card flex flex-col items-center">
            <TbChefHatFilled className="text-accent bg-card text-8xl rounded-full p-5" />
            <p className="text-primary">Cooking</p>
            <p className="text-secondary">Description</p>
          </div>
        </div>
      </div>

      <div className="Splash-Page Future-Projects flex flex-col justify-center items-center mb-30">
        <hr className="w-350 border-2 border-secondary opacity-25 rounded-full mb-25" />
        <h1 className="text-2xl font-bold text-primary py-1.5">Featured Projects</h1>
        <div className="Project-Cards flex flex-row gap-25 py-10">
          <ProjectCardSmall
            imgSrc="https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg"
            projectName="Portfolio Website"
            projectDesc="Built as a practice project to improve my React and Tailwind CSS skills."
            projectSkills={["React", "TailwindCSS", "Vite"]}
          />
          <ProjectCardSmall
            imgSrc="https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg"
            projectName="Portfolio Website"
            projectDesc="Built as a practice project to improve my React and Tailwind CSS skills."
            projectSkills={["React", "Tailwind", "Vite"]}
          />
          <ProjectCardSmall
            imgSrc="https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg"
            projectName="Portfolio Website"
            projectDesc="Built as a practice project to improve my React and Tailwind CSS skills."
            projectSkills={["React", "Tailwind", "Vite"]}
          />
        </div>
        <p className="text-secondary py-1">Feel free to check out some of the other projects I have developed</p>
        <button className="flex items-center justify-center gap-1.5 bg-background border-accent border-2 rounded-xl text-accent py-2.5 px-5 mt-2.5 hover:bg-accent hover:text-background transition-colors duration-200 shadow-sm">View All Projects <FaArrowRight /></button>
      </div>

      <PageFooter />
    </>
    )
}

export default Home;