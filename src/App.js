import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

function App() {
  return (
    <div>
      <Router>
        <PageWrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route 
            path="/about"
            component={About}
          />
        </PageWrapper>
      </Router>
    </div>
  );
}

export default App;
