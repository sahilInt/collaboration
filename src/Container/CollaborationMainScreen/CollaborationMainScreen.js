import React from 'react'
import CollbaorationFirstScreen from '../../Components/CollbaorationFirstScreen/CollbaorationFirstScreen'
import CollbaorationSecondScreen from '../../Components/CollbaorationSecondScreen/CollbaorationSecondScreen'
import "./CollaborationMainScreen.css"

const CollaborationMainScreen = () => {
    return (
        <div className='col-main-scr-flex-div'>
            <div className='col-main-scr-width-div'>

                <div className='col-main-scr-divide-sec'>
                    <div className='col-main-scr-divide-sec-part-one'>
                            <CollbaorationFirstScreen/>
                    </div>
                    <div className='col-main-scr-divide-sec-part-two'>
                            <CollbaorationSecondScreen/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CollaborationMainScreen