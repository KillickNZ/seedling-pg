import React from 'react'
import { connect } from 'react-redux'
import headerStyles from './header.module.scss'

function HeaderLoggedIn(props) {
    
    return (
        <>
    <nav>
        <div className={headerStyles.navigation} >
            <div className={headerStyles.navigation__section} >
                <a href="/portfolio" className={headerStyles.navbar_brand}>
                    <h1>🌱</h1>
                </a>
                    <ul className={headerStyles.nav_menu}>
                        <li className={headerStyles.nav_menu__item}>
                            <a className={headerStyles.nav_menu__link} href="/portfolio">Portfolio</a>
                        </li>
                        <li className={headerStyles.nav_menu__item}>
                            <a className={headerStyles.nav_menu__link} href="/browse">Browse shares</a>
                        </li>
                        <li className={headerStyles.nav_menu__item}>
                            <a className={headerStyles.nav_menu__link} href="/reports/orders">Transactions</a>
                        </li>
                        <li className={headerStyles.nav_menu__item}>
                            <a className={headerStyles.nav_menu__link} href="/watchlist">Watchlist</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    <div className={headerStyles.header_border__bottom}></div>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(HeaderLoggedIn)
