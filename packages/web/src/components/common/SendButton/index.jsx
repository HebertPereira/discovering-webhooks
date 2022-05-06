import React from 'react';

import SendIcon from '../../../assets/icons/icon-send.png';
import { ButtonSend, SendButtonContainer } from './styles';

const SendButton = () => {
  return (
    <SendButtonContainer>
      <ButtonSend type="submit">
        <img src={SendIcon} alt="Button send icon" />
      </ButtonSend>
    </SendButtonContainer>
  );
};

export default SendButton;
