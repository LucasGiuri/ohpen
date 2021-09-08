import React from 'react';
import PropTypes from 'prop-types';

import {
  CardContainer, CardHeader, Title, CheckBoxWrapper, CheckBoxLabel, CardContent, CheckBox
} from './card.styles';

const Card = ({
  dataTestPrefix, title, content, checked, onCheck
}) => (
  <CardContainer data-test={`${dataTestPrefix}-card`}>
    <CardHeader>
      <Title data-test={`${dataTestPrefix}-card-title`}>
        {title.toUpperCase()}
      </Title>
      <CheckBoxWrapper>
        <CheckBox
          type='checkbox'
          checked={checked}
        />
        <CheckBoxLabel htmlFor='checkbox' onClick={() => onCheck(!checked)} />
      </CheckBoxWrapper>
    </CardHeader>
    <CardContent data-test={`${dataTestPrefix}-card-content`}>
      {content}
    </CardContent>
  </CardContainer>
);

Card.propTypes = {
  dataTestPrefix: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  isChecked: PropTypes.bool,
  onCheck: PropTypes.func
};

Card.defaultProps = {
  dataTestPrefix: 'card',
  isChecked: false,
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  onCheck: () => { }
};

export default Card;
