import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useStateContext } from '../../state';
import Button from '../../components/button/button';
import Section from '../../components/section/section';
import Layout from '../../components/layout/layout';
import Space from '../../components/space/space';
import Input, { TYPES } from '../../components/input/input';
import { typesOfUsers, fakeData } from '../../constants';
import { ADD_SUBSCRIPTIONS, ADD_USER } from '../../state/actions';

const Login = () => {
  const history = useHistory();
  const [{ user }, dispatch] = useStateContext();
  const [name, setName] = useState('');
  const [typeOfUser, setTypeOfUser] = useState('HR');

  useEffect(() => {
    if (user.username) history.push({ pathname: '/subscriptions' });
  }, [user]);

  const onClick = () => {
    const matchUser = fakeData.find((u) => u.username === name && u.type === typeOfUser);
    if (matchUser) {
      const { id, username, type, subscriptions } = matchUser;
      dispatch({ type: ADD_USER, payload: { id, username, type } });
      dispatch({ type: ADD_SUBSCRIPTIONS, payload: subscriptions });
    }
  };

  const onUsernameChange = (value) => {
    setName(value);
  };

  const onChangeType = (value) => {
    setTypeOfUser(value);
  };

  return (
    <Router>
      <Layout showNavbar={false}>
        <Section showLogo>
          <Input label='Username' onChange={onUsernameChange} />
          <Space vertical double />
          <Input
            label='User group'
            type={TYPES.dropdown}
            defaultValue='HR'
            options={typesOfUsers}
            defaultValue={typesOfUsers[0]}
            onChange={onChangeType}
          />
          <Space vertical double />
          <Space vertical double />
          <Button text='Log in' onClick={onClick} />
        </Section>
      </Layout>
    </Router>
  )
};

export default Login;