import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useStateContext } from '../../state';
import { CHANGE_SUBSCRIPTIONS } from '../../state/actions';
import Layout from '../../components/layout/layout';
import Grid from '../../components/grid/grid';
import List from '../../components/list/list';

const Subscriptions = () => {
  const history = useHistory();
  const [{ subscriptions, user }, dispatch] = useStateContext();
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);

  const onCheck = (value, id) => {
    dispatch({ type: CHANGE_SUBSCRIPTIONS, payload: { value, id } });
  };

  useEffect(() => {
    if (!user.username) history.push({ pathname: '/login' });
  }, [user]);

  useEffect(() => {
    if (subscriptions.length) {
      const subscribedItems = subscriptions.filter((sub) => sub.checked);
      setFilteredSubscriptions(
        subscribedItems.length > 0 ? subscribedItems.map((sub) => sub.title) : []
      );
    }
  }, [subscriptions]);

  return (
    <Router>
      <Layout history={history}>
        {subscriptions.length && <Grid onCheck={onCheck} data={subscriptions} />}
        {subscriptions.length && <List data={filteredSubscriptions} />}
      </Layout>
    </Router>
  );
};

export default Subscriptions;
