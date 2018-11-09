import React from 'react';
import { Button } from 'semantic-ui-react';



class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <Button attached="bottom" color="red" onClick={this.props.onStopClick}>
          Stop
        </Button>
      );
    }else {
      return (
        <Button attached="bottom" color="blue" onClick={this.props.onStartClick}>
          Start
        </Button>
      );
    }
  }
}

export default TimerActionButton;