import React, { Component } from 'react';
import moment from 'moment';
import { Types } from '../../utils/filetypes';
import { getForks } from '../../services/github';
import Avatar from '../Avatar/Avatar';
import {
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemMeta,
  ListGroupSubheader,
  ListGroup,
  ListItemSecondaryText,
  ListDivider
} from 'rmwc/List';
import { Icon } from 'rmwc/Icon';

const types = Types();

const styles = {
  filetypeIcon: {
    background: '#e8d8ff',
    height: '45px',
    borderRadius: '3px',
    width: '37px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: '16px'
  },
  filetype: {
    color: '#70519c',
    padding: '0px 4px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    fontWeight: 900,
    fontSize: '0.4rem',
    lineHeight: 2
  },
  crumbIcon: {
    width: '18px',
    height: '18px',
    display: 'block'
  },
  forksWrapper: {
    display: 'flex',
    alignTtems: 'center'
  }
};

export default class GistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forks: []
    };
  }

  async componentDidMount() {
    this.setState({}, async () => {
      const forks = await getForks(this.props.gist.forks_url);
      this.setState({
        forks
      });
    });
  }

  render() {
    const { gist } = this.props;
    const file = Object.getOwnPropertyNames(gist.files)[0];
    const fileType = types.whatIs(gist.files[file].type);
    const forksCount =
      this.state.forks.length > 3
        ? this.state.forks.length - 3
        : this.state.forks.length;

    return (
      <ListItem tag="li" id={gist.id}>
        <div style={styles.filetypeIcon}>
          <span style={styles.filetype}>{fileType}</span>
        </div>
        <ListGroup>
          <ListItemText>{file}</ListItemText>
          <ListItemSecondaryText>
            <span>Created {moment(gist.updated_at).fromNow()}</span>
          </ListItemSecondaryText>
        </ListGroup>

        <ListItemMeta tag="div" basename="crumb-forks">
          <ListGroup style={styles.forksWrapper}>
            <Icon style={styles.crumbIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M448 96c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.6 12.9 44.3 32 55.4v52.8l-96 48-96-48v-52.8c19.1-11.1 32-31.8 32-55.4 0-35.3-28.7-64-64-64S64 60.7 64 96c0 23.6 12.9 44.3 32 55.4v92.4l128 64v52.8c-19.1 11.1-32 31.8-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.6-12.9-44.3-32-55.4v-52.8l128-64v-92.4c19.1-11.1 32-31.8 32-55.4zM128 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm128 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm128-320c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
              </svg>
            </Icon>
            <ul className="crumb-avatar-group">
              {this.state.forks.slice(0, 3).map(fork => (
                <li key={fork.owner.id}>
                  <Avatar
                    src={fork.owner.avatar_url}
                    size={24}
                    alt={fork.owner.login}
                  />
                </li>
              ))}
            </ul>
            <span>{forksCount <= 0 ? forksCount : `+${forksCount}`}</span>
          </ListGroup>
        </ListItemMeta>
      </ListItem>
    );
  }
}
