import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from '../redux/countriesAction';

export default function CountryDetail() {
  const dispatch = useDispatch();
  const {countriesData, error, message, success, loading, searchTerm, mapTerm} = useSelector((state)=>state.country);
  useEffect(() => {
    dispatch(getAllCountries());
    if(error){
      console.log(error);
    }
    
  }, [dispatch,error])
  // const data = countriesData.filter((item)=>item.name.common.toLowerCase().includes(searchTerm));
  const data = countriesData.filter((item)=>item.cca3.toLowerCase().includes(mapTerm));
  
  return (
    <section className='shadow p-3 mb-5 bg-white rounded'>
      {loading ? (<h1>Loading...</h1>) : (
        data.length >0 && 
        data.map((item, index)=>{
          return (
            <div key={index}>
              <img src={item.flags.png} alt={item.flags.alt} className='img-fluid'/>
              <h3 className='text-center'>{item.name.common}</h3>
              <p><b>Capital:</b> {item.capital}</p>
              <p><b>Population: </b> {item.population}</p>
              <p><b>Region:</b> {item.region}</p>
              <p><b>Sub Region:</b> {item.subregion}</p>
              <p><b>Timezone:</b> {item.timezones}</p>
            </div>
          )
        })
      )}      
    </section>
  )
}
