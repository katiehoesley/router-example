import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Profiles from './Profiles'
import Profile from './Profile'
import ProfileImage from './ProfileImage'
import './App.css';
import React from 'react'
import data from './data.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      stories: data.newsArticles,
      contacts: data.contactProfiles
    }
  }
  
  render() {
    return (
      <Router>
      <Nav />
        <Switch>
          <Route 
            path="/home" 
            render={ props => (<Home {...props} stories={this.state.stories}/>) }/>
          <Route 
            path="/about" 
            component={About}/>
          <Route 
            exact path="/profiles" 
            render={ props => (<Profiles {...props} contacts={this.state.contacts}/>)}/>
          <Route 
            path="/profiles/:id/profile-image/" 
            render={props => 
              <div>
                {/* <Profile {...props} contacts={this.state.contacts} /> */}
                <ProfileImage {...props} contacts={this.state.contacts}/>
              </div>
            }
          />
          <Route 
            path="/profiles/:id" 
            render={props => 
              <div>
                <Profiles {...props} contacts={this.state.contacts}/>
                <Profile {...props} contacts={this.state.contacts}/> 
              </div>
            }
            />
        </Switch>
      </Router>
    );
  }
}

export default App;
