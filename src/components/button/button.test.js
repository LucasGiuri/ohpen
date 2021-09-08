import Button from './button';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Button', () => {
  const text = 'title';
  const dataTestPrefix = 'dataTestPrefix';

  describe('Snapshots', () => {
    it('default snapshot render', () => {
      const tree = renderer.create(<Button text={text} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with custom dataTestPrefix snapshot render', () => {
      const tree = renderer.create(<Button text={text} dataTestPrefix={dataTestPrefix} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
