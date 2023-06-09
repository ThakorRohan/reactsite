import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { title: 'Location', icon: 'ion ion-ios-location', desc: '1234 North Avenue Luke Lane, South Bend, IN 360001' },
        { title: 'Email', icon: 'ion ion-ios-email', desc: 'support@iqonicthemes.com' },
        { title: 'Phone', icon: 'ion ion-ios-telephone', desc: '+91 123 456 7890' },
    ]);
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-4  col-md-6" key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-2 text-left ">
                                        <div className="icon-box-img">
                                            <i aria-hidden="true" className={list.icon}></i>
                                        </div>
                                        <div className="icon-box-content">
                                            <h5 className="icon-box-title"><a href="#">{list.title}</a></h5>
                                            <p className="icon-box-desc"> {list.desc} </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default Index