import React from 'react'
import Layout from './Components/Layout'
import LandingApp from './landingpage/LandingApp'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ArtistDetails from './Components/MusicPlayer/Artist/artistDetails'


const App = () => (
    <div>
        <Router>
            <Switch>
                <Route exact path="/" component={LandingApp} />
                <Route path="/login" component={Login} />
                <Route path="/musicplayer" component={Layout} />
                <Route path="/artist-details" component={ArtistDetails} />
            </Switch>

        </Router>
    </div>
)

export default App