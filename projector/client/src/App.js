import logo from './logo.svg';
import React from 'react';
import './App.css';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App" >
        <Navbar />
        <Route
          exact
          path='/projects'
          component={Projects}
        />
        <Route
          exact
          path='/projects/:id'
          component={ProjectDetails}
        />
        <Route
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
