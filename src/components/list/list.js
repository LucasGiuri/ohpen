import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer, ListItem } from './list.styles';

const List = ({ data, dataTestPrefix }) => (
  <ListContainer data-test={`${dataTestPrefix}-list`}>
    {data && data.map((text) => (
      <ListItem key={text}>
        {text.toUpperCase()}
      </ListItem>
    ))}
  </ListContainer >
);

List.propTypes = {
  dataTestPrefix: PropTypes.string,
  data: PropTypes.array.isRequired
};

List.defaultProps = {
  dataTestPrefix: 'list',
};

export default List;
