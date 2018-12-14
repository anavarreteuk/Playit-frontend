import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Category from './Category.js'

import '../App.css'



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 180,
        width: 300,
    },
   
});

class Categories extends React.Component {
    state = {
        spacing: '40',
    }

    handlePageChange() {
        window.location = "teachers";
    }

  

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        const instrArray = ['Piano', 'Violin', 'Oboe', 'Guitar', 'Flute', 'Drums', 'Saxo', 'Trumpet','Clarinet']
        return (
            <div className='categories'>
            <h1 id='cath1'>Browse categories:</h1>
            <Grid justify="center" container className={classes.root} spacing={16}>
                <Grid item xs={8}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {[0,1,2,3,4,5,6,7,8].map((value,i,index) => (
                            <Grid key={value} item>
                                    <Paper key={index} onClick={this.handlePageChange} id='category' className={classes.paper}>
                            
                                        <Category  inst={instrArray[i]} />  
                                    </Paper>
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