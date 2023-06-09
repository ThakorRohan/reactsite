import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';



import Client from '../../components/pages/clients/our-client'
import Blog from '../../components/pages/clients/our-blog'
import Language from '../../components/pages/clients/working-language'
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
                <TopBanner title="Clients" />
                <Client />
                <Language />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
