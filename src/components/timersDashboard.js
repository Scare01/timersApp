import React from 'react';
import { Grid } from 'semantic-ui-react';
import EditableTimerList from './editableTimerList';
import ToggleableTimerForm from './toggleableTimerForm';
import { v4 } from 'uuid';
import { runInThisContext } from 'vm';




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

    newTimer(attrs = {}) {
        const timer = {
         title: attrs.title || 'Timer',
         project: attrs.project || 'Project',
         id: v4(), 
         elapsed: 0,
        };

        return timer;
    } 


   handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
   };
   
   handleEditFormSubmit = (attrs) => {
     this.updateTimer(attrs);
   };

   handleTrashClick = (timerId) => {
       this.deleteTimer(timerId);
   }

   handleStartClick = (timerId) => {
       this.startTimer(timerId);
   }

   handleStopClick = (timerId) => {
       this.stopTimer(timerId);
   } 

   createTimer = (timer) => {
    const t = this.newTimer(timer);
    this.setState({
        timers: this.state.timers.concat(t)
    });
   };

   updateTimer = (attrs) => {
     this.setState({
       timers: this.state.timers.map((timer) => {
         if (timer.id === attrs.id) {
           return Object.assign({}, timer, {
             title: attrs.title,
             project: attrs.project
           });
         }else {
           return timer;
         }
       })
     });
   };

   deleteTimer = (timerId) => {
       this.setState({
           timers: this.state.timers.filter(timer => timer.id !== timerId)
       });
   };

   startTimer = (timerId) => {
       const now = Date.now();

       this.setState({
           timers: this.state.timers.map((timer) => {
               if (timer.id === timerId) {
                   return Object.assign({}, timer, {
                       runningSince: now
                   });
               }else {
                   return timer;
               }
           })
       });
   };

   stopTimer = (timerId) => {
       const now = Date.now();

       this.setState({
           timers: this.state.timers.map((timer) => {
               if (timer.id === timerId) {
                   const lastElapse = now - timer.runningSince;
                   return Object.assign({}, timer, {
                       runningSince: null
                   });
               }else {
                   return timer;
               }
           })
       });
   };

   

    render() {
        return (
            <Grid  columns={4} textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                        <EditableTimerList 
                          timers={this.state.timers}
                          onFormSubmit={this.handleEditFormSubmit}
                          onTrashClick={this.handleTrashClick}
                          onStartClick={this.handleStartClick}
                          onStopClick={this.handleStopClick}
                        />
                        <ToggleableTimerForm 
                          onFormSubmit={this.handleCreateFormSubmit} 
                        />    
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        )
    }
    
}

export default TimersDashboard;
