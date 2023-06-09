import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import PortfoiloDetail from '../../components/portfolio/portfolio-details/details'
import About from '../../components/portfolio/portfolio-details/about-us'
import Blog from '../../components/portfolio/portfolio-details/our-blog'
import Language from '../../components/portfolio/portfolio-details/working-language'
import TopBanner from '../../components/qloud/topbanner'
import logoImg from '../../public/assets/images/logo.png'

const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main "} logoImg={logoImg}>
                <TopBanner title="Portfolio Details" />
                <PortfoiloDetail />
                <About />
                <Language />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
