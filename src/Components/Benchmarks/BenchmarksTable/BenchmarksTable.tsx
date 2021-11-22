import { useState } from "react";
import BenchmarksData from "../../../Utils/BenchmarksData";
import Modal from "../../Modal/Modal";
import AddBenchmarkForm from "../AddBenchmarkForm/AddBenchmarkForm";
import BenchmarksList from "../BenchmarksList/BenchmarksList";

interface Allocation {
  value: string;
  title: string;
  security: boolean;
}

interface Index {
  period: string;
  value: string;
}

interface Benchmarks {
  id: string;
  title: string;
  allocations: Allocation[];
  indices: Index[];
}

const BenchmarksTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBenchmarks, setShowBenchmarks] = useState(true);
  const [benchmarksData, setBenchmarksData] = useState([...BenchmarksData]);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleChange = () => {
    setShowBenchmarks((prevState) => !prevState);
  };

  const handleBenchmarksData = (benchmark: Benchmarks) => {
    const updateBenchmarksData = benchmarksData.map((item) =>
      item.id === benchmark.id ? benchmark : item
    );
    setBenchmarksData([...updateBenchmarksData]);
  };

  return (
    <div>
      <div>
        {/* В макете Peformance, нужно уточнить */}
        <h2>Total Performance Benchmarks</h2>

        <label>
          <input
            type="checkbox"
            checked={showBenchmarks === true}
            onChange={handleChange}
          />{" "}
          Enabled
        </label>
        <p>
          These are comparative defaults that appear anywhere that total
          performance for households or selected accounts are displayed. See an
          example of how these will be displayed when your have{" "}
          <a href="../../../public/index.html">
            benchmarks assigned and enabled
          </a>
          .
        </p>

        <span>{benchmarksData.length} of 3 Assigned</span>
        <button type="button" onClick={toggleModal}>
          Add New
        </button>
        {showBenchmarks && <BenchmarksList benchmarksData={benchmarksData} />}
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBenchmarkForm
            benchmarksData={benchmarksData}
            closeModal={toggleModal}
            onSubmit={handleBenchmarksData}
          />
        </Modal>
      )}
    </div>
  );
};

export default BenchmarksTable;
