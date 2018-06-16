import React, { Component } from 'react';
import SearchForm from './SearchForm';
import WithCrumbContext from '../WithCrumbContext/WithCrumbContext';
import { CrumbContext } from '../../App';
import UserCard from '../UserCard/UserCard';
import { ListDivider } from 'rmwc/List';

class SearchCrumbs extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <ListDivider />
        <CrumbContext>
          {({ userProfile }) => <UserCard user={userProfile} />}
        </CrumbContext>
      </div>
    );
  }
}

export default WithCrumbContext(SearchCrumbs);
