import React from 'react';
import EditableTimer from './editableTimer';



class EditableTimerList extends React.Component {
    
    render() {
        return (
            <>
                <EditableTimer
                    title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runnigSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title='Learn extreme ironing'
                    project='World Domintaion'
                    elapsed='3890985'
                    runnigSince={null}
                    editFormOpen={true}
                />
            </>
        )
    }
}

export default EditableTimerList;