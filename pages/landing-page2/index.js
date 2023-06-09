import React, { useEffect, useState } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/LandingPage2/home'
import AboutUs from '../../components/LandingPage2/about-us'
import Counter from '../../components/LandingPage2/counter'
import Blog from '../../components/LandingPage2/our-blog'
import Feature from '../../components/LandingPage2/features'
import Client from '../../components/LandingPage2/our-client'
import Service from '../../components/LandingPage2/our-services'
import Lanaguage from '../../components/LandingPage2/working-language'
import Project from '../../components/LandingPage2/project'
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
            <Layout mainHeaderClass={"header-main header2"} logoImg={logoImg} >
                <div>

                    <Home />
                </div>
                <Client />
                <Feature />
                <AboutUs />
                <Service />
                <Lanaguage />
                <Counter />
                <Project />
                <Blog />
            </Layout>
        </>
    );
}

export default Index;
