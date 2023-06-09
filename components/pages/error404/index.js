import React, { useState } from 'react';
const Index = props => {

    return (
        <>
            <section className="iq-blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="fourzero-image mb-5">
                                <img src="../../../assets/images/others/03.png" className="img-fluid" alt="404" />
                            </div>
                            <h4> 404 Error</h4>
                            <p className="mb-5"> Oops! This Page is Not Found. </p>
                            <div className="d-block">
                                <a className="iq-button" href="#">Back to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index