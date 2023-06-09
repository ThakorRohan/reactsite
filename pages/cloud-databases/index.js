import React, { useEffect } from 'react'
import Layout from '../../Layouts/MainLayout';
import Home from '../../components/CloudDatabases/home'
import Database from '../../components/CloudDatabases/databases'
import Help from '../../components/CloudDatabases/help'
import Product from '../../components/CloudDatabases/products'
import DatabaseOption from '../../components/CloudDatabases/database-option'
import Business from '../../components/CloudDatabases/business'
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
                <Database />
                <Help />
                <Product />
                <DatabaseOption />
                <Business />
            </Layout>
        </>
    );
}
export default Index;
