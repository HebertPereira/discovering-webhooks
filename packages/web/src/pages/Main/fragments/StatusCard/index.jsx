/* eslint-disable react/prop-types */
import React from 'react';

import {
  StatusCardContainer,
  StatusCardTagBox,
  StatusCardTitle
} from './styles';

const StatusCard = ({ cardData }) => {
  return (
    <StatusCardContainer>
      <StatusCardTitle>
        {cardData?.service} - {cardData?.code}
      </StatusCardTitle>
      <StatusCardTagBox online={cardData?.status}>
        <div />
        {cardData?.status ? 'online' : 'offline'}
      </StatusCardTagBox>
    </StatusCardContainer>
  );
};

export default StatusCard;
