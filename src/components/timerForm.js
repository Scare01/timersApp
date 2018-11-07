import React from 'react';
import { Card, Form, Button } from 'semantic-ui-react';

class TimerForm extends React.Component {

  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  };
  
  render(){
    const submitText = this.props.id ? 'Update' : 'Create';

    return (
      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Title</label>
              <input 
                type="text" 
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Project</label>
              <input 
                type="text" 
                value={this.state.project}
                onChange={this.handleProjectChange} />
            </Form.Field>
          </Form>
          <Button.Group attached="bottom">
            <Button color="blue" onClick={this.handleSubmit}>
              {submitText}
            </Button>
            <Button color="red" onClick={this.props.onFormClose}>
              Cancel
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    )
  }
  
  

}

export default TimerForm;