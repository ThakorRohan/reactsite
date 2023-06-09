import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import BlogDetail from '../../components/blog/blog-detail'
import { index } from '../../config/plugins';
import logoImg from '../../public/assets/images/logo.png';


import TopBanner from '../../components/qloud/topbanner'
const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main "} logoImg={logoImg}>
                <TopBanner title="Blog Detail" />
                <BlogDetail />
            </Layout>
        </>
    );
}

export default Index;
