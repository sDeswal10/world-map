import React from 'react'
import Navbar from '../components/Navbar'
import Map from '../components/Map'
import CountryDetail from '../components/CountryDetail'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <>
    <Navbar/>
    {/* <SearchBar/> */}
    <div className='container'>
    <div className='row mt-5'>
        <div className='col-sm-7'>
            <Map/>
        </div>
        <div className='col-sm-4'>
            <CountryDetail/>
        </div>
    </div>
    </div>  
    </>
  )
}
