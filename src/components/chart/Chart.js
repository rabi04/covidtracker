import React, { useEffect,useState } from 'react';
import { fetchdailydata } from '../../api';
import {Line} from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart = ()=>{
    const [dailydata, setdailydata] = useState([]);
    useEffect(()=>{
        const fetchapi = async()=>{
            setdailydata(await fetchdailydata());
           // console.log(await fetchdailydata());
        }
        fetchapi();
    },[]);
    const linechart =(
        dailydata.length !== 0?
        (<Line
            data ={{
                labels:dailydata.map(({date})=>date),
                datasets:[{
                    data: dailydata.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill : true
                },{
                    data: dailydata.map(({deaths})=>deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    fill : true
                }]
            }}
        />): null
    );
    const barchart = {
        
    }
    return(
        <div className={styles.container}>
        {linechart}
        </div>
    );
}
export default Chart;