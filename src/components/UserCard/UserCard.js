import React, { Component } from 'react';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardActionButtons,
  CardAction,
  CardActions,
  CardActionIcons
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';

export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }
  componentDidUpdate() {
    if (this.props.user !== this.state.user) {
      this.setState({
        user: this.props.user
      });
    }
  }

  render() {
    const { user } = this.props;
    return (
      <Card>
        <CardPrimaryAction>
          <CardMedia
            sixteenByNine
            style={{
              backgroundImage: `url(${user.avatar_url})`
            }}
          />
          <div style={{ padding: '0 1rem 1rem 1rem' }}>
            <Typography use="headline6" tag="h2">
              {user.login}
            </Typography>
            <Typography
              use="subtitle2"
              tag="h3"
              theme="text-secondary-on-background"
              style={{ marginTop: '-1rem' }}
            >
              {user.location}
            </Typography>
            <Typography
              use="body1"
              tag="div"
              theme="text-secondary-on-background"
            >
              {user.bio}
            </Typography>
          </div>
        </CardPrimaryAction>
        <CardActions>
          <CardActionButtons>
            {user.blog && (
              <CardAction>
                <a href={user.blog}>Website</a>
              </CardAction>
            )}
          </CardActionButtons>
        </CardActions>
      </Card>
    );
  }
}
