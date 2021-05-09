import { FormControl,NativeSelect} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchcountries } from '../../api';
 

const Countrypicker = (props)=>{
    const [country,setcountry] = useState([]);
    useEffect(()=>{
        const fetchcountry = async()=>{
            setcountry(await fetchcountries());
        }
        fetchcountry();
    },[])
    return(
        <div>
        <FormControl >
            <NativeSelect defaultValue="" onChange={(e) => props.setcountry(e.target.value)}>
                <option value="global">global</option>
                {country.map((country,i) => {return <option key={i} value={country}>{country}</option>})}
            </NativeSelect>
        </FormControl>
        </div>
    );
}
export default Countrypicker;

