import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, LayoutContainer } from './layout.styles';
import NavbarContainer from '../../containers/navbar/navbar';

const Layout = ({ children, showNavbar, history }) => (
  <Router>
    <Wrapper>
      {showNavbar && <NavbarContainer history={history} />}
      <LayoutContainer>
        {children}
      </LayoutContainer>
    </Wrapper>

  </Router>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.object.isRequired,
  showNavbar: PropTypes.bool
};

Layout.defaultProps = {
  showNavbar: true
};

export default Layout;
