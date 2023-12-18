import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { toast } from "react-toastify";
import "./DropDown.css";
import { Link } from "react-router-dom";
const DrpoDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (menuItem) => {
    handleClose();
    setSelectedMenuItem(menuItem);
    toast.success(`${menuItem} seçildi`);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <button className="dbutn">
          <div>{selectedMenuItem || "istek"}</div>
          <div>
            {selectedMenuItem == null && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
          </div>
        </button>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("Benzin");
          }}
        >
          Benzin
        </MenuItem>
        <Link to="/FoundPage" className="link">
          <MenuItem
            onClick={() => {
              handleClose();
              handleMenuItemClick("Lastik");
            }}
          >
            Lastik
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default DrpoDown;
