import React, { Component } from 'react'
import "./HorizontalBarGraph.css"


import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const HorizontalBarGraph = () => {

    const options = {
        indexAxis: 'y',
        
    }

    const dataHorBar = {
        labels: ["Design", "Discovery", "Out of Scope", "Development", "Quality Assurance", "Production"],
        datasets: [
            {
                label: "",
                backgroundColor: "#360736",
                borderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [7, 8, 10, 10, 11, 16]
            }
        ]
    };

    return (
        <div className='hor-bar-graph-flex-div'>
            <div className='hor-bar-graph-width-div'>
                <div className='hor-bar-graph-main-div'>
                    <p>Tasks by Module ⓘ</p>
                    <Bar options={options} data={dataHorBar} />

                </div>
            </div>
        </div>
    )
}

export default HorizontalBarGraph