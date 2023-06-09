import React, { useEffect } from 'react';
import Head from 'next/head';
import '../public/style.css'
import { index } from '../config/plugins';
import { HeaderStyle, Loader, ScrollTop, } from '../components/qloud';
import Footer from '../components/qloud/footerComponents/index'
import { topMenuBarItems } from '../constants/menu';
const Layout = props => {

    console.log(props.mainHeaderClass)
    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Head>
                <title>Qloud - Cloud  &amp; Computing ReactJs Template</title>
                <meta name="keywords" content="HTML5 Template" />
                <meta name="description" content="Qloud -Cloud&amp; Computing HTML5 Template" />
                <meta name="author" content="http://iqonic.design/" />
                <link rel="stylesheet" href="./assets/css/ionicons.min.css" />
                <link rel="shortcut icon" href="./assets/images/favicon.ico" />
            </Head>
            <Loader />
            <HeaderStyle styledLogo={true} header={props.mainHeaderClass} navItems={topMenuBarItems} logoImg={props.logoImg} />
            {props.children}
            <Footer />
            <ScrollTop />
        </>
    );
}

export default Layout