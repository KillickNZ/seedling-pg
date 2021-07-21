import React from 'react'
import Image from 'next/image'
import { connect } from 'react-redux'

function HeaderLoggedIn(props) {
    
    return (
        <nav>
        <div className="navigation" >
            <div className="navigation__section navigation__section--left" >
                <a href="/portfolio" className="navbar-brand font-weight-normal">
                    <Image 
                        src="/logo-place-holder.jpg" 
                        alt="#"
                        height={"200px"}
                        width={"200px"}
                        />
                </a>
                    <ul className="desktop-nav-menu" >
                        <li className="desktop-nav-menu__item desktop-nav-menu__item--active" >
                            <a className="desktop-nav-menu__link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="desktop-nav-menu__item " >
                            <a className="desktop-nav-menu__link" href="/browse">Browse shares</a>
                        </li>
                        <li className="desktop-nav-menu__item " >
                            <a className="desktop-nav-menu__link" href="/reports/orders">Transactions</a>
                        </li>
                        <li className="desktop-nav-menu__item " >
                            <i className="text-light" aria-hidden="true" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></i>
                            <a className="desktop-nav-menu__link" href="/watchlist">Watchlist</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(HeaderLoggedIn)
