import React from 'react';
const Index = props => {

    return (
        <>

            <div className="iq-testimonial text-left iq-testimonial-1">
                <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
                    {
                        props.testimonalData.map((testimonial, index) => (
                            <div className="item" key={index}>
                                <div className="iq-testimonial-info">
                                    <div className="iq-testimonial-content">
                                        <div className="iq-testimonial-quote"><i aria-hidden="true" className="fa fa-quote-right"></i></div>
                                        <p>{testimonial.desc}</p>
                                        <div className="iq-testimonial-member">
                                            <div className="iq-testimonial-avtar">
                                                <img alt="image-testimonial" className="img-fluid center-block" src={testimonial.image} />
                                            </div>
                                            <div className="avtar-name">
                                                <div className="iq-lead">{testimonial.name}</div>
                                                <span className="iq-post-meta">{testimonial.designation}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
}

export default Index