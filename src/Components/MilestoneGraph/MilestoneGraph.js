import React from 'react'
import "./MilestoneGraph.css"

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


const MilestoneGraph = () => {



    const dataHorBar = {
        labels: ["Milestone_02", "Milestone_15", "Milestone_09", "Milestone_01", "Milestone_06", "Milestone_12", "Milestone_07", "Milestone_04", "Milestone_13", "Milestone_03", "Milestone_05", "Milestone_10", "Milestone_11", "Milestone_08", "Milestone_14"],
        datasets: [
            {
                label: "",
                backgroundColor: "#360736",
                borderColor: "rgba(255,99,132,1)",
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [382, 204, 139, 215, 266, 230, 99, 122, , 125, 205, 124, 95, 126, 155, 129]
            }
        ]
    };
    return (
        <div className='mil-graph-flex-div'>
            <div className='mil-graph-width-div'>
                <div className='mil-graph-main-div'>
                    <p>Tasks by Module ⓘ</p>
                    <Bar width={"650px"} height={"500px"} data={dataHorBar} />

                </div>
            </div>
        </div>
    )
}

export default MilestoneGraph