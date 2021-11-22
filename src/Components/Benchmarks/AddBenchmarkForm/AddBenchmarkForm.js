import { useState } from "react";

const AddBenchmarkForm = ({ benchmarksData, closeModal, onSubmit }) => {
  const [benchmark, setBenchmark] = useState(benchmarksData[0]);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "id":
        setBenchmark((prevState) => ({ ...prevState, id: value }));
        break;
      case "title":
        setBenchmark((prevState) => ({ ...prevState, title: value }));
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(benchmark);
    setBenchmark(benchmarksData[0]);
  };

  return (
    <>
      <h3>Add a New Benchmark</h3>
      <p>
        A benchmark can be made up of one or more indices, securities or a
        combination of both. It can be assigned to an empty slot, a slot in use
        or be not assigned. For a slot in use it will replace that benchmark
        which will then be changed to not assigned.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Assign To*
          <select name="id" onChange={handleChange} value={benchmark.id}>
            {benchmarksData.map(({ id }) => (
              <option value={id} key={id} required>
                {id}
              </option>
            ))}
          </select>
        </label>
        <label>
          Name*
          <input
            type="text"
            name="title"
            value={benchmark.title}
            required
            onChange={handleChange}
          />
        </label>
        <span>Only Alpha Numeric ${benchmark.title.length}/ 50</span>
        <span>--</span>
        <label>
          Index
          <input
            type="text"
            name="title"
            value={benchmark.allocations[0].title}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            name="title"
            value={benchmark.allocations[0].value}
            onChange={handleChange}
          />
          %
        </label>
        <span>Numeric {benchmark.allocations[0].value.length}/3</span>
        <label>
          <input
            name="title"
            value={benchmark.allocations[0].value}
            onChange={handleChange}
          />
          %
        </label>
        <span>Must total 100%</span>

        <span>View Available Indices</span>
        <span>add a component to this benchmark</span>
        <button type="button">Search for an Index or Security</button>

        <button type="button">+</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
        <button type="submit">Save Benchmark</button>
      </form>
    </>
  );
};

export default AddBenchmarkForm;
