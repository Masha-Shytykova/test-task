import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 30px 20px;
  border-radius: 4px;
  background-color: white;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .MuiFormControlLabel-label {
    font-size: 12px;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const StyledText = styled.p`
  margin-bottom: 20px;
  line-height: 1.4;
  font-size: 12px;
`;

export const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  width: 100px;
  padding: 5px;
  font-size: 10px;
  border: 1px solid #5c5cfa;
  border-radius: 5px;
  color: #5c5cfa;
  fill: #5c5cfa;
`;

export const StyledButtonText = styled.span`
  margin-left: 5px;
`;
