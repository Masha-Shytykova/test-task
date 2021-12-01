import { useState } from "react";
import BenchmarksData from "../../../Utils/BenchmarksData";
import { Benchmarks } from "../../../Utils/Types";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import BenchmarksList from "../BenchmarksList/BenchmarksList";
import {
  StyledContainer,
  StyledFlexContainer,
  StyledSpan,
} from "./BenchmarksTableStyled";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import BenchmarksDrawer from "../BenchmarksDrawer/BenchmarksDrawer";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const BenchmarksTable = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showBenchmarks, setShowBenchmarks] = useState<boolean>(true);
  const [benchmarksData, setBenchmarksData] = useState<Benchmarks[]>([
    ...BenchmarksData,
  ]);
  const [editBenchmarkId, setEditBenchmarkId] = useState<null | string>(null);
  const history = useHistory();

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleChange = () => {
    setShowBenchmarks((prevState) => !prevState);
  };

  const handleBenchmarksData = (benchmark: Benchmarks) => {
    if (benchmarksData.find((item) => item.id === benchmark.id)) {
      setBenchmarksData([
        ...benchmarksData.map((item) =>
          item.id === benchmark.id ? benchmark : item
        ),
      ]);
      return;
    }
    setBenchmarksData([...benchmarksData, benchmark]);
  };
  const handleDeleteBenchmark = (benchmarkId: string) => {
    const updateBenchmarksData = benchmarksData.filter(
      (item) => item.id !== benchmarkId
    );
    setBenchmarksData([...updateBenchmarksData]);
  };
  const handleEditBenchmark = (benchmarkId: string) => {
    setEditBenchmarkId(benchmarkId);
    toggleModal();
  };

  return (
    <StyledContainer>
      <StyledFlexContainer>
        {/* В макете Peformance, нужно уточнить */}
        <Typography variant="h5" component="h3" gutterBottom>
          Total Performance Benchmarks
        </Typography>

        <FormControlLabel
          className="label"
          control={
            <Switch
              checked={showBenchmarks === true}
              onChange={handleChange}
              size="small"
              name="checkedB"
              color="primary"
            />
          }
          label="Enabled"
        />
      </StyledFlexContainer>
      <Typography variant="body1" component="p" paragraph>
        These are comparative defaults that appear anywhere that total
        performance for households or selected accounts are displayed. See an
        example of how these will be displayed when your have{" "}
        <a href="../../../public/index.html">benchmarks assigned and enabled</a>
        .
      </Typography>

      <StyledSpan>{benchmarksData.length} of 3 Assigned</StyledSpan>

      <Button
        variant="outlined"
        color="primary"
        size="small"
        className="addBtn"
        onClick={toggleModal}
        startIcon={<AddIcon style={{ fontSize: 13 }} />}
      >
        Add New
      </Button>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className="addBtn"
        onClick={() => { history.push('/step1') }}
        style={{ marginLeft: "10px" }}
        startIcon={<AddIcon style={{ fontSize: 13 }} />}
      >
        Test Form 
      </Button>
      {showBenchmarks && (
        <BenchmarksList
          benchmarksData={benchmarksData}
          openModal={handleEditBenchmark}
          deleteBenchmark={handleDeleteBenchmark}
        />
      )}

      {showModal && (
        <BenchmarksDrawer
          open={showModal}
          onClose={toggleModal}
          onSubmit={handleBenchmarksData}
          benchmarksData={benchmarksData}
          id={editBenchmarkId}
        ></BenchmarksDrawer>
      )}
    </StyledContainer>
  );
};

export default BenchmarksTable;
