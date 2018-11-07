import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import HeaderApp from './components/header/header';
import TimersDashboard from './components/timersDashboard';


class TimersApp extends React.Component {

    render() {
        return (
            <>
                <HeaderApp />
                <TimersDashboard />
            </>
        )
    }
}

ReactDOM.render(<TimersApp />, document.getElementById('body'));