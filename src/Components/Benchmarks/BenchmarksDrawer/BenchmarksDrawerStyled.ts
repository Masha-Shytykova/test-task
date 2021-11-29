import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 25px 12px;

  .benchmarkNameInput {
    margin-top: 25px;
  }

  .flexContainer {
    display: flex;
    justify-content: space-between;
  }

  .totalValueWrapper {
    display: block;
    margin-left: auto;
    width: 25%;

    & input {
      padding: 27px 12px 10px;
      font-weight: 700;
    }

    & p {
      margin-left: 14px;
      margin-right: 14px;
    }
  }

  .indicesMenu {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
  }
  .searchDescription {
    padding: 10px;
    font-size: 12px;
    text-transform: uppercase;
    color: grey;
  }

  .searchWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .addBtn {
    color: #3f51b5;
    border: 1px solid #3f51b5;
  }
  .buttonsWrapper {
    display: flex;
    justify-content: end;
  }
  .cancelButton {
    margin-right: 15px;
  }
  .MuiButton-root {
    text-transform: none;
    font-weight: 400;
  }
`;
