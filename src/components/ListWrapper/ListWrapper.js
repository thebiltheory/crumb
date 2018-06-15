import React from 'react';
import ListItem from '../ListItem/ListItem';
import WithCrumbContext from '../WithCrumbContext/WithCrumbContext';
import { CrumbContext } from '../../App';

const ListWrapper = () => (
  <section>
    <ul>
      <CrumbContext>
        {({ gistList }) => gistList.map(gist => <ListItem gist={gist} />)}
      </CrumbContext>
    </ul>
  </section>
);

export default WithCrumbContext(ListWrapper);
