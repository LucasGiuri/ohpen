import Input from './input';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Input', () => {
  const dataTestPrefix = 'dataTestPrefix';
  const defaultValue = 'defaultValue';
  const options = ['', 'defaultValueA', 'defaultValueB', 'defaultValue'];
  const onChange = jest.fn();

  describe('Snapshots', () => {
    it('default snapshot render', () => {
      const tree = renderer.create(<Input />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with custom dataTestPrefix snapshot render', () => {
      const tree = renderer.create(<Input dataTestPrefix={dataTestPrefix} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with custom defaultValue snapshot render', () => {
      const tree = renderer.create(<Input defaultValue={defaultValue} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with type text snapshot render', () => {
      const tree = renderer.create(<Input type='text' />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with type text and defaultValue snapshot render', () => {
      const tree = renderer.create(<Input type='text' defaultValue={defaultValue} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    it('with type dropdown snapshot render', () => {
      const tree = renderer.create(<Input type='dropdown' options={options} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with type dropdown and defaultValue snapshot render', () => {
      const tree = renderer.create(<Input type='dropdown' options={options} defaultValue={defaultValue} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
