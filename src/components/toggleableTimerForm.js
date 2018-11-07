import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import TimerForm from './timerForm';

class ToggleableTimerFrom extends React.Component {

  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      )
    } else {
      return (
        <Button icon>
          <Icon name="plus" />
        </Button>
       
      )
    }

  }
}


export default ToggleableTimerFrom;