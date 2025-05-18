// import React, {useState, useEffect} from "react";
import UserTable from "./UserTable";
function SearchBar({search, setsearch}){
    return(
    <>
    <input type="text" 
    placeholder="Search User by name or username" 
    id="search" onInput={s => setsearch(s.target.value)} 
    className="w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
    </>
    );

}
export default SearchBar;