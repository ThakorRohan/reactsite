import React, { useEffect } from 'react'
import Layout from '../Layouts/MainLayout';
import Home from '../components/LandingPage1/home'
import Process from '../components/LandingPage1/process'
import About from '../components/LandingPage1/about-us'
import Service from '../components/LandingPage1/service'
import Pricing from '../components/LandingPage1/pricing-plan'
import Icon from '../components/LandingPage1/icon-box'
import Application from '../components/LandingPage1/our-key'
import Testimonial from '../components/LandingPage1/our-testimonial'
import Blog from '../components/LandingPage1/our-blog'
import { index } from '../config/plugins';
import logoImg from '../public/assets/images/logo.png'
const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main"} logoImg={logoImg}>
                <div>

                    <Home />
                </div>
                <Process />
                <About />
                <Service />
                <Pricing />
                <Icon />
                <Application />
                <Testimonial />
                <Blog />
            </Layout>
        </>
    );
}
export default Index;
