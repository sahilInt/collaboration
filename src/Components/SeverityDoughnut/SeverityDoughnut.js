import React from 'react'
import "./SeverityDoughnut.css"

import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js'
// import {Pie} from 'react-chartjs-2'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
)


const SeverityDoughnut = () => {

    const options={
        cutout: 80,
        height: 50,
        width:50
    }

    const data = {
        datasets: [{
            data: [44.26,26.24 , 16.39, 13.11],
            backgroundColor: [
                '#00ffffa3', '#39f951e3', '#f93939e3', '#f9a939ed',
            ]
        },

        ],

        labels: [
            'Medium', 'Low', 'Critical', 'High',
        ]
    };

    return (
        <div className='sever-doug-flex-div'>
            <div className='sever-doug-width-div'>
                <div className='sever-doug-main-div' >
                <p>Task by Severity ⓘ</p>
                    <Doughnut width={"100px"} height={"100px"} options={options} data={data} />
                </div>
            </div>
        </div>
    )
}

export default SeverityDoughnut