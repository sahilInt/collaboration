import React from 'react'
import CollaborationMainScreen from '../CollaborationMainScreen/CollaborationMainScreen'
import "./ScreenWithSidebar.css"

const ScreenWithSidebar = () => {
    return (
        <div className='collb-scr-with-sidebar-flex-div'>
            <div className='collb-scr-with-sidebar-width-div'>
                <div className='collb-scr-with-sidebar-main-div'>
                    <div>Hiiii</div>
                    <div className='sidebar-main-div'>

                        <CollaborationMainScreen />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenWithSidebar