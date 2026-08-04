import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaArrowRightLong } from "react-icons/fa6";

function ProjectCardSmall({ imgSrc, projectName, projectDesc, projectSkills }) {
    return(
        <>
            <div className="Card w-80 shadow-lg rounded-2xl">
                <div className="Image">
                    <img src={imgSrc} alt="Project Image" className="rounded-t-2xl" />
                </div>
                <div className="Text bg-background rounded-2xl py-2.5">
                    <h1 className="text-primary font-bold text-lg p-2.5">{projectName}</h1>
                    <h1 className="text-secondary font-thin text-base px-2.5">{projectDesc}</h1>
                    <div className="skills flex flex-row gap-2.5 p-2.5 pb-3">
                        {projectSkills.map((skill) => (
                            <h1 className="text-accent bg-card font-medium rounded-lg text-sm p-2.5" key={skill}>{skill}</h1>
                        ))}
                    </div>
                    <hr className="border-secondary/50 border-1" />
                    <div className="Navigation-Buttons flex flex-row justify-between px-5 py-2.5">
                        <div className="Learn-More flex flex-row justify-center items-center gap-2">
                            <h1 className="font-bold text-accent" >View Projects</h1>
                            <FaArrowRightLong className="font-thin mt-1 text-accent" />
                        </div>
                        <div className="Links flex flex-row justify-center items-center gap-3.5 py-2.5">
                            <FaGithub className="text-xl text-primary" />
                            <FaArrowUpRightFromSquare className="text-lg text-accent" />
                        </div>
                    </div>
                </div>

            </div>
        </>
      )
}

export default ProjectCardSmall;