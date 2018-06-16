import React, { Component } from 'react';
import WithCrumbContext from '../WithCrumbContext/WithCrumbContext';
import { CrumbContext } from '../../App';
import { debounce } from 'lodash.debounce';
import { TextField } from 'rmwc/TextField';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFormInput: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchforminput !== prevProps.searchforminput) {
      this.setState({
        searchFormInput: this.props.searchforminput
      });
    }
  }

  render() {
    return (
      <CrumbContext.Consumer>
        {({ user, searchUser, searchFormInput }) => (
          <form>
            <TextField
              withLeadingIcon="search"
              style={{ width: '100%' }}
              onChange={searchUser}
              outlined
              value={this.state.fieldValue}
              label="Crumbs of .."
              searchforminput={searchFormInput}
              placeholder={user}
            />
          </form>
        )}
      </CrumbContext.Consumer>
    );
  }
}

export default WithCrumbContext(SearchForm);
