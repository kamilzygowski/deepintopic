import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute } from './MobileMenuElements';


const MobileMenu = ({isOpen, toggle}) => {
  
  return (
    <SidebarContainer className="MobileMenu" isOpen={isOpen} onClick={toggle}>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarRoute to='/' onClick={toggle}>
                    Home
                </SidebarRoute>
                <SidebarRoute to='/about' onClick={toggle}>
                    About
                </SidebarRoute>
                <SidebarRoute to='/contact' onClick={toggle}>
                    Contact
                </SidebarRoute>
                <SidebarRoute to='/dictionary' onClick={toggle}>
                    Dictionary
                </SidebarRoute>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default MobileMenu;
