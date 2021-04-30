import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  background-color: #ebf2ed;
  max-width: 250px;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 5px #888;
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 10px 10px 20px 10px #888;
  }
`;

export default ImageContainer;
