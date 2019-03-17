import React, { Component } from 'react';
//import { getDaily } from '../../lib/api/boxoffice';
import { connect } from 'react-redux';

import * as BoxofficeActions from '../../modules/boxoffice';

interface State {}

interface Props {
  id: string;
  getDaily: Function;
}

class Test extends Component<Props> {
  componentDidMount() {
    const { getDaily } = this.props;
    getDaily();
  }

  render() {
    return <div>Test !!!!!!!!!!!</div>;
  }
}

interface ownProps {}

const mapDispatchToProps = (dispatch: any, ownProps: ownProps) => {
  return {
    getDaily: () => dispatch(BoxofficeActions.getDaily()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Test);
