import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputField = styled.input`
  height: 36px;
  width: 300px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  border: 1px solid gray;
  padding-left: 10px;
  line-height: normal;
  font-size: large;
  color: black;
  margin-bottom: 1rem;

  &::placeholder {
    color: gray;
    opacity: 0.4;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 15px;
  font-weight: 600;
  height: 38px;
  border-radius: 6px;
  color: #fff;
  background-color: ${({ isDisabled }) => (isDisabled ? 'gray' : '#722ed1')};

  cursor: pointer;
  border: none;
  outline: none;
`;

export const style = { MainContainer, InputField, ButtonContainer, Button };
