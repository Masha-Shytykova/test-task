import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { IndexItemContainer } from "./IndexItemStyled";
import DeleteIcon from "@material-ui/icons/Delete";
import { useForm } from "react-hook-form";

interface Props {
  value: number;
  title: string;
  name: string;
  onDeleteClick: (title: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
}

type FormValues = {
  [key: string]: number;
}

const IndexItem = ({ value, title, onDeleteClick, onChange, name}: Props) => {
  const { register, formState: { errors }  } = useForm<FormValues>({
    mode: 'all'
  });

  console.log(errors);

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
        //name={name}
        {...register(`${title}`, { min: {value:0, message: "min value is 0"}, max:  {value:100, message: "max value is 100"} })}
        onChange={onChange}
        type="number"
        
        variant="filled"
        size="small"
        className="indexValueWrapper"
        error={!!errors[title]}
        helperText={
          errors[title] ? errors[title].message : (
          <span className="helperTextContainer">
            <span>Numeric</span>
            <span>{`${value.toString().length} / 3`}</span>
          </span>)
        }
        //helperText={ errors[title] && errors[title].message}
        
        InputProps={{
          // inputProps: { min: 0, max: 100 },
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
