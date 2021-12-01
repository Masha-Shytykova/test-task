import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { IndexItemContainer } from "./IndexItemStyled";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  value: string;
  title: string;
  onDeleteClick: (title: string) => void;
}

const IndexItem = ({ value, title, onDeleteClick }: Props) => {
  const handleClickDeleteBtn = () => {
    onDeleteClick(title);
  };
  return (
    <IndexItemContainer>
      <div className="decoration">_ _</div>
      <div className="indexTitleWrapper">
        <span className="label">Index</span>
        <span>{title}</span>
      </div>

      <TextField
        value={value}
        helperText={
          <span className="helperTextContainer">
            <span>Numeric</span>
            <span>{`${value.toString().length} / 3`}</span>
          </span>
        }
        variant="filled"
        size="small"
        className="indexValueWrapper"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className="inputAdornment">
              %
            </InputAdornment>
          ),
        }}
      />
      <IconButton
        aria-label="delete"
        className="deleteBtn"
        onClick={handleClickDeleteBtn}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </IndexItemContainer>
  );
};

export default IndexItem;
