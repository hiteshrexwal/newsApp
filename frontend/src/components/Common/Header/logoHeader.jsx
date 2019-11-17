import React, { Component } from 'react'

 
class LogoHeader extends Component {
    render() {
        return (
            <div class="wrap-logo container">
                {/* <!-- Logo desktop -->		 */}
                <div class="logo">
                    <a href="index.html"><img src="images/icons/logo-01.png" alt="LOGO"/></a>
                </div>	

                {/* <!-- Banner --> */}
                <div class="banner-header">
                    <a href="#"><img src="images/banner-01.jpg" alt="IMG"/></a>
                </div>
            </div>	
        )
    }
}
export default LogoHeader