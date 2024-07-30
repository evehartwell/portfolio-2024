import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/home';
import Project1 from './components/proj-1';

const App = () => {
    return (
        <Router>
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/project-1" component={Project1} />
        </Switch>
        </Router>
    );
};

export default App;
