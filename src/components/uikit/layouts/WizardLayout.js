/* global __CLIENT__ */
import React from 'react';
import PropTypes from 'prop-types';

import { isBoolean, isEmpty } from 'lodash';

const WizardLayout = ({ aside, main, meta, bottom, notice, style }) => (
  <div className='uikit_wrapper' style={style}>
    <SideBar aside={aside} />
    <main className='_wrapper'>
      {main}
      {notice}
    </main>
    {meta}
  </div>
);

WizardLayout.defaultProps = {
  aside:  null,
  main:   null,
  notice: null,
  bottom: []
};

export default WizardLayout;

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReducedByUser: false,
      isReduced: __CLIENT__
        ? window.innerWidth < 1376
        : false
    };

    this.handleResize = this.handleResize.bind(this);
    this.toggleIsReducedByUser = this.toggleIsReducedByUser.bind(this);
  }

  componentDidMount() {
    if (__CLIENT__) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (__CLIENT__)
      window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      isReduced: __CLIENT__
        ? window.innerWidth < 1376
        : false
    });
  }

  toggleIsReducedByUser() {
    this.setState({ isReducedByUser: !this.state.isReducedByUser });
  }

  render() {
    const { aside, bottom } = this.props;

    const isReduced = this.state.isReducedByUser
      ? this.state.isReduced
      : this.state.isReducedByUser;

    return isBoolean(isReduced) && (
      <div className={`uikit_sidebar ${isReduced ? 'reduce' : ''}`}>
        <div className='uikit_menu vertical fluid bold'>
          <a className='item' onClick={this.toggleIsReducedByUser}>
            <i className='icon humburger iq' />
          </a>
        </div>
        {aside}
        {!isEmpty(bottom) && <div className='_last'>{bottom}</div>}
      </div>
    );
  }
}

SideBar.propTypes = {
  aside:  PropTypes.node,
  bottom: PropTypes.node
};
