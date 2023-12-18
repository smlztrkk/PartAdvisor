import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./DropDown.css";
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
          <div>{selectedMenuItem || "Yılı"}</div>
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
            handleMenuItemClick("2005");
          }}
        >
          2005
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2006");
          }}
        >
          2006
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2007");
          }}
        >
          2007
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2008");
          }}
        >
          2008
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2009");
          }}
        >
          2009
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2010");
          }}
        >
          2010
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2011");
          }}
        >
          2011
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2012");
          }}
        >
          2012
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2013");
          }}
        >
          2013
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2014");
          }}
        >
          2014
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2015");
          }}
        >
          2015
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2016");
          }}
        >
          2016
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2017");
          }}
        >
          2017
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2018");
          }}
        >
          2018
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2019");
          }}
        >
          2019
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2020");
          }}
        >
          2020
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2021");
          }}
        >
          2021
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2022");
          }}
        >
          2022
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            handleMenuItemClick("2023");
          }}
        >
          2023
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DrpoDown;
