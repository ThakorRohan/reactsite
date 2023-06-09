import React from 'react';
const Index = props => {
    return (
        <>
            <div className="iq-team iq-team-slider iq-team-style-9">
                <div className="owl-carousel" data-dots="false" data-nav="false" data-items="4" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                    {
                        props.teamOwlData.map((teamowl, index) => (
                            <div className="iq-team-blog" key={index}>
                                <div className="iq-team-img">
                                    <img className="img-fluid" src={teamowl.image} alt="image" />
                                    <div className="iq-team-social">
                                        <ul>
                                            {
                                                teamowl.socialLink.map((link, socialIndex) => (
                                                    <li key={socialIndex} > <a href={link.href}><i className={link.icon}></i></a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="iq-team-description">
                                    <div className="iq-team-info">
                                        <h5 className="member-text">{teamowl.name}</h5>
                                        <span className="designation-text">{teamowl.design}</span>
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