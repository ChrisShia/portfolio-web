import HeaderWindowContainer from "../HeaderWindowContainer.jsx";
import "./HeaderWindowContainerProjectsPage.css"

function HeaderWindowContainerProjectsPage({children}) {
    return (
        <HeaderWindowContainer className={"page-header-container-projects-page"}>
            {children}
        </HeaderWindowContainer>
    )
}

export default HeaderWindowContainerProjectsPage;