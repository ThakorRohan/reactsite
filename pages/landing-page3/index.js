import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/LandingPage3/home'
import About from '../../components/LandingPage3/about-us'
import IconBox from '../../components/LandingPage3/icon-box'
import Process from '../../components/LandingPage3/process'
import Security from '../../components/LandingPage3/security'
import Feature from '../../components/LandingPage3/features'
import Client from '../../components/LandingPage3/our-client'
import Testimonal from '../../components/LandingPage3/testimonial'
import Contact from '../../components/LandingPage3/contact'
import Blog from '../../components/LandingPage3/our-blog'

import { index } from '../../config/plugins';
import logoImg from '../../public/assets/images/logo-black.png'


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
                <IconBox />
                <About />
                <Process />
                <Feature />
                <Client />
                <Testimonal />
                <Contact />
                <Blog />
            </Layout>
        </>
    );
}
export default Index;
