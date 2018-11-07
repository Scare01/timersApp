import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';



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

  render() {
    const elapsedString = this.renderElapsedString(this.props.elapsed);



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
            <Icon name="edit" />
            <Icon name="trash" />    
          </Card.Content>
          <Button attached="bottom" color="blue">Start</Button>
        </Card>
        
      
    )
  }
}

export default Timer;