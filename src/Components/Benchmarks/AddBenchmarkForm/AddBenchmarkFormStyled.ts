import styled from "styled-components";

export const BenchmarkFormContainer = styled.div`
  .formTitle {
    margin-bottom: 20px;

    font-size: 20px;
    font-weight: 500;

    &:after {
      content: "";
      margin-top: 15px;
      background-color: rgb(197, 194, 194);
      height: 2px;
      display: block;
    }
  }

  .formDescription {
    line-height: 1.3;
    font-size: 12px;
  }

  .formContainer {
    padding: 0 12px;
  }

  .colorWrapper {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 7px;
    border-bottom: 1px solid grey;
    background-color: rgb(237, 234, 234);
  }
  .label {
    font-size: 10px;
    margin-bottom: 5px;
    padding-left: 2px;
  }

  .benchmarkId {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 14px;

    &:hover,
    &:focus {
      border: none;
    }
  }
  .input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-size: 14px;
  }

  .validationRules {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    font-size: 10px;
    color: grey;
  }

  .inputWrapperSmall {
    width: 30%;
    margin-left: auto;
  }
  .colorWrapperSmall {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid grey;
    background-color: rgb(237, 234, 234);
  }

  .indexRow {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
  }

  .pagination {
    margin-right: 25px;
  }
  .noColorWrapperSmall {
    display: flex;
    margin-top: 10px;
    padding: 10px;
    border-bottom: 1px solid grey;
    font-weight: 700;
  }
  .justifyCenter {
    justify-content: center;
  }
  .inputBold {
    font-weight: 700;
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
  .deleteBtn {
    position: absolute;
    top: 0;
    right: -34px;
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
