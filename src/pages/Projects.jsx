import MyCardSwap, {Card} from "../components/cardswap/MyCardSwap.jsx";
import PageHeaderWindowContainer from "../containers/PageHeaderWindowContainer.jsx";
import Shuffle from "../../components/Shuffle.jsx";
import "./projects/SkillCard.css"
import "../components/cardswap/MyCardSwap.css"
import "./projects/ShuffleProjectPageTitle.css"

import {useEffect, useState} from "react";
import skills from "../api/SkillsAPI.jsx";
import TitleImageContainerComponent from "../components/cardswap/card/TitleImageContainerComponent.jsx";

function ShuffleWord({text}) {
    return (
        <Shuffle
            text={text}
            shuffleDirection="right"
            duration={0.35}
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
            <PageHeaderWindowContainer>
                <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
            </PageHeaderWindowContainer>
        );
    }

    if (codingSkills.length === 0) {
        return (
            <PageHeaderWindowContainer>
                <div style={{ textAlign: "center", padding: "2rem" }}>
                    No coding skills found.
                </div>
            </PageHeaderWindowContainer>
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
            <PageHeaderWindowContainer>
                <div className={"shuffle-title"}>
                    <ShuffleWord text={"FUN &"}/>
                    <ShuffleWord text={"PROJECTS"}/>
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
            </PageHeaderWindowContainer>
    )
}

export default Projects;