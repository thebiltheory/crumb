import React, { Component } from 'react';
import WithCrumbContext from '../WithCrumbContext/WithCrumbContext';
import { CrumbContext } from '../../App';
import { debounce } from 'lodash.debounce';

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
            <input
              searchforminput={searchFormInput}
              type="text"
              name="user"
              value={this.state.fieldValue}
              placeholder={user}
              onChange={searchUser}
            />
          </form>
        )}
      </CrumbContext.Consumer>
    );
  }
}

export default WithCrumbContext(SearchForm);
