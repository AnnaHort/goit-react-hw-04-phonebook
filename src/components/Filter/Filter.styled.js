import styled from 'styled-components';

export const StyledSearchInput = styled.input`
 padding: 5px;
 margin: 10px 0 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  &:hover,
  :focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    border-color: lightgray;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    outline: none;
    &:hover {
      background-color: lightgray;
    }
  }
`