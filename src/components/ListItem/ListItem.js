import React, { Component } from 'react';
import { Types } from '../../utils/filetypes';
import { getForks } from '../../services/github';

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

    return (
      <li id={gist.id}>
        <h3>{file}</h3>
        {gist.description && <h4>{gist.description}</h4>}

        <span>Created {gist.created_at}</span>
        <span>Updated {gist.updated_at}</span>
        <span>Comments {gist.comments}</span>
        <span>type {fileType}</span>
        <span> Forks {this.state.forks.length}</span>
      </li>
    );
  }
}
