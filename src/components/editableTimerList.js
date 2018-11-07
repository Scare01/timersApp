import React from 'react';
import EditableTimer from './editableTimer';




class EditableTimerList extends React.Component {
    
    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runnigSince={timer.runnigSince}
            />    
        ));

        return (
            <>
                {timers}    
            </>
        )
    }
}

export default EditableTimerList;