import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
function Sidebar() {
  return (
    <div className='sidebar'>
        {/* Icon is capitilized since your passing in a react component in a component */}
        <SidebarRow Icon={HomeIcon} title={"home"}/>
        <SidebarRow Icon={WhatshotIcon}title={"aaaaaa"}/>
        <SidebarRow Icon={SubscriptionsIcon} title={"bbbbbb"}/>
        <hr/>
    </div>
  )
}

export default Sidebar