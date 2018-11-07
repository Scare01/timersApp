import React from 'react';
import TimerForm from './timerForm';
import Timer from './timer';

class EditableTimer extends React.Component {
    
    state = {
        editFormOpen: false
    };

    handleEditClick = () => {
      this.openForm();
    };

    handleFormClose = () => {
      this.closeForm();
    };

    handleSubmit = (timer) => {
      this.props.onFormSubmit(timer);
      this.closeForm();
    };

    closeForm = () => {
      this.setState({ editFormOpen: false });
    };

    openForm = () => {
      this.setState({ editFormOpen: true });
    };

    handleDeleteClick = (timer) => {
      this.props.onDeleteClick(timer);
    };

    render() {
        return (
            this.state.editFormOpen ? 
            <TimerForm
                id={this.props.id} 
                title={this.props.title}
                project={this.props.project}
                onFormSubmit={this.handleSubmit}
                onFormClose={this.handleFormClose}
            /> :    
            <Timer 
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runnigSince={this.props.runnigSince}
                onEditClick={this.handleEditClick}
                onDeleteClick={this.handleDeleteClick}
            />
        )
    }
}

export default EditableTimer;