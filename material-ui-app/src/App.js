import React from 'react';

import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

import SimpleList from './SimpleList';

function App() {
  return (
    <React.Fragment>
      <Router >
        <Route path="/" component={SimpleList} />
      </Router>
    </React.Fragment>

  );
}

export default App;
