import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Benchmarks } from "../../../Utils/Types";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { StyledForm } from "./BenchmarksDrawerStyled";
import IndexItem from "./IndexItem/IndexItem";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomizedInputSearch from "./SearchInput/SearchInput";
import { useForm } from "react-hook-form";

const options: string[] = [
  "Total Performance 1",
  "Total Performance 2",
  "Total Performance 3",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "600px",
      padding: theme.spacing(4),
    },
    closeBtn: {
      position: "absolute",
      top: "20px",
      right: "20px",
    },
    divider: {
      marginTop: "15px",
      marginBottom: "15px",
    },
  })
);

interface Props {
  benchmarksData: Benchmarks[];
  open: boolean;
  id: string | null;
  onClose: () => void;
  onSubmit: (benchmark: Benchmarks) => void;
}

type FormValues = {
  benchmarkName: string;
  totalIndicesValue: string;
  [key: string]: string;
}

const BenchmarksDrawer = ({
  benchmarksData,
  onClose,
  open,
  onSubmit,
  id,
}: Props) => {
  const [benchmark, setBenchmark] = useState<Benchmarks>(benchmarksData[0]);
  const [indexName, setIndexName] = useState<string>('');
  const { register, handleSubmit, formState: { errors }  } = useForm<FormValues>({
    mode: 'all'
  
  });
  
  useEffect(() => {
    if (id === null) {
      return;
    }
    const newBenchmark: Benchmarks | undefined = benchmarksData.find(
      (item) => item.id === id
    );

    if (newBenchmark !== undefined) {
      setBenchmark(newBenchmark);
    }
  }, [id]); /* eslint-disable-line*/

  const classes = useStyles();
  console.log(errors);

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBenchmark = benchmarksData.find(
      (item) => item.id === event.target.value
    );

    if (newBenchmark !== undefined) {
      setBenchmark(newBenchmark);
      return;
    }
    setBenchmark({
      id: event.target.value,
      title: "",
      allocations: [],
      indices: [],
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "benchmarkName":
        setBenchmark((prevState) => ({ ...prevState, title: value }));
        break;
      case "indexName":
        setIndexName(() => (value));
        break;
      default:
        return;
    }
  };

  const handleChangeIndexValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;       
    const newAllocations = benchmark.allocations.map((item) =>
      item.title === name ? { ...item, value: +value } : item );
    setBenchmark((prevState) => ({ ...prevState, allocations: [...newAllocations] }))    
   }
  
  const onDeleteClick = (title: string) => {
    const updateAllocations = benchmark.allocations.filter(
      (item) => item.title !== title
    );
    setBenchmark((prevState) => ({
      ...prevState,
      allocations: updateAllocations,
    }));
  };

  const handleAddIndexBtnClick = () => {
     setBenchmark((prevState) => ({ ...prevState, allocations: [...prevState.allocations,  { value: 0, title: indexName, security: false }]}));
  }
      
   const handleFormSubmit = () => {
     onSubmit(benchmark);
     setBenchmark(benchmarksData[0]);
     onClose();
   };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Container className={classes.root}>
        <IconButton
          className={classes.closeBtn}
          onClick={onClose}
          type="button"
          aria-label="close-button"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Typography variant="h4">Add a New Benchmark</Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p">
          A benchmark can be made up of one or more indices, securities or a
          combination of both. It can be assigned to an empty slot, a slot in
          use or be not assigned. For a slot in use it will replace that
          benchmark which will then be changed to not assigned.
        </Typography>
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            required
            select
            fullWidth
            label="Assign To"
            onChange={handleSelect}
            value={benchmark.id}
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            {options.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </TextField>
          <TextField
            required
            value={benchmark.title}
            label="Name"
            //name="benchmarkName"
            {...register("benchmarkName", { required: true, maxLength: 50, pattern: /^[\w\-\s]+$/, })}
            
            onChange={handleChange}
            helperText={
              <span className="helperTextContainer">
                <span>Only Alpha Numeric</span>
                <span>{`${benchmark.title.length}/ 50`}</span>
              </span>
            }
            fullWidth
            variant="filled"
            className="benchmarkNameInput"
            error={ !! errors.benchmarkName}
          />
          <ul className="list">
            {benchmark.allocations.map(({ value, title }) => (
              <IndexItem
                key={title}
                title={title}
                value={value}
                onDeleteClick={onDeleteClick}
                name={title}
                onChange={handleChangeIndexValue}
                
              />
            ))}
          </ul>
          <TextField
            value={benchmark.allocations.reduce(
              (sum, item) => sum + item.value,
              0
            )}
           type="number"
            {...register("totalIndicesValue", { valueAsNumber: true, min: 100, max: 100 })}
             error={ !! errors.totalIndicesValue}
            helperText="Must total 100%"
            size="small"
            className="totalValueWrapper"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="inputAdornment">
                  %
                </InputAdornment>
              ),
            }}
          />
          <div className="indicesMenu">
            <ExpandMoreIcon />
            View Available Indices
          </div>

          <p className="searchDescription">add a component to this benchmark</p>
          <div className="searchWrapper">
            <CustomizedInputSearch
              value={indexName}
              onChange={handleChange}
              name="indexName"/>
            <IconButton aria-label="add" className="addBtn" onClick={ handleAddIndexBtnClick}>
              <AddIcon />
            </IconButton>
          </div>
          <div className="buttonsWrapper">
            <Button
              variant="outlined"
              color="primary"
              onClick={onClose}
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
        </StyledForm>
      </Container>
    </Drawer>
  );
};

