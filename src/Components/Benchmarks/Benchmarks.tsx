import BenchmarksTable from "./BenchmarksTable/BenchmarksTable";
import Svg from "../Svg/Svg";
import {
  StyledButton,
  StyledContainer,
  StyledFlexContainer,
  StyledHeader,
  StyledText,
} from "./BenchmarksStyled";

const Benchmarks = () => {
  return (
    <StyledContainer>
      <StyledFlexContainer>
        <StyledHeader>Performance and Benchmarks</StyledHeader>
        <StyledButton>
          <Svg icon="#icon-cog" />
          Perfomance Settings
          <Svg icon="#icon-share" />
        </StyledButton>
      </StyledFlexContainer>

      <StyledText>
        Define and control your settings for displaying benchmarks. See our{" "}
        <a href="../../../public/index.html">list of indices</a> you can choose
        from.
      </StyledText>
      <BenchmarksTable />
    </StyledContainer>
  );
};

export default Benchmarks;
