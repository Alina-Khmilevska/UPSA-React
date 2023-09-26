import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './BurgerIcon.styles';

class BurgerIcon extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('BurgerIcon will mount');
  }

  componentDidMount = () => {
    console.log('BurgerIcon mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('BurgerIcon will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('BurgerIcon will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('BurgerIcon did update');
  }

  componentWillUnmount = () => {
    console.log('BurgerIcon will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="BurgerIconWrapper">
        Test content
      </div>
    );
  }
}

BurgerIcon.propTypes = {
  // bla: PropTypes.string,
};

BurgerIcon.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BurgerIcon);
