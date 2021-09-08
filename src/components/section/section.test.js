import Section from './section';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Section', () => {
  const text = 'title';
  const dataTestPrefix = 'dataTestPrefix';

  describe('Snapshots', () => {
    it('default snapshot render', () => {
      const tree = renderer.create(<Section>asd</Section>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with custom dataTestPrefix snapshot render', () => {
      const tree = renderer.create(<Section dataTestPrefix={dataTestPrefix}>asd</Section>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
