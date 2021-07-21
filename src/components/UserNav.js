import React from 'react'
import { connect } from 'react-redux'
import headerStyles from './header.module.scss'
import Image from 'next/image'


function UserNav (props) {
    
    return (

    <nav>
            <div className={headerStyles.navigation_user__dropdown_content} onMouseLeave={() => props.setDropdownHover(!props.dropdownHover)}>
                <div className={headerStyles.navigation_user__info}>
                    <Image 
                        className={headerStyles.profile_thumb}
                        src={"/150X150PlaceHolder.png"} 
                        alt={"alt"}
                        height={50}
                        width={50}
                        /> 
                        <div>
                            <h5>
                                {"userName"}
                            </h5>
                            <h5>
                                {"portfolio balance"}
                            </h5>
                        </div>
                </div>
                <a className={headerStyles.nav_user_menu__link} href="/Deposit">Deposit</a>
                <a className={headerStyles.nav_user_menu__link} href="/Withdraw">Withdraw</a>
                <a className={headerStyles.nav_user_menu__link} href="/Reports">Reports</a>
                <a className={headerStyles.nav_user_menu__link} href="/Refer">Refer a friend (Get free $10 for them, $10 for you.)</a>
                <a className={headerStyles.nav_user_menu__link} href="/Settings">Settings</a>
                <a className={headerStyles.nav_user_menu__link} href="/Help">Help Center</a>
                <a className={headerStyles.nav_user_menu__link} href="/Signout">Sign Out</a>
            </div> 
    </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(UserNav)
