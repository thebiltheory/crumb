import React, { Component } from 'react';
import './App.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import SearchCrumbs from './components/SearchCrumbs/SearchCrumbs';
import { getUserGistList } from './services/github';

export const CrumbContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistList: [],
      user: 'thebiltheory',
      searchFormInput: '',
      searchUser: e => {
        this.getUserGists(e.target.value);

        this.setState({
          searchFormInput: e.target.value
        });
      }
    };
  }

  async componentDidMount() {
    this.getUserGists();
  }

  async getUserGists(user) {
    this.setState(
      {
        searching: true
      },
      async () => {
        const gists = await getUserGistList(user);
        this.setState({
          searching: false,
          gistList: typeof gists !== 'undefined' ? gists.list : []
        });
      }
    );
  }

  render() {
    return (
      <CrumbContext.Provider value={this.state}>
        <header>CRUMB</header>
        <main>
          <SearchCrumbs />
          {this.state.searching ? <h1>SEARCHING ...</h1> : <ListWrapper />}
        </main>
        <footer>FOOTER</footer>
      </CrumbContext.Provider>
    );
  }
}

export default App;
