import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import ReactECharts from 'echarts-for-react';

function Fetcher() {

  const {data, isPending} = useQuery({
    queryKey: ['test  '],
    queryFn: getTodos
  })

  const option_heat = {
    tooltip: {},
    xAxis: {
      type: 'category',
      data: data ? data.xAxis : []
    },
    yAxis: {
      type: 'category',
      data: data ? data.yAxis : []
    },
    visualMap: {
      min: data ? data.min : 0,
      max: data ? data.max : 1,
      calculable: true,
      realtime: false,
      inRange: {
        color: [
          '#313695',
          '#4575b4',
          '#74add1',
          '#abd9e9',
          '#e0f3f8',
          '#ffffbf',
          '#fee090',
          '#fdae61',
          '#f46d43',
          '#d73027',
          '#a50026'
        ]
      }
    },
    series: [
      {
        name: 'Gaussian',
        type: 'heatmap',
        data: data ? data.data : [],
        emphasis: {
          itemStyle: {
            borderColor: '#333',
            borderWidth: 1
          }
        },
        progressive: 1000,
        animation: true
      }
    ]
  };

  return (
    <>
      {isPending ? <div aria-busy="true"></div> : <ReactECharts option={option_heat}/>}
    </>
  )
}

const getTodos = async () => {
  console.log("trying to access server")
  const response = await fetch("http://localhost:8000/heatmap/2023-01-01/2025-01-01")
  const dat = await response.json()
  console.log(dat)
  return dat
}

export default Fetcher
