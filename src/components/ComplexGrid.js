import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: '10px',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    
});



function ComplexGrid(props) {
    const { classes } = props;
    return <div className={classes.root}>
      <Paper id="complexGrid" className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={props.teacherObj.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {props.teacherObj.username}
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
                  <Button id={props.teacherObj.id} onClick={() => (props.handleClick(props.teacherObj.id))} color="primary">
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
      </div>;
}

ComplexGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);