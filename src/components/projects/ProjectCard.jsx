import "./ProjectCard.css"
import {useRef} from "react";
import {VscGithub} from "react-icons/vsc";


const ProjectSpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
    const divRef = useRef(null);

    const handleMouseMove = e => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty('--mouse-x', `${x}px`);
        divRef.current.style.setProperty('--mouse-y', `${y}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };

    return (
        <div ref={divRef} onMouseMove={handleMouseMove} className={`project-card-spotlight ${className}`}>
            {children}
        </div>
    );
};

function ProjectCard({icon, title, short_description,technologies, github_url}) {

    return (
        <div className={"project-card-wrapper"}>
            <ProjectSpotlightCard>
                <div className={"project-card-header"}>
                    <div className={"project-card-title-icon"}>
                        {icon}
                    </div>
                    <div className={"project-card-title"}>
                        {title}
                    </div>
                </div>

                <div className={"project-card-content"}>
                    {short_description}
                </div>

                <div className={"project-card-footer"}>
                    {technologies ? (
                        <div className={"project-card-technologies"}>
                            {technologies.map((item, index) => (
                                item ? (
                                    <div key={index}>
                                        <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: item }} />
                                    </div>
                                ) : (
                                    <div/>
                                )
                             ))}
                        </div>
                    ):(<div/>)}
                    {github_url ? (
                            <a className={"project-card-github-icon"} href={github_url}>
                                <VscGithub />
                            </a>
                        ) : (<div />)
                    }
                </div>
            </ProjectSpotlightCard>
        </div>
    )
}

export default ProjectCard;