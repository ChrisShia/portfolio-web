import CardSwap, {Card} from "../../components/CardSwap.jsx";
import PageHeaderWindowContainer from "../containers/PageHeaderWindowContainer.jsx";
import CardWithIconTitleImg from "../components/cardswap/CardWithIconTitleImg.jsx";

// const skill

function Projects() {

    return (
            <PageHeaderWindowContainer>
                <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    <Card>
                        <h3>Card 1</h3>
                        <p>Your content here</p>
                    </Card>
                    <Card>
                        <h3>Card 2</h3>
                        <p>Your content here</p>
                    </Card>
                    <Card>
                        <h3>Card 3</h3>
                        <p>Your content here</p>
                    </Card>
                </CardSwap>
            </PageHeaderWindowContainer>
    )
}

export default Projects;