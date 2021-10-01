import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export default function Create() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Create A New Note
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
        align="center"
        noWrap
      >
        ajsd ajshd ashd lkasdlas hdklash dasgdlagsdljgasljdajsd ajshd ashd
        lkasdlas hdklash dasgdlagsdljgasljdajsd ajshd ashd lkasdlas hdklash
        dasgdlagsdljgasljdajsd ajshd ashd lkasdlas hdklash
        dasgdlagsdljgasljdajsd ajshd ashd lkasdlas hdklash
        dasgdlagsdljgasljdajsd ajshd ashd lkasdlas hdklash
        dasgdlagsdljgasljdajsd ajshd ashd lkasdlas hdklash dasgdlagsdljgasljd
      </Typography>
      <Button
        onClick={() => {
          console.log("You clicked me");
        }}
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      <br />
      {/* <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="primary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}
    </Container>
  );
}
