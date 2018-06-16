import React, { Component } from 'react';
import WithCrumbContext from '../WithCrumbContext/WithCrumbContext';
import { CrumbContext } from '../../App';
import { debounce } from 'lodash.debounce';
import { TextField } from 'rmwc/TextField';
import { config } from '../../crumb-config';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFormInput: config.default_user
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
        {({ searchUser, searchFormInput }) => (
          <form>
            <TextField
              withLeadingIcon="search"
              style={{ width: '100%' }}
              onChange={searchUser}
              value={this.state.fieldValue}
              label="Crumbs of .."
              searchforminput={searchFormInput}
              outlined
            />
          </form>
        )}
      </CrumbContext.Consumer>
    );
  }
}

export default WithCrumbContext(SearchForm);
