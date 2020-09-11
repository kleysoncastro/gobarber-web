import styled, { css } from 'styled-components';

interface ContainerPros {
  isFocused: boolean;
  isFilled: boolean;
}
const focused = css`
  color: #ff900f;
  border-color: #ff900f;
`;

const filled = css`
  color: #ff900f;
`;
export const Container = styled.div<ContainerPros>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isFocused && focused}
  ${props => props.isFilled && filled}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
