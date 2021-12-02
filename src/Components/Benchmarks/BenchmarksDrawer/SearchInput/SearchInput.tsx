import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 370,
      borderRadius: 8,
      borderColor: "grey",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export default function CustomizedInputSearch({value, onChange, name}: Props) {
  const classes = useStyles();

  return (
    <Paper component="div" className={classes.root} variant="outlined">
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        value={value}
        onChange={onChange}
        name={name}
        className={classes.input}
        placeholder="Search for an Index or Security"
        inputProps={{ "aria-label": "Search for an Index or Security" }}
      />
    </Paper>
  );
}

export { };