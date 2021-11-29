import { Benchmarks } from "../../../Utils/Types";
import BenchmarkItem from "../BenchmarkItem/BenchmarkItem";
import { BenchmarksListContainer } from "./BenchmarksListStyled";

interface Props {
  benchmarksData: Benchmarks[];
  openModal: (benchmarkId: string) => void;
  deleteBenchmark: (benchmarkId: string) => void;
}

function BenchmarksList({ benchmarksData, openModal, deleteBenchmark }: Props) {
  return (
    <BenchmarksListContainer>
      <div className="descriptionContainer">
        <div className="wrapper">
          <span className="indexDescription indexDescription-first">
            Security
          </span>
          <span className="indexDescription indexDescription-second">
            Index
          </span>

          {/* <input type="checkbox" className="checkbox" id="security" />
          <label htmlFor="security" className="label">
            Security
          </label>
          <input type="checkbox" className="checkbox" id="index" />
          <label htmlFor="index" className="label">
            Index
          </label> */}
        </div>
        <span className="listDescription">5 YR & 10 YR are annualized</span>
      </div>
      <ul className="list">
        {benchmarksData.map(({ id, title, allocations, indices }) => (
          <BenchmarkItem
            key={id}
            id={id}
            title={title}
            allocations={allocations}
            indices={indices}
            openModal={openModal}
            deleteBenchmark={deleteBenchmark}
          />
        ))}
      </ul>
    </BenchmarksListContainer>
  );
}

export default BenchmarksList;
