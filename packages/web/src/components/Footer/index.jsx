/* eslint-disable react/prop-types */
import React from 'react';

import { FooterContainer, FooterText } from './styles';

function Footer({ data }) {
  return (
    <FooterContainer>
      <FooterText>server execution time: {data}</FooterText>
    </FooterContainer>
  );
}

export default Footer;
