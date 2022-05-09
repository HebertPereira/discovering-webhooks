/* eslint-disable react/prop-types */
import React from 'react';

import chatbotImage from '../../assets/images/chat-bot.png';
import { emitEvent } from '../../services/webhook';
import DefaultInput from '../common/DefaultInput';
import SendButton from '../common/SendButton';
import BoxMessages from './fragments/BoxMessages';
import {
  ChatContainer,
  ChatContent,
  ChatHeader,
  ChatHeaderProfileBox,
  ChatHeaderProfileImageBox,
  ChatHeaderProfileName,
  ChatHeaderProfileStatus,
  ChatSendMessageBox
} from './styles';

function Chat({ chatMessages }) {
  const hanldeFormSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.message;
    // value = value.replace(/\s/g, '');
    if (value !== '') {
      emitEvent('setUpdateChatMessages', value);
      event.target.elements.message.value = '';
    }
  };
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderProfileImageBox>
          <img src={chatbotImage} alt="chat bot profile icon" />
        </ChatHeaderProfileImageBox>
        <ChatHeaderProfileBox>
          <ChatHeaderProfileName>Server</ChatHeaderProfileName>
          <ChatHeaderProfileStatus>online à 3 dias</ChatHeaderProfileStatus>
        </ChatHeaderProfileBox>
      </ChatHeader>
      <ChatContent>
        <BoxMessages chatMessages={chatMessages} />
      </ChatContent>
      <ChatSendMessageBox onSubmit={hanldeFormSubmit}>
        <DefaultInput id="message" />
        <SendButton />
      </ChatSendMessageBox>
    </ChatContainer>
  );
}

export default Chat;
