import styled from "styled-components";

export const IndexItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  margin-right: -7%;
  padding-top: 10px;
  .decoration {
    width: 15%;
    padding: 24px 0 0 4px;
    font-size: 10px;
  }
  .indexTitleWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;

    & .label {
      font-size: 12px;
      padding-bottom: 10px;
    }
  }
  .indexValueWrapper {
    width: 25%;
  }
  .deleteBtn {
    width: 7%;
  }
  .inputAdornment p {
    padding: 23px 0 6px 0;
  }
`;
