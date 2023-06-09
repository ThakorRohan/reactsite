import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import Blog from '../../components/pages/pricing-plan/our-blog'
import Plan from '../../components/pages/pricing-plan/plan'
import Language from '../../components/pages/pricing-plan/working-language'
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
                <TopBanner title="Pricing Plan" />
                <Plan />
                <Language />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
