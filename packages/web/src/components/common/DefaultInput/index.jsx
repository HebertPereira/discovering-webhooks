/* eslint-disable react/prop-types */
import React from 'react';

import { DefaultInputContainer, InputDefault } from './styles';

const DefaultInput = ({ id }) => {
  return (
    <DefaultInputContainer>
      <InputDefault id={id} />
    </DefaultInputContainer>
  );
};

export default DefaultInput;
