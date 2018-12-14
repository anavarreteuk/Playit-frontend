import React from 'react'
import {Paper} from '@material-ui/core'

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row wrap',
        padding: 20,
        width: '100%'
    },
    paperLeft: {
        flex: 1,
        height: '100%',
        margin: 10,
        textAlign: 'center',
        padding: 10
    },
    paperRight: {
        height: 600,
        flex: 4,
        margin: 10,
        textAlign: 'center',
    }
};

class ComplexGrid extends React.Component {
    render() {
        return (
            <div>
                <div style={styles.div}>
                    <Paper zDepth={3} style={styles.paperLeft}>
                        <h4>First Vertical component</h4>
                    </Paper>
                    <Paper zDepth={3} style={styles.paperRight}>
                        <h4>Second Vertical component</h4>
                    </Paper>
                </div>
            </div>
        )
    }
}

// export default ComplexGrid