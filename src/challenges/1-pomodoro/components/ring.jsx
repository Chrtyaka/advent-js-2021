import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  stroke: #09a65a;
  top: 0;
  z-index: 1;
`;

export const Ring = () => (
  <Wrapper>
    <svg width="518" height="518" viewBox="0 0 518 518">
      <circle strokeWidth="9px" x="0" y="y" cx="259" cy="259" r="254" />
    </svg>
  </Wrapper>
);
