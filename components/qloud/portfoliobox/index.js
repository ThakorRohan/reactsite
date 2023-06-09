import React from 'react';
const Index = props => {
    return (
        <>
            {
                props.portfolioData.map((portfolio, index) => (
                    <div className={"iq-masonry-item " + portfolio.class} key={index}>
                        <div className="iq-portfolio">
                            <a href="#" className="iq-portfolio-img">
                                <img src={portfolio.image} className="img-fluid" alt="qloud-portfolio" />
                                <div className="portfolio-link">
                                    <div className="icon"><i className="fa fa-link" aria-hidden="true"></i></div>
                                </div>
                            </a>
                            <div className="iq-portfolio-content">
                                <div className="details-box clearfix">
                                    <div className="consult-details">
                                        <a href={portfolio.link}>
                                            <h5 className="link-color">{portfolio.title}</h5>
                                            <p className="mb-0 iq-portfolio-desc">{portfolio.desc}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
            }

        </>
    );
}

export default Index