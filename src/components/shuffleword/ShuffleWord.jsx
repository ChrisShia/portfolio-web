import Shuffle from "../../../components/Shuffle.jsx";

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

export default ShuffleWord;