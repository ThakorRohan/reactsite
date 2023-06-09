import React, { useState } from 'react';
const Index = props => {
    const [List] = useState([
        { title: 'Happy Clients', sysmbol: '', value: 1520 },
        { title: 'Completed projects', sysmbol: '+', value: 2000 },
        { title: 'Team members', sysmbol: '', value: 240 },
        { title: 'Questions Answered', sysmbol: '', value: 750 }
    ]);
    return (
        <>
            <section className="iq-compute-counter">
                <div className="container">
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                    <div className="iq-counter text-center iq-counter-style-1 iq-color">
                                        <div className="counter-content">
                                            <p className="iq-counter-info">
                                                <span className="timer" data-to={list.value}></span>
                                                <span className="counter-after-content"></span>
                                                <span className="counter-symbol">{list.symbol}</span>
                                            </p>
                                            <h6 className="counter-title-text">{list.title}</h6>
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