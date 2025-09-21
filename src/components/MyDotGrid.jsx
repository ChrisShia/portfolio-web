import DotGrid from "../../components/DotGrid.jsx";

const MyDotGrid = ()=> {

    return (
        <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}/>
    );
}

export default MyDotGrid;