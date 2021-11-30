import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 30px 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 10px 10px 10px -5px rgba(0, 0, 0, 0.3);

  .addBtn {
    padding: 0 24px;
    text-transform: none;

    font-weight: 400;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .MuiFormControlLabel-label {
    font-size: 14px;
  }
`;

export const StyledSpan = styled.span`
  margin-right: 20px;
  font-size: 14px;
`;
