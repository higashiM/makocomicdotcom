import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Link, Typography } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles({
  root: {
    width: "auto",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    padding: "10px 10px",
    alignItems: "center",
    alignContent: "center",
    direction: "row",
  },
});

export default function Footer() {
  const classes = useStyles();
  const styleMailIcon = { fontSize: "36px", color: "red" };
  const styleLinkedinIcon = { fontSize: "36px", color: "blue" };
  const styleItchIcon = { height: "30px", color: "blue" };

  return (
    <BottomNavigation>
      <Grid className={classes.container} wrap={"nowrap"}>
        <Grid item>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <Link
            href="mailto: eastwg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-envelope" style={styleMailIcon}></i>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://www.linkedin.com/in/eastwg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin" style={styleLinkedinIcon}></i>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://higashimori.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={styleMailIcon}
          >
            <img
              src={require("../resources/About/itchio-logo-black.png")}
              alt="itch.io icon"
              style={styleItchIcon}
            ></img>
          </Link>
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}
