import React from 'react';
import { Card, Form, Button } from 'semantic-ui-react';

class TimerForm extends React.Component {
  
  render(){
    const submitText = this.props.title ? 'Update' : 'Create';

    return (
      <Card textAlign="center">
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input type="text" defaultValue={this.props.project} />
            </Form.Field>
          </Form>
          <Button.Group attached="bottom">
            <Button color="blue">
              {submitText}
            </Button>
            <Button color="red">
              Cancel
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
  
  

}

export default TimerForm;