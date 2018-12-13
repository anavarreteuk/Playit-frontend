import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import '../App.css'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 240,
        width: 240,
    },
   
});

class Categories extends React.Component {
    state = {
        spacing: '40',
    };

  

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <div className='categories'>
            <h1 id='cath1'>Browse categories:</h1>
            <Grid justify="center" container className={classes.root} spacing={16}>
                <Grid item xs={8}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0,1,2,3,4,5,6,7,8].map(value => (
                            <Grid key={value} item>
                                <Paper id='category' className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
            </div>
        )
    }
}



export default withStyles(styles)(Categories);