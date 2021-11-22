import BenchmarkItem from "../BenchmarkItem/BenchmarkItem";

const BenchmarksList = ({ benchmarksData }) => {
  return (
    <>
      <label>
        <input type="checkbox" />
        Security
      </label>
      <label>
        <input type="checkbox" />
        Index
      </label>
      <span>5 YR & 10 YR are annualized</span>
      <ul>
        {benchmarksData.map(({ id, title, allocations, indices }) => (
          <BenchmarkItem
            key={id}
            id={id}
            title={title}
            allocations={allocations}
            indices={indices}
          />
        ))}
      </ul>
    </>
  );
};

export default BenchmarksList;
