import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import {
  SectionContainer, SectionContent, LogoContainer, Logo
} from './section.styles';

const Section = ({ dataTestPrefix, children, showLogo }) => (
  <SectionContainer data-test={`${dataTestPrefix}-section`}>
    <SectionContent>
      {showLogo && (
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
      )}
      {children}
    </SectionContent>
  </SectionContainer>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  dataTestPrefix: PropTypes.string,
  showLogo: PropTypes.bool
};

Section.defaultProps = {
  dataTestPrefix: 'section',
  showLogo: true
};

export default Section;