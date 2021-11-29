import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
  id: string;
  openModal: (benchmarkId: string) => void;
  deleteBenchmark: (benchmarkId: string) => void;
}
export default function SimpleMenu({ openModal, deleteBenchmark, id }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickEditBtn = () => {
    setAnchorEl(null);
    openModal(id);
  };

  const handleClickDeleteBtn = () => {
    setAnchorEl(null);
    deleteBenchmark(id);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClickEditBtn}>Edit</MenuItem>
        <MenuItem onClick={handleClickDeleteBtn}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
