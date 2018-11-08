import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import TimerActionButton from './timerActionButton';



class Timer extends React.Component {

  renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return this.millisecondsToHuman(totalElapsed);
  }

  millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }


  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  }

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  render() {
    const elapsedString = this.renderElapsedString(
        this.props.elapsed, this.props.runningSince);



    return (
      
        <Card>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>{this.props.project}</Card.Meta>
            <Card.Description>
              <h2>
              {elapsedString}
              </h2>
            </Card.Description>
          </Card.Content>
          <Card.Content extra textAlign="right">
            <Icon name="edit" onClick={this.props.onEditClick} />
            <Icon name="trash" onClick={this.handleTrashClick}/>    
          </Card.Content>
          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
        </Card>
        
      
    )
  }
}

export default Timer;