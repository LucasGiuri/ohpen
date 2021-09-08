import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Layout from '../../components/layout/layout';
import { useStateContext } from '../../state';

const Dashboard = () => {
  const history = useHistory();
  const [{ user }, _] = useStateContext();

  useEffect(() => {
    if (!user.username || user.type !== 'Administrator') history.push({ pathname: '/login' });
  }, [user]);

  return (
    <Router>
      <Layout history={history}>
        dashboard
      </Layout>
    </Router>
  );
};

export default Dashboard;
