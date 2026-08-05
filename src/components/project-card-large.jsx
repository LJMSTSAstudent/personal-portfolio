
function ProjectCardLarge({ projectName, imgSrc, projectDesc, projectSkills }) {
    return(
        <div className="Card flex flex-row shadow-lg w-190 rounded-2xl">
            <div className="Image">
                <img src={imgSrc} alt="Project Image" className="rounded-l-2xl w-90" />
            </div>
            <div className="Text-Content rounded-r-2xl">
                <div className="Top-Layer">
                    <h1 className="text-primary font-bold text-2xl p-2.5">{projectName}</h1>
                    
                </div>
                <h1 className="text-secondary text-lg p-2.5">{projectDesc}</h1>
                <div className="skills flex flex-row gap-2.5 p-2.5 pb-3">
                    {projectSkills.map((skill) => (
                        <h1 className="text-accent bg-card font-medium rounded-lg text-sm p-2.5" key={skill}>{skill}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCardLarge;