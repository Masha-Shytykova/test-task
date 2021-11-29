import { useState } from "react";
import BenchmarksData from "../../../Utils/BenchmarksData";
import { Benchmarks } from "../../../Utils/Types";
//import Modal from "../../Modal/Modal";
import Svg from "../../Svg/Svg";
//import AddBenchmarkForm from "../AddBenchmarkForm/AddBenchmarkForm";
import BenchmarksList from "../BenchmarksList/BenchmarksList";
import {
  StyledButton,
  StyledButtonText,
  StyledContainer,
  StyledFlexContainer,
  StyledHeader,
  StyledSpan,
  StyledText,
} from "./BenchmarksTableStyled";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import BenchmarksDrawer from "../BenchmarksDrawer/BenchmarksDrawer";

const BenchmarksTable = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showBenchmarks, setShowBenchmarks] = useState<boolean>(true);
  const [benchmarksData, setBenchmarksData] = useState<Benchmarks[]>([
    ...BenchmarksData,
  ]);
  const [editBenchmarkId, setEditBenchmarkId] = useState<null | string>(null);

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
        <StyledHeader>Total Performance Benchmarks</StyledHeader>

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
      <StyledText>
        These are comparative defaults that appear anywhere that total
        performance for households or selected accounts are displayed. See an
        example of how these will be displayed when your have{" "}
        <a href="../../../public/index.html">benchmarks assigned and enabled</a>
        .
      </StyledText>

      <StyledSpan>{benchmarksData.length} of 3 Assigned</StyledSpan>
      <StyledButton type="button" onClick={toggleModal}>
        <Svg icon="#icon-plus" width="7px" height="7px" />
        <StyledButtonText>Add New</StyledButtonText>
      </StyledButton>
      {showBenchmarks && (
        <BenchmarksList
          benchmarksData={benchmarksData}
          openModal={handleEditBenchmark}
          deleteBenchmark={handleDeleteBenchmark}
        />
      )}

      {showModal && (
        <>
          <BenchmarksDrawer
            open={showModal}
            onClose={toggleModal}
            onSubmit={handleBenchmarksData}
            benchmarksData={benchmarksData}
            id={editBenchmarkId}
          ></BenchmarksDrawer>
          {/* <Modal closeModal={toggleModal}>
            <AddBenchmarkForm
              benchmarksData={benchmarksData}
              closeModal={toggleModal}
              onSubmit={handleBenchmarksData}
            />
          </Modal> */}
        </>
      )}
    </StyledContainer>
  );
};

export default BenchmarksTable;
