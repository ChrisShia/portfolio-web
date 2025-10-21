import HeaderWindowContainer from "../HeaderWindowContainer.jsx";
import "./HeaderWindowContainerBioPage.css"

function HeaderWindowContainerBioPage({children}) {
    return (
        <HeaderWindowContainer className={"page-header-container-bio-page"}>
            {children}
        </HeaderWindowContainer>
    )
}

export default HeaderWindowContainerBioPage;