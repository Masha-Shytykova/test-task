import { Allocation, Index } from "../../../Utils/Types";
import { BenchmarkItemContainer } from "./BenchmarkItemStyled";
import Divider from "@material-ui/core/Divider";
import SimpleMenu from "./ItemMenu/ItemMenu";

interface Props {
  id: string;
  title: string;
  allocations: Allocation[];
  indices: Index[];
  openModal: (benchmarkId: string) => void;
  deleteBenchmark: (benchmarkId: string) => void;
}

function BenchmarkItem({
  id,
  title,
  allocations,
  indices,
  openModal,
  deleteBenchmark,
}: Props) {
  return (
    <BenchmarkItemContainer>
      <div className="firstColumn">
        <div>{id}</div>
        <div className="verticalDivider">
          <Divider orientation="vertical" />
          <div className="angle"></div>
        </div>
      </div>
      <div className="secondColumn">{title}</div>
      <div className="thirdColumn">
        <span className="groupTitle">allocations</span>
        <ul className="allocationsList">
          {allocations.map(({ value, title, security }) => (
            <li className="allocationsItem" key={title}>
              <span
                className={security ? "security" : "index"}
              >{`${value}%`}</span>
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
      <div className="fifthColumn">
        <SimpleMenu
          openModal={openModal}
          deleteBenchmark={deleteBenchmark}
          id={id}
        />
      </div>
      <Divider variant="inset" className="divider" />
    </BenchmarkItemContainer>
  );
}

export default BenchmarkItem;
