import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';
import TopBanner from '../../components/qloud/topbanner'

import Faq from '../../components/pages/faq/questions'
import Lanaguge from '../../components/pages/faq/working-language'
import Blog from '../../components/pages/faq/our-blog'
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
                <TopBanner title="FAQ" />
                <Faq />
                <Lanaguge />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
