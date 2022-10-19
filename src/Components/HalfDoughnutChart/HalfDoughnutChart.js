import React from 'react';
import "./HalfDoughnutChart.css"

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
)

const HalfDoughnutChart = () => {

  const options = {
    circumference: 50* Math.PI,
    rotation: 1 * Math.PI,
}

  const data = {
    datasets: [{
      data: [52,48],
      backgroundColor: [
        '#360736', 'gray',
      ]
    },

    ],

    labels: [
      '',
      '',
    
    ]
  };

  return (
    <div className='half-doughnut-flex-div'>
      <div className='half-doughnut-width-div' style={{width:'300px', height:'300px'}}>
        <Doughnut  options={options} data={data} />
      </div>
    </div>
  )
}

export default HalfDoughnutChart