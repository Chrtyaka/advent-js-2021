import styled from 'styled-components';
import { Ring } from './components/ring';
import { Timer } from './components/timer';
import { useState } from 'react';

const Page = styled.div`
  align-items: center;
  background: #2b2a30;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
`;

const Wrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  display: flex;
  height: 518px;
  justify-content: center;
  position: relative;
  width: 518px;
`;

export const Pomodoro = () => {
  const [minutes, setMinutes] = useState('15');
  const [seconds, setSeconds] = useState('00');

  const [timerEnded, setTimerEnded] = useState(false);

  return (
    <Page>
      <Wrapper>
        <Ring ended={timerEnded} />
        <Timer minutes={minutes} seconds={seconds} />
      </Wrapper>
    </Page>
  );
};
