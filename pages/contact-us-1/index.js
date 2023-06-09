import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import ContactUs from '../../components/contact-us/contact-us1/contact-us'
import ContactCard from '../../components/contact-us/contact-us1/contact-card'
import TopBanner from '../../components/qloud/topbanner'
import logoImg from '../../public/assets/images/logo.png'

const Index = props => {


    useEffect(() => {
        setTimeout(() => {
            index();
        }, 500);
    });

    return (
        <>
            <Layout mainHeaderClass={"header-main "} logoImg={logoImg}>
                <div className="main-content">
                    <TopBanner title="Contact Us1" />
                    <ContactUs />
                </div>
                <ContactCard />
            </Layout>
        </>
    );
}

export default Index;
