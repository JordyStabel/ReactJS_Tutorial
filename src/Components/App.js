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

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            All the dankness will come here!!
          </p>
        </header>
      </div>
    );
  }
}*/

//export default App;