import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import PortfolioThree from '../../components/portfolio/portfolio3columns'
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
            <Layout mainHeaderClass={"header-main"} logoImg={logoImg}>
                <TopBanner title="Portfolio Three" />
                <PortfolioThree />
            </Layout>
        </>
    );
}

export default Index;
