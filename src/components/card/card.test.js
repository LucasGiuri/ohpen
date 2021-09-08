import Card from './card';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Card', () => {
  const title = 'title';
  const dataTestPrefix = 'dataTestPrefix';
  const content = 'customContent';
  const onCheck = jest.fn();

  describe('Snapshots', () => {
    it('default snapshot render', () => {
      const tree = renderer.create(<Card title={title} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with custom dataTestPrefix snapshot render', () => {
      const tree = renderer.create(<Card title={title} dataTestPrefix={dataTestPrefix} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with isChecked = true snapshot render', () => {
      const tree = renderer.create(<Card title={title} isChecked />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with isChecked = false snapshot render', () => {
      const tree = renderer.create(<Card title={title} isChecked={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with custom content snapshot render', () => {
      const tree = renderer.create(<Card title={title} content={content} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
