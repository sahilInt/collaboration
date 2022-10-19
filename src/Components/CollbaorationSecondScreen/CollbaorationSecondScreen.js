import React from 'react'
import MilestoneGraph from '../MilestoneGraph/MilestoneGraph'
import SeverityDoughnut from '../SeverityDoughnut/SeverityDoughnut'
import "./CollbaorationSecondScreen.css"

const CollbaorationSecondScreen = () => {
  return (
    <div className='collb-sec-scr-flex-div'>
      <div className='collb-sec-scr-width-div'>
        <div className='collb-sec-scr-main-div'>
          <div><SeverityDoughnut/></div>
          <div><MilestoneGraph/></div>
        </div>
      </div>
    </div>
  )
}

export default CollbaorationSecondScreen