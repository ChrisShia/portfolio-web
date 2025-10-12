import HeaderWindowContainer from "./HeaderWindowContainer.jsx";
import "./PageHeaderWindowContainer.css"

function PageHeaderWindowContainer({children}) {
    return (
        <HeaderWindowContainer className={"page-header-container"}>
            {children}
        </HeaderWindowContainer>
    )
}

export default PageHeaderWindowContainer;