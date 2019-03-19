import React, { Component } from 'react';

interface Props {
  name: string;
}

class Profile extends Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <div>프로필</div>
        <div>{name}</div>
      </React.Fragment>
    );
  }
}

export default Profile;
