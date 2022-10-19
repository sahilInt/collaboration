import React from 'react'
import HalfDoughnutChart from '../HalfDoughnutChart/HalfDoughnutChart'
import HorizontalBarGraph from '../HorizontalBarGraph/HorizontalBarGraph'
import "./CollbaorationFirstScreen.css"

const CollbaorationFirstScreen = () => {
    return (
        <div className='collb-first-scr-flex-div'>
            <div className='collb-first-scr-width-div'>
                <div className='collb-first-scr-main-div-flex'>


                    <div className='collb-first-scr-main-div-one'>
                        <div className='collb-first-scrn-sub-div-one'>

                            {/* Company Logo */}

                            <div className='collb-f-scr-sd-one-part-one'>
                                <div className='collb-f-scr-sd-one-part-one-sec-one'>
                                    <img src='https://svgsilh.com/svg/1362265-ff5722.svg' alt='' className='comp-logo-img-in-collb' />
                                    <h2>Bold BI</h2>
                                </div>

                                <div className='collb-f-scr-sd-one-part-one-sec-two'>
                                    <img src='https://svgsilh.com/svg/1362265-4caf50.svg' alt='' className='comp-logo-img-in-collb' />
                                    <h2>Intervals</h2>
                                </div>
                            </div>

                            <div className='collb-f-scr-sd-one-part-two'>
                                <p>Project ⓘ</p>
                                <div class="dropdown">
                                    <button class="dropbtn">All</button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>


                            <div className='collb-f-scr-sd-one-part-three'>
                                <p>Milestone ⓘ</p>
                                <div class="dropdown">
                                    <button class="dropbtn">All</button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                            </div>

                            <div className='collb-f-scr-sd-one-part-four'>
                                <div className='collb-f-scr-four-div'>
                                    <p>Task Cycle Time ⓘ</p>
                                    <h3>14 Days(s)</h3>
                                </div>
                            </div>

                        </div>
                        <div className='collb-first-scrn-sub-div-two'>
                            <div className='hor-bar-graph-comp-div'><HorizontalBarGraph /></div>

                            <div className='hor-bar-graph-comp-div-one'>
                            <HalfDoughnutChart/>
                            </div>
                        </div>
                    </div>


                    <div className='collb-first-scr-main-div-two'>
                        <div className='collb-first-scr-main-div-two-sub-div-one'>
                            <h3>Time</h3>
                            <div className='time-hours-main-div-one'>
                                <div className='time-hours-main-div-one-sub-one'>
                                    <h4>2506</h4>
                                    <p>Utilized Hours</p>
                                </div>
                                <div className='time-hours-main-div-one-sub-two'>
                                    <h4>2506</h4>
                                    <p>Utilized Hours</p>
                                </div>
                            </div>

                            <div className='time-hours-main-div-one'>
                                <div className='time-hours-main-div-one-sub-one'>
                                    <h4>2506</h4>
                                    <p>Utilized Hours</p>
                                </div>
                                <div className='time-hours-main-div-one-sub-two'>
                                    <h4>2506</h4>
                                    <p>Utilized Hours</p>
                                </div>
                            </div>
                        </div>
                        <div className='collb-first-scr-main-div-two-sub-div-two'>
                            <div className='collb-first-scr-main-div-two-sub-div-one'>
                                <h3>Time</h3>
                                <div className='time-hours-main-div-one'>
                                    <div className='time-hours-main-div-one-sub-one'>
                                        <h4>2506</h4>
                                        <p>Utilized Hours</p>
                                    </div>
                                    <div className='time-hours-main-div-one-sub-two'>
                                        <h4>2506</h4>
                                        <p>Utilized Hours</p>
                                    </div>
                                </div>

                                <div className='time-hours-main-div-one'>
                                    <div className='time-hours-main-div-one-sub-one'>
                                        <h4>2506</h4>
                                        <p>Utilized Hours</p>
                                    </div>
                                    <div className='time-hours-main-div-one-sub-two'>
                                        <h4>2506</h4>
                                        <p>Utilized Hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollbaorationFirstScreen