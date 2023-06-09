import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/CloudHosting/home'
import HostingList from '../../components/CloudHosting/hosting-list'
import Process from '../../components/CloudHosting/process'
import Help from '../../components/CloudHosting/help'
import Service from '../../components/CloudHosting/service-tab'
import Pricing from '../../components/CloudHosting/pricing-plan'
import Blog from '../../components/CloudHosting/our-blog'
import Partner from '../../components/CloudHosting/our-partner'
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
                <HostingList />
                <Process />
                <Help />
                <Service />
                <Pricing />
                <Blog />
                <Partner />

            </Layout>
        </>
    );
}
export default Index;
