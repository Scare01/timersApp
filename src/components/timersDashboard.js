import React from 'react';
import { Grid } from 'semantic-ui-react';
import EditableTimerList from './editableTimerList';
import ToggleableTimerForm from './toggleableTimerForm';


class TimersDashboard extends React.Component {
    
    render() {
        return (
            <Grid columns={3} textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <EditableTimerList />
                        <ToggleableTimerForm isOpen={true} />    
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        )
    }
    
}

export default TimersDashboard;
