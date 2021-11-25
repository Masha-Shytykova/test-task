import IconButton from "@material-ui/core/IconButton";
// //import Menu from "@material-ui/core/Menu";
// //import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// import React from "react";
// //import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

// export default function MenuPopupState() {
//   return (
//     <PopupState variant="popover" popupId="demo-popup-menu">
//       {(popupState) => (
//         <React.Fragment>
//           {/* <Button
//             variant="contained"
//             color="primary"
//             {...bindTrigger(popupState)}
//           >
//             Open Menu
//           </Button> */}
//           <IconButton {...bindTrigger(popupState)}>
//             <MoreVertIcon />
//           </IconButton>
//           <Menu {...bindMenu(popupState)}>
//             <MenuItem onClick={popupState.close}>Cake</MenuItem>
//             <MenuItem onClick={popupState.close}>Death</MenuItem>
//           </Menu>
//         </React.Fragment>
//       )}
//     </PopupState>
//   );
// }
import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
