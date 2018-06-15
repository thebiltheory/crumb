import React, { Component } from 'react';
import './App.css';
import ListWrapper from './components/ListWrapper/ListWrapper';

class App extends Component {
  render() {
    return (
      <div>
        <header>CRUMB</header>
        <main>
          <ListWrapper />
        </main>
        <footer>FOOTER</footer>
      </div>
    );
  }
}

export default App;
