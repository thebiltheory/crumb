import React, { Component } from 'react';
import { Typography } from 'rmwc/Typography';
import CrumbLogo from '../Logo/Logo';

export default class CrumbHeader extends Component {
  render() {
    return (
      <header>
        <CrumbLogo />
        <Typography use="body2" tag="h3" theme="text-secondary-on-background">
          Interspersed code crumbs.
        </Typography>
      </header>
    );
  }
}
