import React, { Component } from 'react'
 
class MobileTopbar extends Component {
    render() {
        return (
                <div class="wrap-header-mobile">
                    {/* // Logo moblie 		 */}
                    <div class="logo-mobile">
                        <a href="index.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO"/></a>
                    </div>

                    {/* // Button show menu  */}
                    <div class="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
        )
    }
}
export default MobileTopbar