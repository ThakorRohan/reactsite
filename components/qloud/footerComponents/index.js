import React from 'react';
import Link from "next/link";

import { FooterMain, FooterLogo, FooterAddress, FooterLinks } from '../../qloud';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            footerText: [
                {
                    icon: true,
                    iconClass: 'fa fa-phone',
                    text: '+0123456789'
                },
                {
                    icon: true,
                    iconClass: 'fa fa-envelope',
                    text: 'support@iqnonicthemes.com'
                },
                {
                    icon: true,
                    iconClass: 'fa fa-home',
                    text: '1234 North Avenue Luke Lane, South Bend, IN 360001'
                }
            ],
            footerHome: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        },
                        {
                            href: '#',
                            title: 'Clients'
                        },
                        {
                            href: '#',
                            title: 'Service'
                        }
                    ]
                },

            ],
            footerAbout: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Home'
                        },
                        {
                            href: '#',
                            title: 'Blog'
                        },
                        {
                            href: '#',
                            title: 'Careers'
                        },
                        {
                            href: '#',
                            title: 'Clients'
                        },
                        {
                            href: '#',
                            title: 'Service'
                        }
                    ]
                },

            ],
            footerUseful: [
                {
                    section: [
                        {
                            href: '#',
                            title: 'Our Team'
                        },
                        {
                            href: '#',
                            title: 'Pricing Plan'
                        },
                        {
                            href: '#',
                            title: 'FAQ'
                        },
                        {
                            href: '#',
                            title: 'Clients'
                        },
                        {
                            href: '#',
                            title: 'Contact Us'
                        }
                    ]
                },
            ]
        }

    }

    render() {
        const { footerText, footerHome, footerAbout, footerUseful } = this.state;
        return (
            <>
                <FooterMain className={" iq-over-dark-90"}>
                    <div className="footer-topbar">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 ">
                                    <div className="widget">
                                        <div className="textwidget">
                                            <div className="row">
                                                <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-left">
                                                    <h2 className="text-white">Subscribe for Newsletter</h2>
                                                </div>
                                                <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-right">
                                                    <form className="mc4wp-form mc4wp-form-517" method="post">
                                                        <div className="mc4wp-form-fields">
                                                            <input type="email" name="EMAIL" placeholder="Your email address" required="" />
                                                            <input type="submit" defaultValue="Subscribe" />
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 ">
                                    <div className="widget">
                                        <div className="textwidget ">
                                            <FooterLogo
                                                sectionImage={'./assets/images/logo.png'}
                                                sectionText={"It is a long established fact that a reader will be distracted by the readable content."}

                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0 ">
                                    <FooterLinks title={"Menu"} content={footerHome} />
                                </div>


                                <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                    <FooterLinks title={"About us"} content={footerAbout} />
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                    <FooterLinks title={"Useful Link"} content={footerUseful} />
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
                                    <FooterAddress addressContent={footerText} addressTitle={"Contact Us"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <div className="copyright-footer">
                            <div className="container">
                                <div className="pt-3 pb-3">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6 col-md-12 text-lg-left text-md-center text-center">
                                            <div className="social-icone">
                                                <ul>
                                                    <li className="d-inline"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li className="d-inline"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                    <li className="d-inline"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 text-lg-left text-md-center text-center">
                                            <span className="copyright">Copyright 2019 <Link href="/landing-page1"><a>Qloud</a></Link> All Rights Reserved.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </FooterMain>

            </>
        );
    }

}

export default Index;