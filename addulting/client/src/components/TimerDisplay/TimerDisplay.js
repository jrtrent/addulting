import React from 'react';
import * as timerStates from "../../timerStates";

const leftPad = (val) => {
    if (val <10) return `0${val}`;
    return `${val}`;
}
const TimerDisplay = (props) => (
    <div>
        <div className="row center-bock">
        {
            (props.timerState === timerStates.COMPLETE)
                && <iframe className="center-block youtube-responsive-width" height="259" width="480" title="alarm" src="https://giphy.com/embed/3o6gbcjYiGrpaLXy7K"></iframe>
        }
    </div>
<div className="row">
    <h2 className="text-center">{`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
    </h2>
</div>
</div>
);

export default TimerDisplay;