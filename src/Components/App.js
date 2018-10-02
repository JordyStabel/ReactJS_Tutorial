import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Logic from './Logic';

class App extends Component {
  render() { 
    return (
      <Fragment>
        <Header/>

        <Logic/>

        <Footer/>
      </Fragment>
    );
  }
}

export default App;