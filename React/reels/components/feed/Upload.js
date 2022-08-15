import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { fontSize } from "@mui/system";

function Upload() {
  return (
    <Tooltip title="Upload" sx={{ padding: '0' }}>
      <IconButton component="label" sx={{ padding: '0' }}>
        <AddBoxOutlinedIcon
          fontSize="large"
          sx={{ color: "black", padding: "0" }}
        />
        <input hidden accept="image/*" multiple type="file" />
      </IconButton>
    </Tooltip>
  );
}

export default Upload;
