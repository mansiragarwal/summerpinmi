import React from 'react';
import { useActiveStepValue, usePinsValue } from "../../../context";
import { useSelector } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    welcome_intro: {
      color: theme.palette.teal.dark,
    },
  }));

export default function Loading() {
    //require isReady and finishLoading functions, and we call it by props.isReady
    //isReady: send a get request - ENTEREDROOM(vonage api sessionid)
    //once isReady returns true, run finishLoading

    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 10 }}>
            <Typography variant='h1' className={classes.welcome_intro}>
                Loading Discussion Prep
            </Typography>
            <Box sx={{ p: 2 }}>
            <CircularProgress />
            </Box>
        </Box>
    );
}