import React, { Component } from 'react'
import DesktopTopBar from './topbar/desktopTopbar'
import MobileTopbar from './topbar/mobileTopbar'
import MobileMenu from './menu/mobileMenu'
import LogoHeader from './logoHeader'
import DesktopMenu from './menu/desktopMenu'
 
class Header extends Component {
    render() {
        return (
            <header>
                <div class="container-menu-desktop">
                    <DesktopTopBar/>
                    <MobileTopbar/>
                    <MobileMenu/>
                    <LogoHeader/>
                    <DesktopMenu/>


                </div>
            </header>
        )
    }
}
export default Header