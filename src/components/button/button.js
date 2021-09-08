import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './button.styles';

const Button = ({
  dataTestPrefix, text, onClick
}) => (
  <ButtonContainer
    data-test={`${dataTestPrefix}-button`}
    onClick={onClick}
  >
    {text}
  </ButtonContainer>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  dataTestPrefix: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  dataTestPrefix: 'button',
  onCheck: () => {}
};

export default Button;
