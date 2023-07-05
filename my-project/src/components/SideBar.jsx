import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {AiFillHome} from 'react-icons/ai';

import {CiMusicNote1} from 'react-icons/ci';
import {MdOutlineFavoriteBorder} from 'react-icons/md';


import './style.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
const SideBar = () => {
  return (
<SideNav 
    onSelect={(selected) => {
       window.location.assign('/'+selected);
       
    }}
  className='sidebar'
  style={{background:'#35386e', zIndex: '8'}}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="">
        <NavItem eventKey="">
            <NavIcon>
               <AiFillHome  style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Discord
            </NavText>
        </NavItem>
        <NavItem eventKey="top-artists">
            <NavIcon>
              <CiMusicNote1 style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
               Top Charts
            </NavText>
        </NavItem>
        <NavItem eventKey="search">
            <NavIcon>
              <MdOutlineFavoriteBorder style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Favorite
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>  )
}

export default SideBar