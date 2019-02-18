import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "10px",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

function ComplexGrid(props) {
  let lat1 = props.geolocation.map(v => v.latitude)[0];
  let lon1 = props.geolocation.map(v => v.longitude)[0];
  let lon2 = props.teacherObj.longitude;
  let lat2 = props.teacherObj.latitude;

  const distance = (lat1, lon1, lat2, lon2, unit = "K") => {
    if (lat1 === lat2 && lon1 === lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === "K") {
        dist = dist * 1.609344;
      }
      if (unit === "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper id="complexGrid" className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={props.teacherObj.image}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.teacherObj.username} is{" "}
                  {distance(lat1, lon1, lat2, lon2).toFixed(2)} Km from you
                </Typography>
                <Typography gutterBottom>
                  {props.teacherObj.instrument.name}
                </Typography>
                <Typography color="textSecondary">
                  {props.teacherObj.location}
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: "pointer" }}>
                  <Button
                    id={props.teacherObj.id}
                    onClick={() => props.handleClick(props.teacherObj.id)}
                    color="primary"
                  >
                    Book a lesson
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                £{props.teacherObj.price_hour} p/h
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComplexGrid);
