import Grid from './grid';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { mockData } from '../../constants';

describe('Grid', () => {
  const dataTestPrefix = 'dataTestPrefix';

  describe('Snapshots', () => {
    it('default snapshot render', () => {
      const tree = renderer.create(<Grid data={mockData} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with custom dataPrefix snapshot render', () => {
      const tree = renderer.create(<Grid data={mockData} dataTestPrefix={dataTestPrefix} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
