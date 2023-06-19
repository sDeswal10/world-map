import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { setSearchTerm } from "../redux/countriesSlice";

export default function SearchBar() {
  const {searchTerm} = useSelector((state)=>state.country);
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  }
  return (
    <div className="input-group d-flex ps-5 my-5">
      <div className="form-outline w-50">
        <input type="search" value={searchTerm} id="form1" className="form-control" placeholder="Enter country name" onChange={handleChange}/>
      </div>
    </div>
  );
}
