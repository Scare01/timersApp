import React from 'react';
import { Grid } from 'semantic-ui-react';
import EditableTimerList from './editableTimerList';
import ToggleableTimerForm from './toggleableTimerForm';
import { v4 } from 'uuid';



class TimersDashboard extends React.Component {
   state = {
    timers: [
        {
            title: 'Practice squat',
            project: 'Gym Chores',
            id: v4(),
            elapsed: 5456099,
            runningSince: Date.now()
        },
        {
            title: 'Bake squash',
            project: 'Kitchen Chores',
            id: v4(),
            elapsed: 1273998,
            runningSince: null
        }
    ]    
   };

    render() {
        return (
            <Grid columns={3} textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <EditableTimerList timers={this.state.timers}/>
                        <ToggleableTimerForm isOpen={true} />    
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        )
    }
    
}

export default TimersDashboard;
