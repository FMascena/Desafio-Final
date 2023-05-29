import styled from "styled-components";

const Style = styled.div`
  /* margin-bottom: 1rem; */

  > input {
    border: 3px solid #F4D1D8;
    color: #fff;
    border-radius: 1rem;
    width: 19rem;
    max-width: 300px;
    height: 57px;
    padding: 1rem;
    background: #F9F7F4;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    :focus,
    :hover {
      color: #000;
      outline: none;
      border-color: #fb1;
      background: #fff;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  > label {
    display: block;
    padding-right: 230px;
    color: #000000;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1;
  }
`;
const Error = styled.p`
  color: #000000;
  font-size: 0.875rem;
  margin: 0.25rem;
`;

export { Style, Error };