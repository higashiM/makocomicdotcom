import React from "react";
import { aboutText } from "./resources/About/AboutText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { MobileScreenQuery } from "./MediaQuery";

function DisplayAbout() {
  const useStyles = makeStyles({
    root: {
      //padding: '30px 30px'
    },

    container: {
      display: "grid",
      gridTemplateColumns: "1fr",
      padding: "30px 30px",
    },
  });

  const classes = useStyles();
  return (
    <Grid container spacing={8} className={classes.container} wrap={"nowrap"}>
      {aboutText}
    </Grid>
  );
}
export default DisplayAbout;
