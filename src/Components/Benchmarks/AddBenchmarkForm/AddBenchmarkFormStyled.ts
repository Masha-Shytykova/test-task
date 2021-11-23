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
  }

  .formContainer {
    padding: 0 5px;
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 7px;
    border-bottom: 1px solid grey;
    background-color: rgb(237, 234, 234);
  }
  .label {
    font-size: 12px;
    margin-bottom: 5px;
    padding-left: 2px;
  }

  .benchmarkId {
    width: 100%;
    background-color: transparent;
    border: none;

    &:hover,
    &:focus {
      border: none;
    }
  }
  .input {
    background-color: transparent;
    border: none;
  }
`;
