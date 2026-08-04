import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function PageFooter() {
    return (
    <div className="Footer bg-primary flex flex-row h-25 items-center justify-between px-15">
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
    )
}

export default PageFooter;