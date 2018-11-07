import React from 'react';
import TimerForm from './timerForm';

class EditableTimer extends React.Component {
 
    render() {
        return (
            this.props.editFromOpen ? 
            <TimerForm 
                title={this.props.title}
                project={this.props.project}
            /> :    
            <TimerForm 
                title={this.props.title}
                project={this.props.project}
                elapsed={this.props.elapsed}
                runnigSince={this.props.runnigSince}
            />
        )
    }
}

export default EditableTimer;