import React from "react";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
export default function Create() {
  return (
    <div>
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
      >
        Submit
      </Button>
      {/* <Button type="submit" color="primary">
        Submit
      </Button> */}
      {/* <ButtonGroup color="secondary" variant="contained">
        <Button type="submit">One</Button>
        <Button type="submit">Two</Button>
        <Button type="submit">Three</Button>
      </ButtonGroup> */}
    </div>
  );
}
