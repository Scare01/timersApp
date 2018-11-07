import React from 'react';
import './header.css';
import { Header } from 'semantic-ui-react';

const HeaderApp = () => (
    <Header as="h1" textAlign="center" block id="header">
        Timers App
    </Header>
)

export default HeaderApp;