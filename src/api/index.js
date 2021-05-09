import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async(country)=>{
    let newurl = url;
    if(country)
    newurl = `${url}/countries/${country}`
    try {
        const { data } = await axios.get(newurl);
      //  console.log(data);
        const modifieddata = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return (modifieddata);
    } catch (error) {
        console.log(error.message);
        return(JSON.stringify({}));
    }
}
export const fetchdailydata = async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
    //    console.log(data[0]);
       const modifieddata = data.map((data)=>({
           confirmed: data.confirmed.total,
           deaths: data.deaths.total,
           date: data.reportDate
       }));
        return modifieddata;
    } catch (error) {
        console.log(error.message);
        return(JSON.stringify({}));
    }
}
export const fetchcountries = async()=>{
    try {
        const response = await axios.get(`${url}/countries`);
        const modifieddata = response.data.countries.map((country)=>country.name);

        console.log(modifieddata);
        return modifieddata;
    } catch (error) {
        console.log(error.message);
        return({});
    }
}
