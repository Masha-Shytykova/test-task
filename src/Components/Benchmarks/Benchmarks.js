import BenchmarksTable from "./BenchmarksTable/BenchmarksTable.tsx";

const Benchmarks = () => {
  return (
    <>
      <h1>Performance and Benchmarks</h1>
      <button type="button">Perfomance Settings</button>
      <p>
        Define and control your settings for displaying benchmarks. See our{" "}
        <a href="../../../public/index.html">list of indices</a> you can choose
        from.
      </p>
      <BenchmarksTable />
    </>
  );
};

export default Benchmarks;
