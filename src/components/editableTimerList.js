import React from 'react';
import EditableTimer from './editableTimer';


class EditableTimerList extends React.Component {
    
    render() {
        return (
            <div id="timers">
                <EditableTimer
                    title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runnigSince={null}
                    editForm={false}
                />
                <EditableTimer
                    title='Learn extreme ironing'
                    project='World Domination'
                    elapsed='3890985'
                    runnigSince={null}
                    editForm={true}
                />
            </div>
        )
    }
}

export default EditableTimerList;