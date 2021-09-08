import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Greeting, NavBarContainer, Logo, LogoAndLinksContainer, RightContent, Links, NavLink
} from './navbar.styles';
import logo from '../../assets/logo.png';
import Button from '../button/button';
import Space from '../space/space';

const Navbar = ({ username, onLogout, onClickLink, links }) => (
  <NavBarContainer>
    <LogoAndLinksContainer>
      <Logo src={logo} />
      <Links>
        {links.map((l) => {
          const { id, label } = l;
          return (
            <Fragment key={id}>
              <NavLink key={id} onClick={() => onClickLink(id)}>
                {label}
              </NavLink>
              <Space double />
            </Fragment>
          )
        })}
      </Links>
    </LogoAndLinksContainer>
    <RightContent>
      <Greeting>Welcome {username}!</Greeting>
      <Space double />
      <Button text='Logout' onClick={onLogout} />
    </RightContent>
  </NavBarContainer>
);

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
  username: PropTypes.string,
  onLogout: PropTypes.func,
  onClickLink: PropTypes.func
};

Navbar.defaultProps = {
  username: '',
  onLogout: () => {},
  onClickLink: () => {}
};

export default Navbar;
