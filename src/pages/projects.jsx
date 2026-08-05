import PageHeader from "../components/page-header";
import ProjectCardLarge from "../components/project-card-large";

function Projects() {
    return (
    <>
        <PageHeader />

        <div className="Project-Cards flex flex-col gap-10 justify-center items-center">
            <div className="Text w-screen flex flex-col justify-center items-center mt-20">
                <h3 className="text-2xl text-primary font-bold">Projects</h3>
                <hr className="w-40 border-2 rounded-2xl border-accent mt-1.5 mb-3" />
                <h3 className="text-lg text-secondary">A collection of projects I've built and worked on</h3>
            </div>
            <ProjectCardLarge 
                projectName="Portfolio Website"
                imgSrc="https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg"
                projectDesc="Built as a practice project to improve my React and Tailwind CSS skills."
                projectSkills={["React", "TailwindCSS", "Vite"]}
            />
            <ProjectCardLarge 
                projectName="Portfolio Website"
                imgSrc="https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg"
                projectDesc="Built as a practice project to improve my React and Tailwind CSS skills."
                projectSkills={["React", "TailwindCSS", "Vite"]}
            />      
            <ProjectCardLarge 
                projectName="Portfolio Website"
                imgSrc="https://images.hdqwalls.com/wallpapers/landscape-alpine-mountains-landscape-5k-1k.jpg"
                projectDesc="Built as a practice project to improve my React and Tailwind CSS skills."
                projectSkills={["React", "TailwindCSS", "Vite"]}
            />
        </div>    
    </>
    )
}

export default Projects;