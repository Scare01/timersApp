import React from 'react';
import TimerForm from './timerForm';
import Timer from './timer';

class EditableTimer extends React.Component {
    
    state = {
        editFormOpen: false
    };


    render() {
        return (
            this.state.editFormOpen ? 
            <TimerForm
                id={this.props.id} 
                title={this.props.title}
                project={this.props.project}
            /> :    
            <Timer 
                id={this.props.id}
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runnigSince={this.props.runnigSince}
            />
        )
    }
}

export default EditableTimer;