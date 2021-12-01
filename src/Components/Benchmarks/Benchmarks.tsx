import BenchmarksTable from "./BenchmarksTable/BenchmarksTable";
import Svg from "../Svg/Svg";
import {
  StyledButton,
  StyledContainer,
  StyledFlexContainer,
} from "./BenchmarksStyled";
import { Typography } from "@material-ui/core";

const Benchmarks = () => {
  return (
    <StyledContainer>
      <StyledFlexContainer>
        <Typography variant="h4" component="h2" gutterBottom>
          Performance and Benchmarks
        </Typography>
        <StyledButton>
          <Svg icon="#icon-cog" />
          Perfomance Settings
          <Svg icon="#icon-share" />
        </StyledButton>
      </StyledFlexContainer>

      <Typography variant="body1" component="p" paragraph>
        Define and control your settings for displaying benchmarks. See our{" "}
        <a href="../../../public/index.html">list of indices</a> you can choose
        from.
      </Typography>

      <BenchmarksTable />
      
    </StyledContainer>
  );
};

export default Benchmarks;
