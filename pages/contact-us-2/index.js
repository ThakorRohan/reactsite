import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import { index } from '../../config/plugins';

import ContactUs from '../../components/contact-us/contact-us2/contact-us'
import ContactCard from '../../components/contact-us/contact-us2/contact-card'
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
                <TopBanner title="Contact Us 2 " />
                <ContactCard />
                <ContactUs />
            </Layout>
        </>
    );
}

export default Index;
