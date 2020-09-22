import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ArticlesList from './pages/ArticlesList.js'
import ArticlePage from './pages/ArticlePage.js';
import NavBar from './NavBar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path='/' component={HomePage} exact />
          <Route path='/about' component={AboutPage} />
          <Route path='/articles-list' component={ArticlesList} />
          <Route path='/article/:name' component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
