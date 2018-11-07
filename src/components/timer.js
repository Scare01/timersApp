import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import msToTime from './helpers';


class Timer extends React.Component {
  render() {
    const elapsedString = msToTime(this.props.elapsed);



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