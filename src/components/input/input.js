import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Space from '../space/space';
import {
  InputContainer, InputText, InputSelect, Label
} from './input.styles';

export const TYPES = {
  text: 'text',
  dropdown: 'dropdown'
};

const Input = ({
  dataTestPrefix, label, type, options, defaultValue, onChange
}) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeInputValue = (e) => {
    const { target: { value } } = e;
    setValue(value);
    if (onChange) onChange(value);
  };

  return (
    <InputContainer data-test={`${dataTestPrefix}-input-container`}>
      <Label>{label}</Label>
      <Space double />
      {type === TYPES.text && (
        <InputText
          value={value}
          onChange={onChangeInputValue}
          data-test={`${dataTestPrefix}-input`}
        />
      )}
      {type === TYPES.dropdown && (
        <InputSelect
          onChange={onChangeInputValue}
          value={value}
          data-test={`${dataTestPrefix}-input-select`}
        >
          {options.map((opt) => <option key={opt}>{opt}</option>)}
        </InputSelect>
      )}
    </InputContainer>
  )
};

Input.propTypes = {
  dataTestPrefix: PropTypes.string,
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  onChange: PropTypes.func
};

Input.defaultProps = {
  dataTestPrefix: 'input',
  type: Object.keys(TYPES)[0],
  options: [],
  defaultValue: '',
  onChange: undefined
};

export default Input;
