import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { title: 'Successfully Served', content: 'Happy Clients', timer: 1790 },
        { title: 'Successfully Completed', content: 'Branding Projects', timer: 491 },
        { title: 'Recruited more than', content: 'Marketing Experts', timer: 245 },
        { title: 'Publicly Published', content: 'Blog Posts', timer: 1090 }
    ]);
    return (
        <>
            <section className="gray-bg iq-ptb-60">
                <div className="container">
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                    <div className="iq-counter text-center iq-counter-style-2">
                                        <div className="counter-content">
                                            <div className="counter-title-text">{list.title} </div>
                                            <p className="iq-counter-info">
                                                <span className={"timer"} data-to={list.timer}></span>
                                                <span className="counter-after-content"></span>
                                                <span className="counter-symbol"></span>
                                            </p>
                                            <p className="counter-content-text">{list.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section >
        </>
    );
}

export default Index