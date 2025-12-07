import MyCardSwap, {Card} from "../components/cardswap/MyCardSwap.jsx";
import HeaderWindowContainerProjectsPage from "../containers/projects/HeaderWindowContainerProjectsPage.jsx";
import ShuffleWord from "../components/shuffleword/ShuffleWord.jsx";
import "./projects/SkillCard.css"
import "../components/cardswap/MyCardSwap.css"
import "./projects/ShuffleProjectPageTitle.css"

import {useEffect, useState} from "react";
import skills from "../api/SkillsAPI.jsx";
import TitleImageContainerComponent from "../components/cardswap/card/TitleImageContainerComponent.jsx";
import "./Projects.css"
import ProjectsGridContainer from "../containers/projects/ProjectsGridContainer.jsx";
import Dock from "../../components/Dock.jsx";
import useDockItems from "../dock/dockItems.jsx";
import {useMediaQuery} from "react-responsive";

function Projects() {
    const [codingSkills, setCodingSkills] = useState([]);
    const [loading, setLoading] = useState([]);

    const dockItems = useDockItems();
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    useEffect(() => {
        async function fetchCodingSkills() {
            try {
                const res = await skills.getCoding();
                setCodingSkills(res.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        fetchCodingSkills();
    }, []);

    if (loading) {

        return (
            <HeaderWindowContainerProjectsPage>
                <div style={{ textAlign: "center", padding: "2rem" }}></div>
            </HeaderWindowContainerProjectsPage>
        );
    }

    const cardList = codingSkills.map((item, index) => (
            item ? (
                <Card key={index}>
                    <TitleImageContainerComponent
                        item={item}
                        containerClass={"skill-card"}
                        headerClass={"skill-card-header"}
                        iconClass={"skill-card-icon"}
                        titleClass={"skill-card-title"}
                        imageContainerClass={"skill-card-image-container"}
                        imageClass={"skill-card-image"}
                    />
                </Card>
            ) : (<Card></Card>)
    ))

    return (
        <div className={"projects"}>
            <HeaderWindowContainerProjectsPage>
                <div className={"shuffle-title"}>
                    <div>
                        <ShuffleWord text={"FUN"} className={"shuffle-word-fun"}/>
                        <ShuffleWord text={"/"} duration={0} className={"shuffle-word-fun"}/>
                        <ShuffleWord text={"&"} className={"shuffle-word-fun"}/>
                    </div>
                    <ShuffleWord text={"PROJECTS"} className={"shuffle-word-projects"}/>
                </div>
                <MyCardSwap
                    cardDistance={90}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                    height={400}>
                    {cardList.map((item) => item)}
                </MyCardSwap>
            </HeaderWindowContainerProjectsPage>

            <ProjectsGridContainer />

            {!isMobile &&<div className={"fixed-footer"}>
                <Dock
                    items={dockItems}
                    panelHeight={78}
                    baseItemSize={60}
                    magnification={80}
                />
            </div>}
        </div>
    )
}

export default Projects;