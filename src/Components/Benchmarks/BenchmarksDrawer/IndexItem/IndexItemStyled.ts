import styled from "styled-components";

export const IndexItemContainer = styled.li`
  display: flex;
  align-items: flex-start;
  margin-right: -7%;
  padding-top: 10px;
  .decoration {
    width: 15%;
    padding: 12px 0 0 4px;
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
`;
