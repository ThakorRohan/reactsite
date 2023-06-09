import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        { title: 'Dignissimos wisi cillum', image: '../../../assets/images/portfolio/01.png', desc: 'Print — Branding' },
        { title: 'Dignissimos wisi cillum', image: '../../../assets/images/portfolio/02.png', desc: 'WordPress — eCommerce' },
        { title: 'Dignissimos wisi cillum', image: '../../../assets/images/portfolio/03.png', desc: 'Print — Branding' },
        { title: 'Dignissimos wisi cillum', image: '../../../assets/images/portfolio/04.png', desc: 'WordPress — eCommerce' },
        { title: 'Dignissimos wisi cillum', image: '../../../assets/images/portfolio/05.png', desc: 'WordPress — eCommerce' },
        { title: 'Dignissimos wisi cillum', image: '../../../assets/images/portfolio/06.png', desc: 'WordPress — eCommerce' }
    ]);
    return (
        <>
            <section className="iq-blog-section light-gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Customer Stories'
                                subTitle='Stories'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="iq-masonry-block ">
                                <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="true" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="1" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                    {
                                        List.map((list, index) => (
                                            <div className="iq-masonry-item" key={index}>
                                                <div className="iq-portfolio">
                                                    <a href="#" className="iq-portfolio-img">
                                                        <img src={ list.image } className="img-fluid"  alt="qloud-portfolio" />
                                                        <div className="portfolio-link">
                                                            <div className="icon">
                                                                <i className="fa fa-link" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div className="iq-portfolio-content">
                                                        <div className="details-box clearfix">
                                                            <div className="consult-details">
                                                                <a href="#">
                                                                    <h5 className="link-color">{list.title}</h5>
                                                                    <p className="mb-0 iq-portfolio-desc">{list.desc}</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}

export default Index