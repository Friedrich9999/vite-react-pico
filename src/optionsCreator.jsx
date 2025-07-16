export function CreateOptions(type, data){
    switch(type){
        case "line":
            return getOptionsLineDate(data)
        case "heatmap":
            return GetOptionsHeatmap(data)
        case "line custom x":
            return ""
        default:
            return getOptionsLineDate(data)
    }
}

function getOptionsLineDate(data){
    return {
    tooltip: {
      trigger: 'axis',
      snap: true,
    },
    title: {
      left: 'center',
      text: 'Leistungsarten'
    },
    grid: {
      bottom: '20%',
      containLabel: true
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    legend:{
      data: data.legend,
      bottom: '0%',
    },
    xAxis: {
      name: "Datum",
      type: 'category',
      boundaryGap: false,
      data: data.xAxis
    },
    yAxis: [
      {
      type: 'value',
      name: "Abgerufene Regelleistung",
      axisLabel: {formatter: '{value} MW'}
      },
      {
      type: 'value',
      name: "Eingespeiste Erneuerbare Leistung",
      axisLabel: {formatter: '{value} MW'}
      }
    ],
    dataZoom: [
      {
        bottom:"10%"
      }
    ],
    series: data.yAxis
  }
}

function GetOptionsHeatmap(data){
  const opt = {
    tooltip: {
    },
    xAxis: {
        type: 'category',
        data: data.xAxis,
        axisPointer:{
          type: 'line',
          triggerEmphasis: false,
          show: true
        }
    },
    title: {
      left: 'center',
      text: data.chartName
    },
    yAxis: {
        type: 'category',
        data: data.yAxis,
        axisPointer:{
          type: 'line',
          triggerEmphasis: false,
          show: true
        }
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    visualMap: {
        min: data.min,
        max: data.max,
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
        name: data.seriesName,
        type: 'heatmap',
        data: data.data,
        emphasis: {
            itemStyle: {
            borderColor: '#333',
            borderWidth: 1
            }
        },
        progressive: 1000
        }
    ],
    dataZoom: [
      {
        bottom:"-10%"
      }
    ],
    };
    console.log(opt)
    
    return opt
}
