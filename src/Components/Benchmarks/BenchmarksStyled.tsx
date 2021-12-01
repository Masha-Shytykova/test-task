import { Container } from "@material-ui/core";
import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 40px 20px;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 210px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  border: none;
  border-radius: 5px;
  background-color: #b6afaf;
  line-height: 100%;
`;

export const StyledStepContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
margin: 20px;
background-color: white;

`;