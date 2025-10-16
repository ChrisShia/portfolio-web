import HeaderWindowContainer from "./HeaderWindowContainer.jsx";
import "./HeaderWindowContainerPage.css"

function HeaderWindowContainerPage({children}) {
    return (
        <HeaderWindowContainer className={"page-header-container"}>
            {children}
        </HeaderWindowContainer>
    )
}

export default HeaderWindowContainerPage;