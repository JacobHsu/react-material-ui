import React from 'react';

import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import SimpleList from './SimpleList';
import SimpleDialogs from './SimpleDialogs';
import SimpleAppBar from './SimpleAppBar';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import SimpleTabs from './SimpleTabs';

function App() {
  return (
    <React.Fragment>
      <Router >
        <Route path="/" component={SimpleList} />
        <Route path="/SimpleDialogs" component={SimpleDialogs} />
        <Route path="/SimpleAppBar" component={SimpleAppBar} />
        <Route path="/SimpleExpansionPanel" component={SimpleExpansionPanel} />
        <Route path="/SimpleTabs" component={SimpleTabs} />
      </Router>
    </React.Fragment>
  );
}

export default App;
