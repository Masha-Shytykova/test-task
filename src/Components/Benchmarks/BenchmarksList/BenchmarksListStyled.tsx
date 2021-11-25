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

  .indexDescription {
    font-size: 10px;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .indexDescription-first::before {
    content: "";
    margin-right: 7px;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    background-color: rgb(197, 194, 194);
  }
  .indexDescription-second::before {
    content: "";
    margin-right: 7px;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
    border: 1px solid rgb(197, 194, 194);
  }

  /* .label {
    font-size: 10px;

    &:not(:last-child) {
      margin-right: 15px;
    }

    &::before {
      content: "";
      margin-right: 7px;
      display: inline-block;
      width: 10px;
      height: 10px;
      cursor: pointer;
      border-radius: 1px;
      background-color: red;
      //background-image: url('../images/backgroundicon/check.svg');
    }
  }

  .checkbox {
    height: 0;
    width: 0;
    appearance: none;

    &:not(:last-child) {
      border: none;
    }

    &:checked + .label::before {
      background-color: #3f51b5;
    }
  } */

  .listDescription {
    font-size: 10px;
  }

  .list li:last-child .divider {
    display: none;
  }
`;
