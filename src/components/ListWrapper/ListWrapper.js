import React from 'react';
import GistItem from '../GistItem/GistItem';
import WithCrumbContext from '../WithCrumbContext/WithCrumbContext';
import { CrumbContext } from '../../App';
import { List } from 'rmwc/List';

import { Card } from 'rmwc/Card';

const ListWrapper = () => (
  <Card outlined>
    <List twoLine tag="ul">
      <CrumbContext>
        {({ gistList }) =>
          gistList.map(gist => <GistItem key={gist.node_id} gist={gist} />)
        }
      </CrumbContext>
    </List>
  </Card>
);

export default WithCrumbContext(ListWrapper);
