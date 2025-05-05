import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StudentPage from './pages/StudentPage';
import StatisticsPage from './pages/StatisticsPage';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content-container">
          <Header />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/students" component={StudentPage} />
              <Route path="/statistics" component={StatisticsPage} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;