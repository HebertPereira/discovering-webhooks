import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: right;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const FooterText = styled.span`
  font-size: clamp(0.2rem, 0.4rem + 0.8vw, 4rem);
`;
