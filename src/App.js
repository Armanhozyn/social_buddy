import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Header/Header';
import Posts from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
         <Router>
        <Grid container direction="column">
          <Grid item>
            <Header></Header>
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2}/>
            <Grid item xs={12} sm={8}>
              <Switch>
                <Route exact path='/'>
                  <Posts></Posts>
                </Route>
                <Route path='/Post_Details/:id'>
                  <PostDetail></PostDetail>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
            </Grid>
            <Grid item xs={false} sm={2}/>
          </Grid>
        </Grid>
        </Router>
    </div>
  );
}

export default App;
