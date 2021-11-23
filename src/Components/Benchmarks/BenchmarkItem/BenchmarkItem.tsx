import { Allocation, Index } from "../../../Utils/Types";
import { BenchmarkItemContainer } from "./BenchmarkItemStyled";

type Props = {
  id: string;
  title: string;
  allocations: Allocation[];
  indices: Index[];
};

function BenchmarkItem({ id, title, allocations, indices }: Props) {
  return (
    <BenchmarkItemContainer>
      <span className="firstColumn">{id}</span>
      <span className="secondColumn">{title}</span>
      <div className="thirdColumn">
        <span className="groupTitle">allocations</span>
        <ul className="allocationsList">
          {allocations.map(({ value, title, security }) => (
            <li className="allocationsItem" key={title}>
              <span className={security ? "security" : "index"}>{value}</span>
              <span className="allocationTitle">{title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="fourthColumn">
        <ul className="indicesList">
          {indices.map(({ period, value }) => (
            <li className="indicesItem" key={period}>
              <span className="indexPeriod">{period}</span>
              <span className="indexValue">{value}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="fifthColumn" type="button">
        ...
      </button>
    </BenchmarkItemContainer>
  );
}

export default BenchmarkItem;
