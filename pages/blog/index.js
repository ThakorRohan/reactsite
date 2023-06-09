import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Blog from '../../components/blog/blog';

import TopBanner from '../../components/qloud/topbanner'

import { index } from '../../config/plugins';
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
                <TopBanner title="Blog" />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
