import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import { GridContainer, GridItem } from './grid.styles';

const Grid = ({ data, onCheck, dataTestPrefix }) => (
  <GridContainer data-test={`${dataTestPrefix}-grid`}>
    {data.map((d) => {
      const {
        id, title, checked, content
      } = d;

      return (
        <GridItem key={id}>
          <Card
            title={title}
            content={content}
            checked={checked}
            onCheck={(v) => onCheck(v, id)}
          />
        </GridItem>
      );
    })}
  </GridContainer >
);

Grid.propTypes = {
  dataTestPrefix: PropTypes.string,
  data: PropTypes.array.isRequired
};

Grid.defaultProps = {
  dataTestPrefix: 'grid',
};

export default Grid;
