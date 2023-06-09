import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
const Index = props => {

    return (
        <>
            <section className="iq-contact-h3 blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 wow fadeInUp">
                            <TitleSection
                                className='text-left iq-title-white iq-title-box-1 wow fadeInUp'
                                title='Our Contact'
                                titleIcon=''
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            />

                            <h5 className="text-white mb-2">Phone :</h5>
                            <p className="text-white">0 123 456 789</p>
                            <h5 className="text-white mb-2">Email:</h5>
                            <p className="text-white">mail@dummytheme.com</p>
                        </div>
                        <div className="col-lg-6 col-md-12 wow fadeInUp">

                            <form className="wpcf7-form" noValidate>
                                <div style={{ display: "none" }}>
                                    <input type="hidden" name="_wpcf7" defaultValue="507" />
                                    <input type="hidden" name="_wpcf7_version" defaultValue="5.1.6" />
                                    <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                                    <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f507-p385-o1" />
                                    <input type="hidden" name="_wpcf7_container_post" defaultValue="385" />
                                </div>
                                <p><span className="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name" /></span>
                                    <br />
                                    <span className="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email" /></span>
                                    <br />
                                    <span className="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Type Your Message"></textarea></span>
                                    <br />
                                    <input type="submit" defaultValue="Send" className="wpcf7-form-control wpcf7-submit" />
                                </p>
                                <div className="wpcf7-response-output wpcf7-display-none"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index