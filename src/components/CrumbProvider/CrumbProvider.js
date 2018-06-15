import React, { Component } from 'react';
import { getUserGistList } from '../../services/github';

const CrumbContext = React.createContext();

export default class CrumbProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gistList: []
    };
  }

  async componentDidMount() {
    const gists = await getUserGistList();
    this.setState({
      gistList: gists.list
    });
  }

  render() {
    const { children } = this.props;
    return (
      <CrumbContext.Provider value={this.state}>
        {children}
      </CrumbContext.Provider>
    );
  }
}

export const CrumbConsumer = CrumbContext.Consumer;
