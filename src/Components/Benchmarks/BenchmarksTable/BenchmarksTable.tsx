import { useState } from "react";
import BenchmarksData from "../../../Utils/BenchmarksData";
import { Benchmarks } from "../../../Utils/Types";
import Modal from "../../Modal/Modal";
import Svg from "../../Svg/Svg";
import AddBenchmarkForm from "../AddBenchmarkForm/AddBenchmarkForm";
import BenchmarksList from "../BenchmarksList/BenchmarksList";
import {
  StyledButton,
  StyledButtonText,
  StyledContainer,
  StyledFlexContainer,
  StyledHeader,
  StyledLabel,
  StyledSpan,
  StyledText,
} from "./BenchmarksTableStyled";

const BenchmarksTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBenchmarks, setShowBenchmarks] = useState(true);
  const [benchmarksData, setBenchmarksData] = useState<Benchmarks[]>([
    ...BenchmarksData,
  ]);

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
    <StyledContainer>
      <StyledFlexContainer>
        {/* В макете Peformance, нужно уточнить */}
        <StyledHeader>Total Performance Benchmarks</StyledHeader>

        <StyledLabel>
          <input
            type="checkbox"
            checked={showBenchmarks === true}
            onChange={handleChange}
          />{" "}
          Enabled
        </StyledLabel>
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
      {showBenchmarks && <BenchmarksList benchmarksData={benchmarksData} />}

      {showModal && (
        <Modal closeModal={toggleModal}>
          <AddBenchmarkForm
            benchmarksData={benchmarksData}
            closeModal={toggleModal}
            onSubmit={handleBenchmarksData}
          />
        </Modal>
      )}
    </StyledContainer>
  );
};

export default BenchmarksTable;
