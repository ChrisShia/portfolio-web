import MyModularAlternateReverseTimeline from "../components/timeline/MyModularAlternateReverseTimeline.jsx";
import "./style/Me.css"

function Me() {

    return (
            <div >
                {<MyModularAlternateReverseTimeline/>}
                <div className="timeline-bottom-fade" />
            </div>
    )
}

export default Me;