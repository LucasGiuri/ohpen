import {
  ADD_SUBSCRIPTIONS, CHANGE_SUBSCRIPTIONS, ADD_USER, CLEAR_ALL
} from './actions';

const subscriptionsReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SUBSCRIPTIONS:
      return [...state, ...payload];
    case CHANGE_SUBSCRIPTIONS: {
      const newPayload = [...state];
      return newPayload.map((obj) => {
        if (obj.id === payload.id) obj.checked = payload.value;
        return obj;
      });
    }
    default:
      return state;
  }
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return { ...state, ...payload };
    case CLEAR_ALL:
      return {};
    default:
      return state;
  }
};

const reducers = ({ subscriptions, user }, action) => ({
  subscriptions: subscriptionsReducer(subscriptions, action),
  user: userReducer(user, action)
})

export default reducers;