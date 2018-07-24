import React, {Component} from 'react';
import * as timerStates from '../../timerStates';
import {Button} from 'react-bootstrap';

class TimerButton extends Component {
    constructor() {
        super();
    
    this.getButton = this.getButton.bind(this);
}
    getButton() {
        if (this.props.timerState === timerStates.NOT_SET)
        return <Button className="btn btn-primary center-block" onClick={this.props.startTimer}>Start</Button>;

        if (this.props.timerState === timerStates.RUNNING)
        return <Button className="btn btn-danger center-block" onClick={this.props.stopTimer}>Interrupt</Button>;

        if (this.props.timerState === timerStates.COMPLETE)
        return <Button className="btn btn-info center-block" onClick={this.props.stopTimer}>Reset</Button>;

        
    }

    render() {
        return (
            <div className="row">
                {this.getButton()}
                </div>
            );
        }
}



export default TimerButton;