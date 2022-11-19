import React from 'react'
import SidebarChat from '../SidebarChat/SidebarChat'
import './Sidebar.css'


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
          <img src="./images/1.jpg" alt="" />
          {/*status pic */}
            <div className="sidebar__headerRight">
              {/*Icons */}
            </div>
        </div>

        <div className="sidebar__serach">
          <div className="sidebar__searchContainer">
             <input placeholder='Search or start new chat' type='text' />
          </div>
        </div>

        <div className="sidebar__chats">
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />


        </div>
    </div>
  )
}

export default Sidebar