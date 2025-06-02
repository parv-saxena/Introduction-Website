import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Jobs = () => {

    const JobsData =useLoaderData();
  return (

    <div>
      {JobsData.map((Jobs)=>{
        return <Link >
           
        <h4>{Jobs.Title}</h4>
        <p>{Jobs.Year}</p>
        </Link>
      })}
    </div>
  );
}

export default Jobs;

export const jobsLoader= async ()=>{
const res = await fetch("http://localhost:5000/Jobs")
return res.json();
};
