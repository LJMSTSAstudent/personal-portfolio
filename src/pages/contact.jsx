import PageHeader from "../components/page-header";
import PageFooter from "../components/page-footer";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
    <div>
        <PageHeader />
        <div className="content flex flex-row items-center py-2.5 pl-10">    
            <div className="Left content-center px-10 my-5 h-[71vh]">
                <h3 className="text-6xl text-primary font-bold">Let's Connect</h3>
                <hr className="w-20 border-2 rounded-xl border-accent mt-1.5 mb-3" />
                <h3 className="text-xl text-secondary">I'm always open to new opportunities, collaborations, or a friendly hello!</h3>
            </div>
            <div className="Right">
                <div className="Footer-Right flex flex-row gap-20 pl-30">
                    <div className="Icon-Card">
                        <a href="mailto: vaibhav.saravanan@gmail.com"><FaEnvelope className="text-accent text-8xl" /></a>
                    </div>
                    <div className="Icon-Card">
                        <a href="https://www.linkedin.com/in/ksaravanan"><FaLinkedin className="text-accent text-8xl" /></a>
                    </div>
                    <div className="Icon-Card">
                        <a href="https://github.com/LJMSTSAstudent"><FaGithub className="text-accent text-8xl" /></a>
                    </div>
                </div>
            </div>
        </div>
        <PageFooter />
    </div>
    )
}

export default Contact;