export default BenchmarksDrawer;




/* import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Benchmarks } from "../../../Utils/Types";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { StyledForm } from "./BenchmarksDrawerStyled";
import IndexItem from "./IndexItem/IndexItem";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomizedInputSearch from "./SearchInput/SearchInput";
import { useForm } from "react-hook-form";

const options: string[] = [
  "Total Performance 1",
  "Total Performance 2",
  "Total Performance 3",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "600px",
      padding: theme.spacing(4),
    },
    closeBtn: {
      position: "absolute",
      top: "20px",
      right: "20px",
    },
    divider: {
      marginTop: "15px",
      marginBottom: "15px",
    },
  })
);

interface Props {
  benchmarksData: Benchmarks[];
  open: boolean;
  id: string | null;
  onClose: () => void;
  onSubmit: (benchmark: Benchmarks) => void;
}

type FormValues = {
    totalIndicesValue: number;
}

const BenchmarksDrawer = ({
  benchmarksData,
  onClose,
  open,
  onSubmit,
  id,
}: Props) => {
  const [benchmark, setBenchmark] = useState<Benchmarks>(benchmarksData[0]);
  const [indexName, setIndexName] = useState<string>('');
  const { register, formState: { errors } } = useForm<FormValues>({
    mode: 'onBlur'
  
  });
  
  useEffect(() => {
    if (id === null) {
      return;
    }
    const newBenchmark: Benchmarks | undefined = benchmarksData.find(
      (item) => item.id === id
    );

    if (newBenchmark !== undefined) {
      setBenchmark(newBenchmark);
    }
  }, [id]); /* eslint-disable-line*/

  /* const classes = useStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBenchmark = benchmarksData.find(
      (item) => item.id === event.target.value
    );

    if (newBenchmark !== undefined) {
      setBenchmark(newBenchmark);
      return;
    }
    setBenchmark({
      id: event.target.value,
      title: "",
      allocations: [],
      indices: [],
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "benchmarkName":
        setBenchmark((prevState) => ({ ...prevState, title: value }));
        break;
      case "indexName":
        setIndexName(() => (value));
        break;
      default:
        return;
    }
  };

  const handleChangeIndexValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;       
    const newAllocations = benchmark.allocations.map((item) =>
      item.title === name ? { ...item, value: +value } : item );
    setBenchmark((prevState) => ({ ...prevState, allocations: [...newAllocations] }))    
   }
  
  const onDeleteClick = (title: string) => {
    const updateAllocations = benchmark.allocations.filter(
      (item) => item.title !== title
    );
    setBenchmark((prevState) => ({
      ...prevState,
      allocations: updateAllocations,
    }));
  };

  const handleAddIndexBtnClick = () => {
     setBenchmark((prevState) => ({ ...prevState, allocations: [...prevState.allocations,  { value: 0, title: indexName, security: false }]}));
  }
      
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     onSubmit(benchmark);
     setBenchmark(benchmarksData[0]);
     onClose();
   };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Container className={classes.root}>
        <IconButton
          className={classes.closeBtn}
          onClick={onClose}
          type="button"
          aria-label="close-button"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Typography variant="h4">Add a New Benchmark</Typography>
        <Divider className={classes.divider} />
        <Typography variant="body1" component="p">
          A benchmark can be made up of one or more indices, securities or a
          combination of both. It can be assigned to an empty slot, a slot in
          use or be not assigned. For a slot in use it will replace that
          benchmark which will then be changed to not assigned.
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            required
            select
            fullWidth
            label="Assign To"
            onChange={handleSelect}
            value={benchmark.id}
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            {options.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </TextField>
          <TextField
            required
            value={benchmark.title}
            onChange={handleChange}
            label="Name"
            name="benchmarkName"
            // {...register("benchmarkName", { required: true, maxLength: 50,  pattern: /^[0-9a-zA-Z]+$/,})}
            helperText={
              <span className="helperTextContainer">
                <span>Only Alpha Numeric</span>
                <span>{`${benchmark.title.length}/ 50`}</span>
              </span>
            }
            fullWidth
            variant="filled"
            className="benchmarkNameInput"
          />
          <ul className="list">
            {benchmark.allocations.map(({ value, title }) => (
              <IndexItem
                key={title}
                title={title}
                value={value.toString()}
                onDeleteClick={onDeleteClick}
                name={title}
                onChange={handleChangeIndexValue}
              />
            ))}
          </ul>
          <TextField
            value={benchmark.allocations.reduce(
              (sum, item) => sum + item.value,
              0
            )}
            {...register("totalIndicesValue", { valueAsNumber: true, min: 100, max: 100 })}
             error={ !! errors.totalIndicesValue}
            helperText="Must total 100%"
            size="small"
            className="totalValueWrapper"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="inputAdornment">
                  %
                </InputAdornment>
              ),
            }}
          />
          <div className="indicesMenu">
            <ExpandMoreIcon />
            View Available Indices
          </div>

          <p className="searchDescription">add a component to this benchmark</p>
          <div className="searchWrapper">
            <CustomizedInputSearch
              value={indexName}
              onChange={handleChange}
              name="indexName"/>
            <IconButton aria-label="add" className="addBtn" onClick={ handleAddIndexBtnClick}>
              <AddIcon />
            </IconButton>
          </div>
          <div className="buttonsWrapper">
            <Button
              variant="outlined"
              color="primary"
              onClick={onClose}
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
        </StyledForm>
      </Container>
    </Drawer>
  );
};

 export default BenchmarksDrawer; */
