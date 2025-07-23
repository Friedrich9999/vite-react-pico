import { useState, useContext} from 'react'
import { useQuery } from '@tanstack/react-query';
import ReactECharts from 'echarts-for-react';
import {FetchingContext} from './Datentool'
import { CreateOptions } from './optionsCreator';

function Fetcher() {

  const {graphType, startDate, endDate, regions, datatypes} = useContext(FetchingContext);

  const {data, isLoading, isError, refetch} = useQuery({
    enabled: false,
    queryKey: ['1',graphType,startDate,endDate,regions,datatypes],
    queryFn: () => fetchData(graphType,startDate, endDate, regions, datatypes)
  })

  function getComponent(){
    if (isLoading){
      return <div aria-busy="true"></div>
    }
    if(data){
      if (data.type == graphType){
      const options = CreateOptions(graphType, data)
      return <ReactECharts option={options} style={{height: "700px"}}/>
      }
      return <></>
    }
    if (isError){
      return <small>there was an error</small>
    }
  }

  return (
    <>
    <label>
      <button className='secondary' onClick={() => refetch()} disabled={isLoading}>Laden</button>
      {getComponent()}
    </label>
    </>
  )
}


const fetchData = async (type,startDate, endDate, regions, dataTypes) => {
  console.log("starting fetch");
  // Create the request body as an object
  const requestBody = {
    startDate: startDate,
    endDate: endDate,
    regions: regions,
    dataTypes: dataTypes
  };
  // Define the request options for a POST request
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Set the content type to JSON
    },
    body: JSON.stringify(requestBody) // Convert the request body to a JSON string
  };
  const url = "http://htw-projekt.rl-institut.de/backend/" + type
  console.log("URL: " + url)
  const response = await fetch(url, requestOptions);
  console.log("fetch finished");
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log("final Data:");
  console.log(data);
  return data;
};

export default Fetcher
