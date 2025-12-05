import "./ProjectsGridContainer.css"

import ProjectCard from "../../components/projects/ProjectCard.jsx";
import projectsApi from "../../api/ProjectsAPI.jsx"
import {useEffect, useState} from "react";

function ProjectsGridContainer() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await projectsApi.get();
                setProjects(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchProjects();
    }, []);

    // const projectList = projects.map((item,index) => (
    //     item ? (
    //             <ProjectCard key={index} icon={item.icon} title={item.title} short_description={item.short_description} technologies={item.technologies} github_url={item.github_url} />
    //     ) : (
    //         <div>
    //             <ProjectCard/>
    //         </div>
    //     )
    // ))

    return(
        <div className={"projects-grid-wrapper"}>
            {projects.map((item,index) => (
                item ? (
                    <ProjectCard key={index} icon={item.icon} title={item.title} short_description={item.short_description} technologies={item.technologies} github_url={item.github_url} />
                ) : (
                        <ProjectCard key={index}/>
                )))
            }
        </div>
    )
}

export default ProjectsGridContainer;