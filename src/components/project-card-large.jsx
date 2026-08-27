import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaArrowRightLong } from "react-icons/fa6";

function ProjectCardLarge({ projectName, imgSrc, projectDesc, projectSkills }) {
    return(
        <div className="Card flex flex-row shadow-lg h-75 rounded-2xl hover:shadow-xl transform hover:translate-y-[-16px] transition-all duration-300">
            <div className="Image">
                <img src={imgSrc} alt="Project Image" className="rounded-l-2xl h-full" />
            </div>

            <div className="Text-Content rounded-r-2xl pt-5 ml-5">
                <div className="Top-Layer">
                    <h1 className="text-primary font-bold text-3xl p-2.5">{projectName}</h1>
                    
                </div>
                <h1 className="text-secondary text-xl p-3.5">{projectDesc}</h1>
                <div className="skills flex flex-row gap-3.5 p-2.5 pb-4">
                    {projectSkills.map((skill) => (
                        <h1 className="text-accent bg-card font-medium rounded-xl text-sm p-3.5" key={skill}>{skill}</h1>
                    ))}
                </div>
                <div className="Links mr-2.5">
                    <div className="Navigation-Buttons flex flex-row justify-between px-5 py-2.5">
                        <div className="Learn-More flex flex-row justify-center items-center gap-2">
                            <h1 className="font-bold text-accent" >View Project</h1>
                            <FaArrowRightLong className="font-thin mt-1 text-accent" />
                        </div>
                        <div className="Links flex flex-row justify-center items-center gap-3.5 py-2.5">
                            <FaGithub className="text-xl text-primary" />
                            <FaArrowUpRightFromSquare className="text-lg text-accent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardLarge;