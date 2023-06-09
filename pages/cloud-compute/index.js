import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/CloudCompute/home'
import Client from '../../components/CloudCompute/our-client'
import Product from '../../components/CloudCompute/product'
import Counter from '../../components/CloudCompute/counter'
import Service from '../../components/CloudCompute/service-tab'
import Resource from '../../components/CloudCompute/resources'
import GetStart from '../../components/CloudCompute/get-started'
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
                <Client />
                <Product />
                <Counter />
                <Service />
                <Resource />
                <GetStart />
            </Layout>
        </>
    );
}
export default Index;
