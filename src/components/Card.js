import React from 'react';
import { connect } from 'react-redux'
import { fetchQuote } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function OutlinedCard({quote, connectedFetchQuote}) {
  const classes = useStyles();

/*   useEffect(() => {
    connectedFetchQuote()
  }, [connectedFetchQuote]) */

  const handleClick = () => {
    connectedFetchQuote()
  }

  return (
    <div className={classes.container}>
    <Card className={classes.root} variant="outlined">
    <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        Quote of the Day
        </Typography>
        <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        </Typography>
    </CardContent>
    <Typography variant="body2" component="p" className={classes.author}>
            -- Author
        </Typography>
    <CardActions>
        <Button 
            size="small" 
            className={classes.button} 
            variant="outlined"
            type="submit"
            onClick={handleClick}
        >
            New Quote
        </Button>
    </CardActions>
    </Card>
    </div>
    
  );
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
      width: '73vh',
      height: '33vh'
    },
  
    title: {
      fontSize: 20,
      marginBottom: 15
    },
    author: {
        textAlign: 'right',
        marginRight: 112
    },
     button: {
         width: '15vh',
         position: 'relative',
         left: '55vh',
         top: '8vh'
    } 
  });

  const mapStateToProps = (state) => {
      return {
          quote: state.quote
      }
  }

  const mapDispatchToProps = {
        connectedFetchQuote: fetchQuote
      }


  export default connect(mapStateToProps, mapDispatchToProps)(OutlinedCard)