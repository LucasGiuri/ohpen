import Space from './space';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('Space', () => {
  const width = '1230px';
  const height = '1254px';

  it('default snapshot render', () => {
    const tree = renderer.create(<Space />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with double snapshot render', () => {
    const tree = renderer.create(<Space double />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with half snapshot render', () => {
    const tree = renderer.create(<Space half />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with vertical snapshot render', () => {
    const tree = renderer.create(<Space vertical />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with custom width snapshot render', () => {
    const tree = renderer.create(<Space width={width} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('with custom height snapshot render', () => {
    const tree = renderer.create(<Space height={height} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
