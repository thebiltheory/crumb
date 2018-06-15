import React, { Component } from 'react';
import { Types } from '../../utils/filetypes';
import { getForks } from '../../services/github';
import Avatar from '../Avatar/Avatar';

const types = Types();

export default class ListItem extends Component {
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
      <li id={gist.id}>
        <h3>{file}</h3>
        {gist.description && <h4>{gist.description}</h4>}
        <span>Created {gist.created_at}</span>
        <span>Updated {gist.updated_at}</span>
        <span>Comments {gist.comments}</span>
        <span>type {fileType}</span>
        {this.state.forks.slice(0, 3).map(fork => (
          <div>
            <Avatar
              src={fork.owner.avatar_url}
              size={30}
              alt={fork.owner.login}
            />
            <span>+{forksCount}</span>
          </div>
        ))}
      </li>
    );
  }
}
