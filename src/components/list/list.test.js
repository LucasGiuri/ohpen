import List from './list';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('List', () => {
  const dataTestPrefix = 'dataTestPrefix';
  const fakeData = [
    'subscription1', 'subscription2', 'subscription3', 'subscription4',
    'subscription100', 'subscription200', 'subscription300', 'subscriptiona4',
    'subscription1000', 'subscription2000', 'subscription0003', 'subscriptions4'
  ];

  describe('Snapshots', () => {
    it('default snapshot render', () => {
      const tree = renderer.create(<List data={fakeData} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with custom dataPrefix snapshot render', () => {
      const tree = renderer.create(<List data={fakeData} dataTestPrefix={dataTestPrefix} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
