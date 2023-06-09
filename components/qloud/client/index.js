import React from 'react';
const Index = props => {
    return (
        <>

            <div id="my-carousel" className="owl-carousel" data-dots="false" data-nav="false" data-items="6" data-items-laptop="4" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                {
                    props.clientData.map((client, index) => (
                        <div className="item" key={index}>
                            <div className="iq-client-img">
                                <img src={client.image} className="img-fluid" alt="client-img" />
                            </div>
                        </div>
                    ))
                }

            </div>

        </>
    );
}

export default Index