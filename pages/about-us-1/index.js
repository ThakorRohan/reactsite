import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Counter from '../../components/about/about-us-one/counter';
import NavTab from '../../components/about/about-us-one/nav-tabs';
import Blog from '../../components/about/about-us-one/our-blog';
import Application from '../../components/about/about-us-one/your-application';
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
                <TopBanner title="About-1" />
                <Counter />
                <NavTab />
                <Blog />
                <Application />
            </Layout>
        </>
    );
}

export default Index;
