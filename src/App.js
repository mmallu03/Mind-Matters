// App.js
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import MoodTracker from './components/MoodTracker';
import Chatbot from './components/Chatbot';
import Dashboard from './components/Dashboard';
import Resources from './components/Resources';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/moodtracker">Mood Tracker</Link></li>
              <li><Link to="/chatbot">Chatbot</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moodtracker" element={<MoodTracker />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Mental Health App</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to Mental Health App</h1>;
}

export default App;
