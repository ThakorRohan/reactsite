import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import Blog from '../../components/pages/services/our-blog'
import Services from '../../components/pages/services/our-services'
import Language from '../../components/pages/services/working-language'
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
                <TopBanner title="Services" />

                <Services />
                <Language />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
