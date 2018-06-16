import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import './App.css';
import ListWrapper from './components/ListWrapper/ListWrapper';
import SearchCrumbs from './components/SearchCrumbs/SearchCrumbs';
import { getUserGistList, getUserProfileFor } from './services/github';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { LinearProgress } from 'rmwc/LinearProgress';
import CrumbLogo from './components/Logo/Logo';
import CrumbHeader from './components/CrumbHeader/CrumbHeader';

/**
 * Only imports styles for the Button component.
 */
import '@material/list/dist/mdc.list.min.css';
import '@material/textfield/dist/mdc.textfield.min.css';
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/card/dist/mdc.card.min.css';
import '@material/linear-progress/dist/mdc.linear-progress.min.css';
import '@material/typography/dist/mdc.typography.min.css';
import '@material/button/dist/mdc.button.min.css';

export const CrumbContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistList: [],
      user: 'gaearon',
      userProfile: {},
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
        const userProfile = await getUserProfileFor(user);
        this.setState({
          searching: false,
          gistList: typeof gists !== 'undefined' ? gists.list : [],
          userProfile: typeof userProfile !== 'undefined' ? userProfile : {}
        });
      }
    );
  }

  render() {
    return (
      <CrumbContext.Provider value={this.state}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </Helmet>

        <Grid tag="div">
          <GridCell span="1" />
          <GridCell span="3">
            <CrumbHeader />
            <SearchCrumbs />
            <footer>
              <Typography use="body2" />

              <div style={{ padding: '1rem 1rem 1rem 1rem' }}>
                <Typography use="body2">
                  By{' '}
                  <a href="http://twitter.com/@thebiltheory">@thebiltheory</a>
                </Typography>
                <Typography
                  use="caption"
                  tag="span"
                  theme="text-secondary-on-background"
                >
                  {' '}
                  © {moment().year()}
                </Typography>
              </div>
            </footer>
          </GridCell>
          <GridCell span="7" phone="3" align="middle" tag="main">
            {this.state.searching ? (
              <LinearProgress determinate={!this.state.searching} />
            ) : (
              <ListWrapper />
            )}
          </GridCell>
          <GridCell span="1" />
        </Grid>
      </CrumbContext.Provider>
    );
  }
}

export default App;
