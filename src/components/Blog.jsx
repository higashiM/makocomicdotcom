import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },
  Card: {
    width: "auto",
    margin: "auto",
  },
  media: {
    height: 600,
    width: "auto",
    objectFit: "cover",
  },

  typography: {
    fontSize: 36,
  },
});

export default function BlogCard(props) {
  const { title, date, subline, imgSrc, imgTitle, content } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgSrc} title={imgTitle} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {subline}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
