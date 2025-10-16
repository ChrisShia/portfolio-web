import MyCardSwap, {Card} from "../components/cardswap/MyCardSwap.jsx";
import HeaderWindowContainerPage from "../containers/HeaderWindowContainerPage.jsx";
import Shuffle from "../../components/Shuffle.jsx";
import "./projects/SkillCard.css"
import "../components/cardswap/MyCardSwap.css"
import "./projects/ShuffleProjectPageTitle.css"

import {useEffect, useState} from "react";
import skills from "../api/SkillsAPI.jsx";
import TitleImageContainerComponent from "../components/cardswap/card/TitleImageContainerComponent.jsx";

function ShuffleWord({text, className, duration}) {
    return (
        <Shuffle
            text={text}
            shuffleDirection="right"
            duration={duration}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            loop={true}
            loopDelay={2}
            className={className}
        />
    )
}

function Projects() {
    const [codingSkills, setCodingSkills] = useState([]);
    const [loading, setLoading] = useState([]);
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
            <HeaderWindowContainerPage>
                <div style={{ textAlign: "center", padding: "2rem" }}></div>
            </HeaderWindowContainerPage>
        );
    }

    const cardList = codingSkills.map((item) => (
            item ? (
                <Card key={item.id}>
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
            <HeaderWindowContainerPage>
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
                    height={400}
                >

                    {cardList.map((item) => item)}

                </MyCardSwap>

                

            </HeaderWindowContainerPage>
    )
}

export default Projects;