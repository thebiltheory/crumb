import React, { PureComponent } from 'react';

const WithCrumbContext = Component =>
  class CrumbStore extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component {...this.props} />;
    }
  };

export default WithCrumbContext;
