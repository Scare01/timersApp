import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import TimerForm from './timerForm';

class ToggleableTimerFrom extends React.Component {
  state =  {
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleSubmitForm = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  handleFromClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm 
          onFormSubmit={this.handleSubmitForm}
          onFormClose={this.handleFromClose}
        />
      )
    } else {
      return (
        <Button icon onClick={this.handleFormOpen}>
          <Icon name="plus" />
        </Button>
       
      )
    }

  }
}


export default ToggleableTimerFrom;