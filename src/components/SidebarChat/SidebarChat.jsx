import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='SidebarChat'>
        <img src="./images/1.jpg" alt="" />
        <div className="sidebarChat__Info">
            <h2>Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  )
}

export default SidebarChat