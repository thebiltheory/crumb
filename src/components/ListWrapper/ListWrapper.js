import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import CrumbProvider, { CrumbConsumer } from '../CrumbProvider/CrumbProvider';

export default class ListWrapper extends Component {
  render() {
    return (
      <CrumbProvider>
        <section>
          <ul>
            <CrumbConsumer>
              {({ gistList }) => gistList.map(gist => <ListItem gist={gist} />)}
            </CrumbConsumer>
          </ul>
        </section>
      </CrumbProvider>
    );
  }
}
