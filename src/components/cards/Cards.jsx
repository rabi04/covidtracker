import { Grid, Typography , Card, CardContent } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = (props)=>{
   // console.log(props.data);
   // if(!props.data)
    //eturn "loading ;;";
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center" >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                    <Typography variant="h5"> <CountUp start={0} end={props.data.confirmed.value} duration={5} separator=","/> </Typography>
                    <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of active case </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>recovery</Typography>
                    <Typography variant="h5"> <CountUp start={0} end={props.data.recovered.value} duration={5} separator=","/> </Typography>
                    <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of recovery </Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>deaths</Typography>
                    <Typography variant="h5"> <CountUp start={0} end={props.data.deaths.value} duration={5} separator=","/> </Typography>
                    <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of deaths   </Typography>
                </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards;