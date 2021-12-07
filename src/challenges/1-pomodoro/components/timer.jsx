import styled from 'styled-components';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import gearIconUrl from '../../../assets/img/gear.svg';

const Wrapper = styled.div`
  align-items: center;
  background: radial-gradient(
    71.4% 71.4% at 51.7% 28.6%,
    #3a393f 0%,
    #17171a 100%
  );
  border-radius: 50%;
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  position: relative;
  width: 500px;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  font-family: 'Bebas';
  font-size: 196px;
  margin: 30px auto;
  position: relative;
  top: 30px;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px dashed white;
  background: none;
  color: white;
  font-family: 'Bebas';
  font-size: 196px;
  height: 170px;
  width: 150px;
  text-align: center;
  outline: none;
  &:disabled {
    border-bottom: none;
  }
`;

const StartButton = styled.button`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 10px;
  line-height: 20px;
  background: none;
  color: white;
  opacity: 0.5;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:hover {
    opacity: 1;
  }
`;

const SettingsButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export const Timer = ({
  minutes, seconds, updateSeconds, updateMinutes, toggleTimer,
}) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <Wrapper>
      <Container>
        <div className="minutes">
          <Input
            type="text"
            value={minutes}
            maxLength="2"
            onChange={(event) => updateMinutes(event.target.value)}
            disabled={!editMode}
          />
        </div>

        <div className="colon">:</div>

        <div className="seconds">
          <Input
            type="text"
            value={seconds}
            maxLength="2"
            onChange={(event) => updateSeconds(event.target.value)}
            disabled={!editMode}
          />
        </div>
      </Container>
      <StartButton>Start</StartButton>
      <SettingsButton onClick={toggleEditMode}>
        <img src={gearIconUrl} alt="Settings" />
      </SettingsButton>
    </Wrapper>
  );
};

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  updateMinutes: PropTypes.func.isRequired,
  updateSeconds: PropTypes.func.isRequired,
  toggleTimer: PropTypes.func.isRequired,
};
