import styled from "styled-components";

export const BenchmarksListContainer = styled.div`
  .descriptionContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 45%;
    margin-right: 5%;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }

  .label {
    font-size: 10px;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .input {
    height: 10px;
    width: 10px;
    margin-right: 5px;

    &:not(:last-child) {
      border: none;
    }
  }

  .listDescription {
    font-size: 10px;
  }
`;
