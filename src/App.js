import Cards from './components/cards/Cards';
import Chart from './components/chart/Chart';
import Countrypicker from './components/countrypicker/Countrypicker';
import styles from './app.module.css';
import { useEffect, useState } from 'react';
import { fetchdata } from './api';
import { CircularProgress, Typography } from '@material-ui/core';


function App() {
  const [data , setdata] = useState({});
  const [country,setcountry] = useState('');

  const fetchinfo = async(data)=>{
    const info = await fetchdata(data);
    setdata(info);
    console.log(info);
   };

  useEffect(()=>{
    fetchinfo(country);
  },[country]);
console.log(`${country}`)

  if(JSON.stringify(data) === '{}')
  return(<div>    <CircularProgress /> </div>);

  return (
    <div className = {styles.container}>
    <Cards data={data}/>
    <Countrypicker setcountry = {setcountry}/>
    <Typography  gutterBottom="true" variant='h3'> world covid-19 data</Typography>
     <Chart />
    </div>
  );
}

export default App;
