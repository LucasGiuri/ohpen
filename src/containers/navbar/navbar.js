import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { CLEAR_ALL } from '../../state/actions';
import Navbar from '../../components/navbar/navbar';
import { useStateContext } from '../../state';


const NavbarContainer = ({ history }) => {
  const initialLinksState = [
    { id: '/dashboard', label: 'Dashboard' },
    { id: '/subscriptions', label: 'Subscriptions' }
  ];
  const [{ user }, dispatch] = useStateContext();
  const [links, setLinks] = useState(initialLinksState);

  const onLogout = () => {
    dispatch({ type: CLEAR_ALL });
  };

  const onClickLink = (pathname) => {
    return history.push(pathname);
  };

  useEffect(() => {
    if (user.username) {
      if (user.type === 'HR') {
        const newLinksState = initialLinksState.filter((l) => l.id !== '/dashboard');
        setLinks(newLinksState);
      }
    }
  }, [user]);

  return (
    <Router>
      <Navbar
        username={user ? user.username : ''}
        onClickLink={onClickLink}
        onLogout={onLogout}
        links={links}
      />
    </Router>
  );
};

export default NavbarContainer;