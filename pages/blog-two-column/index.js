import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';
import BlogTwocolum from '../../components/blog/blog-two-column'
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
                <TopBanner title="Blog Two Column" />
                <BlogTwocolum />
            </Layout>
        </>
    );
}

export default Index;
