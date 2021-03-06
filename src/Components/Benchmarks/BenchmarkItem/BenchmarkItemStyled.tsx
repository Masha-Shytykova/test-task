import styled from "styled-components";

export const BenchmarkItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;

  .firstColumn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
  }

  .verticalDivider {
    position: relative;
    padding-right: 30px;
    height: 50px;
    overflow: hidden;
  }

  .line {
    width: 100%;
  }
  .angle {
    position: absolute;
    top: 50%;
    left: 0;
    height: 8px;
    width: 8px;

    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    transform: translate(-50%, -50%) rotate(45deg);
    overflow: hidden;
  }
  .secondColumn {
    display: flex;
    align-items: center;
    width: 25%;
    height: 50px;
  }

  //////////////////////// thirdColumn
  .thirdColumn {
    width: 33%;
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
    width: 17%;
    display: flex;
    align-items: flex-start;
  }

  .indicesList {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
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
  }

  .MuiIconButton-root:hover {
    background-color: transparent;
  }
  .divider {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80%;
    margin-left: auto;
  }
`;
