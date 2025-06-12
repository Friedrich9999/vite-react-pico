import { useState } from 'react'
import ReactECharts from 'echarts-for-react';

function App() {
  const [count, setCount] = useState(0)

  const option = {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  return (
    <>
      <header className='container'>
        <nav>
          <ul>
            <li><strong>Acme Corp</strong></li>
          </ul>
          <ul>
            <li><a href="#test">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </nav>
      </header>
      <main className='container'>
        <article>
          <ReactECharts option={option} height='800'/>
        </article>
      </main>
      <footer className='container'>
        <p>footer here</p>
      </footer>
    </>
  )
}

export default App
