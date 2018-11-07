import React from 'react';
import TimerForm from './timerForm';
import Timer from './timer';

class EditableTimer extends React.Component {
 
    render() {
        return (
            this.props.editFormOpen ? 
            <TimerForm 
                title={this.props.title}
                project={this.props.project}
            /> :    
            <Timer 
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runnigSince={this.props.runnigSince}
            />
        )
    }
}

export default EditableTimer;