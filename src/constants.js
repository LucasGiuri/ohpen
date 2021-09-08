export const colors = {
  white: '#FFF',
  black: '#000',
  bgGrey: '#eee',
  lightGrey: '#bebebe',
  green: '#4fbe79'
};

export const radius = {
  small: '4px',
  large: '15px',
  rounded: '50%'
};

export const mediaSizes = {
  mobile: 'max-width: 800px',
  ipad: 'max-width: 1200px'
};

export const mockData = [
  { id: 1, title: 'subscription1', checked: true, content: '1234567' },
  { id: 2, title: 'subscription2', checked: false, content: 'Lorem' },
  { id: 3, title: 'subscription3', checked: true, content: 'ipsum' },
  { id: 4, title: 'subscription4', checked: false, content: '1234567 1234567 1234567 1234567 1234567 1234567 1234567 1234567 1234567' },
  { id: 5, title: 'subscription5', checked: true, content: 'qwertyu asdfdgg zcxvbvn aesdg qewrte zcxxvc' },
  { id: 6, title: 'subscription6', checked: false, content: '1234567 test123 test123 test123 test123  test123 test123 test123 test123' },
  { id: 7, title: 'subscription7', checked: true, content: '1234567 123 123 123 123 123' }
];

export const typesOfUsers = ['HR', 'Administrator'];

export const fakeData = [
  { id: 1, username: 'Lucas', subscriptions: mockData, type: 'Administrator' },
  { id: 2, username: 'Marco', subscriptions: mockData, type: 'HR' }
];

