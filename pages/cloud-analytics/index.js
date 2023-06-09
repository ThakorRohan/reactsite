import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/CloudAnalytics/home'
import About from '../../components/CloudAnalytics/about-us'
import Product from '../../components/CloudAnalytics/products'
import Testimonal from '../../components/CloudAnalytics/our-testimonial'
import Client from '../../components/CloudAnalytics/our-clients'
import Resource from '../../components/CloudAnalytics/resources'
import GetStart from '../../components/CloudAnalytics/get-started'
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
                <About />
                <Product />
                <Testimonal />
                <Client />
                <Resource />
                <GetStart />
            </Layout>
        </>
    );
}
export default Index;
