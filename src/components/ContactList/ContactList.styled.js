import styled from 'styled-components';

export const ListContact = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 20px;
`

export const ContactButton = styled.button`
margin-left: 20px;
padding: 7px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  &:hover,
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    border-color: lightblue;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    outline: none;
    &:hover {
      background-color: lightblue;
    }
  }
`