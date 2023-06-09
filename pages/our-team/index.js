import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import Team from '../../components/pages/our-team/team'
import Language from '../../components/pages/our-team/working-language'
import Blog from '../../components/pages/our-team/our-blog'
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
                <TopBanner title="Our Team" />
                <Team />
                <Language />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
