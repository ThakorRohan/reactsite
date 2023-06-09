import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
const Index = props => {

    return (
        <>
            <div className=" overview-block-ptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <img src="../../../../assets/images/others/01.png" className="img-fluid" alt="contact" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <TitleSection
                                className='text-left iq-title-box-2'
                                title='Contact With US'
                                subTitle='Get In Touch'
                                titleIcon=''
                                description='It is a long established fact that a reader will be distracted'
                            />
                            <div role="form" className="wpcf7">
                                <form className="wpcf7-form" >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <span className="wpcf7-form-control-wrap first-name">
                                                <input type="text" name="first-name" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="First Name" />
                                            </span>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="wpcf7-form-control-wrap last-name">
                                                <input type="text" name="last-name" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" placeholder="Last Name" />
                                            </span>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="wpcf7-form-control-wrap your-email">
                                                <input type="email" name="your-email" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" placeholder="Email Address" />
                                            </span>
                                        </div>
                                        <div className="col-lg-6">
                                            <span className="wpcf7-form-control-wrap tel-554">
                                                <input type="tel" name="tel-554" defaultValue="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" placeholder="Phone" />
                                            </span>
                                        </div>
                                        <div className="col-lg-12">
                                            <p>
                                                <span className="wpcf7-form-control-wrap your-message">
                                                    <textarea name="your-message" cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" placeholder="Message"></textarea>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="col-lg-12">
                                            <input type="submit" defaultValue="Send" className="wpcf7-form-control wpcf7-submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Index