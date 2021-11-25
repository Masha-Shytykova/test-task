import { useState } from "react";
import { Benchmarks } from "../../../Utils/Types";
import { BenchmarkFormContainer } from "./AddBenchmarkFormStyled";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CustomizedInputSearch from "./SearchInput/SearchInput";

interface Props {
  benchmarksData: Benchmarks[];
  closeModal: () => void;
  onSubmit: (benchmark: Benchmarks) => void;
}

const AddBenchmarkForm = ({ benchmarksData, closeModal, onSubmit }: Props) => {
  const [benchmark, setBenchmark] = useState(benchmarksData[0]);
  // const classes = useStyles();
  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    setBenchmark((prevState) => ({
      ...prevState,
      id: event.currentTarget.value,
    }));
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event);
    const { name, value } = event.currentTarget;

    switch (name) {
      // case "id":
      //   setBenchmark((prevState) => ({ ...prevState, id: value }));
      //   break;
      case "title":
        setBenchmark((prevState) => ({ ...prevState, title: value }));
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(benchmark);
    setBenchmark(benchmarksData[0]);
    closeModal();
  };

  return (
    <BenchmarkFormContainer>
      <h3 className="formTitle">Add a New Benchmark</h3>
      <p className="formDescription">
        A benchmark can be made up of one or more indices, securities or a
        combination of both. It can be assigned to an empty slot, a slot in use
        or be not assigned. For a slot in use it will replace that benchmark
        which will then be changed to not assigned.
      </p>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="colorWrapper">
          <label className="label" htmlFor="benchmarkId">
            Assign To*
          </label>
          <select
            className="benchmarkId"
            id="benchmarkId"
            name="id"
            onChange={handleSelect}
            value={benchmark.id}
          >
            {benchmarksData.map(({ id }) => (
              <option value={id} key={id}>
                {id}
              </option>
            ))}
          </select>
        </div>
        <div className="inputWrapper">
          <div className="colorWrapper">
            <label className="label" htmlFor="benchmarkTitle">
              Name*
            </label>
            <input
              className="input"
              id="benchmarkTitle"
              type="text"
              name="title"
              value={benchmark.title}
              required
              onChange={handleChange}
            />
          </div>
          <div className="validationRules">
            <span>Only Alpha Numeric</span>
            <span className="validationResult">
              {benchmark.title.length}/ 50
            </span>
          </div>
        </div>
        <div className="indexRow">
          <div className="pagination">--</div>
          <div className="inputWrapper">
            <label className="label" htmlFor="indexTitle">
              Index
            </label>
            <input
              className="input"
              id="indexTitle"
              type="text"
              name="title"
              value={benchmark.allocations[0].title}
              onChange={handleChange}
            />
          </div>
          <div className="inputWrapperSmall">
            <div className="colorWrapperSmall">
              <input
                className="input"
                id="indexValue"
                name="title"
                value={benchmark.allocations[0].value.slice(0, -1)}
                onChange={() => {}}
              />
              <label htmlFor="indexValue">%</label>
            </div>
            <div className="validationRules">
              <span>Numeric </span>
              <span>{benchmark.allocations[0].value.length - 1}/3</span>
            </div>
          </div>
          <IconButton
            aria-label="delete"
            // className={`${classes.margin} deleteBtn`}
            className="deleteBtn"
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
        <div className="inputWrapperSmall">
          <div className="noColorWrapperSmall">
            <input
              className="input inputBold "
              id="sumIndexValue"
              name="title"
              value="100"
              onChange={() => {}}
            />
            <label htmlFor="sumIndexValue">%</label>
          </div>
          <span className="validationRules justifyCenter">Must total 100%</span>
        </div>

        <div className="indicesMenu">
          <ExpandMoreIcon />
          View Available Indices
        </div>

        <p className="searchDescription">add a component to this benchmark</p>
        <div className="searchWrapper">
          <CustomizedInputSearch />
          <IconButton aria-label="add" className="addBtn">
            <AddIcon />
          </IconButton>
        </div>
        <div className="buttonsWrapper">
          <Button
            variant="outlined"
            color="primary"
            onClick={closeModal}
            className="cancelButton"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            size="large"
          >
            Save Benchmark
          </Button>
        </div>
      </form>
    </BenchmarkFormContainer>
  );
};

export default AddBenchmarkForm;
