import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 240,
        width: 240,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class Categories extends React.Component {
    state = {
        spacing: '40',
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid justify="center" container className={classes.root} spacing={16}>
                <Grid item xs={8}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0,1,2,3,4,5,6,7,8].map(value => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                
            </Grid>
        );
    }
}



export default withStyles(styles)(Categories);