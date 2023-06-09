import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/CloudMediaService/home'
import Overview from '../../components/CloudMediaService/overview-block'
import IconBox from '../../components/CloudMediaService/icon-box'
import Story from '../../components/CloudMediaService/customer-story'
import Process from '../../components/CloudMediaService/process'
import Testimonal from '../../components/CloudMediaService/our-testimonial'
import Blog from '../../components/CloudMediaService/our-blog'
import logoImg from '../../public/assets/images/logo-black.png'


import { index } from '../../config/plugins';

const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main header2"} logoImg={logoImg}>
                <div>

                    <Home />
                </div>
                <Overview />
                <IconBox />
                <Story />
                <Process />
                <Testimonal />
                <Blog />
            </Layout>
        </>
    );
}
export default Index;
