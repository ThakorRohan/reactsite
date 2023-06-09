import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import About from '../../components/about/about-us-two/about-us';
import Feature from '../../components/about/about-us-two/features';
import IconBox from '../../components/about/about-us-two/icon-box';
import Blog from '../../components/about/about-us-two/our-blog';
import Language from '../../components/about/about-us-two/working-language'

import TopBanner from '../../components/qloud/topbanner'
import logoImg from '../../public/assets/images/logo.png';

const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main "} logoImg={logoImg}>
                <TopBanner title="About-2" />
                <Feature />
                <Language />
                <About />
                <IconBox />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
