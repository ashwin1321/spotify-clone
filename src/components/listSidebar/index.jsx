import React from 'react'
import './listSidebar.css'

const index = ({ icon, title }) => {
    return (
        <div className='d-flex h6 hover-color gap-2  '>
            <div>
                {icon}
            </div>
            <div >
                {title}
            </div>
        </div>
    )
}

export default index