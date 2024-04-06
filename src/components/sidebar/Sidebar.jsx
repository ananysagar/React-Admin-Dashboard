import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>MyAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
            <div className="title">MAIN</div>
            <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
            <div className="title">LISTS</div>
            <li><PersonIcon className='icon'/><span>Users</span></li>
            <li><Inventory2Icon className='icon'/><span>Products</span></li>
            <li><CreditCardIcon className='icon'/><span>Orders</span></li>
            <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
            <div className="title">USEFUL</div>
            <li><AssessmentIcon className='icon'/><span>Stats</span></li>
            <li><CircleNotificationsIcon className='icon'/><span>Notifications</span></li>
            <div className="title">Service</div>
            <li><SettingsSystemDaydreamIcon className='icon'/><span>System Health</span></li>
            <li><PsychologyIcon className='icon'/><span>Logs</span></li>
            <li><SettingsIcon className='icon'/><span>Settings</span></li>
            <div className="title">USER</div>
            <li><AccountCircleIcon className='icon'/><span>Profile</span></li>
            <li><LogoutIcon className='icon'/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
