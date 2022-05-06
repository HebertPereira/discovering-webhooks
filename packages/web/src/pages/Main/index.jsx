/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import Chat from '../../components/Chat';
import { emitEvent } from '../../services/webhook';
import StatusCard from './fragments/StatusCard';
import { MainCardBox, MainContainer, MainContent } from './styles';

function Main({ cardData, chatMessages }) {
  const handleDownClick = () => {
    emitEvent('setUpdateServicesStatus', cardData);
  };
  return (
    <MainContainer>
      <MainContent>
        <MainCardBox>
          {cardData?.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <StatusCard cardData={data} />
              </React.Fragment>
            );
          })}
        </MainCardBox>
        <Chat chatMessages={chatMessages} />
      </MainContent>
    </MainContainer>
  );
}

export default Main;
