import React from 'react';

import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import SimpleList from './SimpleList';
import SimpleDialogs from './SimpleDialogs';
import SimpleAppBar from './SimpleAppBar';


function App() {
  return (
    <React.Fragment>
      <Router >
        <Route path="/" component={SimpleList} />
        <Route path="/SimpleDialogs" component={SimpleDialogs} />
        <Route path="/SimpleAppBar" component={SimpleAppBar} />
      </Router>
    </React.Fragment>

  );
}

export default App;
