import { IconButton, TextField } from "@material-ui/core";
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
      <div className="decoration">--</div>
      <div className="indexTitleWrapper">
        <span className="label">Index</span>
        <span>{title}</span>
      </div>

      <TextField
        value={value}
        helperText={`Numeric ${value.toString().length} / 3`}
        variant="filled"
        size="small"
        className="indexValueWrapper"
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
