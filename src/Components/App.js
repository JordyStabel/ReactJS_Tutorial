import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Content from './Content';

class App extends Component {
  render() { 
    return (
      <Fragment>
        <Header/>

        <Content/>

        <Footer/>
      </Fragment>
    );
  }
}

export default App;