import React from 'react';
import Router from 'next/router'
import Link from 'next/link'
const HeaderStyle1 = (props) => {
    return (
        <>
            <header id="main-header" className={props.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#">
                                    <img className="img-fluid logo" src={props.logoImg} alt="Qloud" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu-btn d-inline-block" id="menu-btn">
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </span>
                                    <span className="ion-navicon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                        {
                                            props.navItems.map((option, index) => (
                                                <li className="nav-item dropdown" key={index}>

                                                    <a className="nav-link dropdown-toggle"
                                                        href={option.href} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false" >{option.title}</a>
                                                    {
                                                        option.submenu ?
                                                            (
                                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                    {
                                                                        option.submenu.map((child, childIndex) => (
                                                                            // <Link href={child.href} key={childIndex}><a className="dropdown-item">{child.title}</a></Link>
                                                                            <a onClick={() => Router.push(child.href)} className="dropdown-item" key={childIndex}>{child.title}</a>
                                                                        ))

                                                                    }

                                                                </div>
                                                            )
                                                            :
                                                            (<div></div>)
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="sub-main">
                                    <ul>
                                        <li className="d-inline"><a href="#" className="login iq-button iq-btn-outline iq-btn-round" target="_blank">Login</a></li>
                                        <li className="d-inline"><a href="#" className="signup iq-button default iq-btn-round" target="_blank">Sign Up</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div >
            </header >
        </>
    );
};

export default HeaderStyle1;
