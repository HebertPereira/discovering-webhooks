/* eslint-disable react/prop-types */
import React from 'react';

import {
  BoxMessagesCard,
  BoxMessagesContainer,
  BoxMessagesContent
} from './styles';

const BoxMessages = ({ chatMessages }) => {
  return (
    <BoxMessagesContainer>
      {chatMessages?.map((message) => {
        return (
          <BoxMessagesContent
            key={message.id}
            isServer={message.user === 'Server'}
          >
            <BoxMessagesCard isServer={message.user === 'Server'}>
              <span>{message.message}</span>
            </BoxMessagesCard>
          </BoxMessagesContent>
        );
      })}
    </BoxMessagesContainer>
  );
};

export default BoxMessages;
