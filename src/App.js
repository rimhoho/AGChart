import React, {useState} from 'react';
import {AgChartsReact} from 'ag-charts-react';
import './App.css';
const data = [
    {
      beverage: 'a',
      Q1: 450,
      Q2: 560,
      Q3: 600,
      Q4: 700,
      Q5: 450,
      Q6: 560,
      Q7: 600,
      Q8: 700,
      Q9: 450,
      Q10: 560,
      Q11: 600,
      Q12: 700,
      Q13: 450,
      Q14: 560,
      Q15: 600,
      Q16: 700,
    },
    {
      beverage: 'b',
      Q1: -10,
      Q2: -2000,
      Q3: -400,
      Q4: 0,
      Q5: 450,
      Q6: -30,
      Q7: 600,
      Q8: -20,
      Q9: 450,
      Q10: -560,
      Q11: -600,
      Q12: -700,
      Q13: -450,
      Q14: -560,
      Q15: -600,
      Q16: -700,
    },
  ];
  const combinationData = [
    { year: '2013', male: -1480, female: 3843, exportedTonnes: 105311 },
    { year: '2014', male: 1440, female: 3868, exportedTonnes: 112260 },
    { year: '2015', male: 1457, female: 3900, exportedTonnes: 100491 },
    { year: '2016', male: -1460, female: -3895, exportedTonnes: 110428 },
    { year: '2017', male: 1456, female: 3891, exportedTonnes: 105601 },
    { year: '2018', male: 1425, female: 3837, exportedTonnes: 110508 },
    { year: '2019', male: 1371, female: 3775, exportedTonnes: 135198 },
  ];
  
  const options = {
    // data: data,
    data: combinationData,
    title: { text: 'Beverage Expenses' },
    // subtitle: { text: 'per quarter' },
    padding: {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40,
    },
    series: [
      {
        type: 'column',
        xKey: 'year',
        yKey: 'male',
        yName: 'Male cattle',
      },
      {
        type: 'column',
        xKey: 'year',
        yKey: 'female',
        yName: 'Female cattle',
      },
      {
        type: 'line',
        xKey: 'year',
        yKey: 'exportedTonnes',
        yName: 'Beef exports',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
      },
      {
        type: 'number',
        position: 'left',
        keys: ['male', 'female'],
        title: {
          text: 'Number of cattle',
        },
        label: {
          formatter: (params) => {
            return params.value / 1000 + 'M';
          },
        },
      },
      {
        type: 'number',
        position: 'right',
        keys: ['exportedTonnes'],
        title: { 
          text: 'Exports (tonnes)',
        },
        label: {
          formatter: (params) => {
            return params.value / 1000 + 'k';
          },
        },
      },
    ],
    legend: { spacing: 40 },
    theme: 'ag-material',
    // theme: 'ag-default' // 8
    // theme: 'ag-vivid', //6
    // theme: 'ag-solar',//10
    legend: {
      position: 'bottom' // 'top', 'left', 'right'
  }
  };

function App() {
    return (
        <div style={{width: 1000}}>
            <AgChartsReact options={options} />;
        </div>
    );
}

export default App;
