import "./ProjectCard.css"
import {useRef} from "react";
import {VscGithub} from "react-icons/vsc";
import { ReactSVG } from "react-svg";


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
                <div className={"header"}>
                    <div className={"title-icon"}>
                        {icon}
                    </div>
                    <div className={"title"}>
                        {title}
                    </div>
                </div>

                <div className={"content"}>
                    {short_description}
                </div>

                <div className={"footer"}>
                    {technologies ? (
                        <div className={"technologies"}>
                            {technologies.map((item, index) => (
                                item ? (
                                <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                ) : (
                                    <div/>
                                )
                             ))}
                        </div>
                    ):(<div/>)}
                    {github_url ? (
                            <a className={"github"} href={github_url}>
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