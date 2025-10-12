import Squares from "../../components/Squares.jsx";

const MySquareGrid = ()=> {

    return (
        <Squares
        speed={0.2}
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='#271E37'
        hoverFillColor='#271E37'/>
    );
}

export default MySquareGrid;