import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

  background: #ff900f;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500px;
  margin-top: 16px;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff900f')};
  }

  button {
    flex: 1;
    border: 0;
    background: transparent;
    color: #312e38;
    font-weight: bold;
  }
`;
