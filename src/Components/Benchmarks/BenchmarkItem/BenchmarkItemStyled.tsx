import styled from "styled-components";

export const BenchmarkItemContainer = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;

  .firstColumn {
    width: 20%;
    border-right: 1px solid grey;
  }
  .secondColumn {
    width: 25%;
  }

  //////////////////////// thirdColumn
  .thirdColumn {
    width: 35%;
  }

  .groupTitle {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
    color: #9db658;
  }
  .allocationsList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3px;
  }
  .allocationsItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    //flex-basis: calc(100% / 5 - 3px);
    width: 55px;
    margin-right: 3px;
    margin-bottom: 5px;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
  }

  .index {
    width: 100%;
    height: 22px;
    line-height: 22px;
    border: 1px solid rgb(197, 194, 194);
  }

  .security {
    width: 100%;
    height: 22px;
    line-height: 22px;
    background-color: rgb(197, 194, 194);
  }
  .allocationTitle {
    width: 100%;
    margin-top: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  //////////////////////// fourthColumn
  .fourthColumn {
    width: 15%;
  }

  .indicesList {
    display: flex;
    align-items: flex-start;
  }

  .indicesItem {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: calc(100% / 3 - 5px);
    margin-left: 5px;
  }

  .indexPeriod {
    margin-bottom: 7px;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
    color: #9db658;
  }

  .fifthColumn {
    width: 5%;
    border: none;
    background-color: transparent;
    transform: rotate(90deg);
  }
`;
