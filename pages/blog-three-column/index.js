import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';
import BlogThreeColum from '../../components/blog/blog-three-column';
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
                <TopBanner title="Blog Three Coloumn" />
                <BlogThreeColum />
            </Layout>
        </>
    );
}

export default Index;
