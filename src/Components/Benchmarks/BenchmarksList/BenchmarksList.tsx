import { Benchmarks } from "../../../Utils/Types";
import BenchmarkItem from "../BenchmarkItem/BenchmarkItem";
import { BenchmarksListContainer } from "./BenchmarksListStyled";
import Divider from "@material-ui/core/Divider";

type Props = {
  benchmarksData: Benchmarks[];
};

function BenchmarksList({ benchmarksData }: Props) {
  return (
    <BenchmarksListContainer>
      <div className="descriptionContainer">
        <div className="wrapper">
          <input type="checkbox" className="input" id="security" />
          <label htmlFor="security" className="label">
            Security
          </label>
          <input type="checkbox" className="input" id="index" />
          <label htmlFor="index" className="label">
            Index
          </label>
        </div>
        <span className="listDescription">5 YR & 10 YR are annualized</span>
      </div>
      <ul>
        {benchmarksData.map(({ id, title, allocations, indices }) => (
          <>
            <BenchmarkItem
              key={id}
              id={id}
              title={title}
              allocations={allocations}
              indices={indices}
            />
            <Divider
              variant="inset"
              component="li"
              className="divider"
              key={title}
            />
          </>
        ))}
      </ul>
    </BenchmarksListContainer>
  );
}

export default BenchmarksList;
