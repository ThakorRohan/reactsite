import React, { useState } from 'react';
import PortfolioBox from '../../qloud/portfoliobox'

const Index = props => {
    const [List] = useState([
        { title: 'Dignissimos wisi cillum', desc: 'Print — Branding', image: '../../../assets/images/portfolio/01.png', class: 'creative design print-branding', link: '/portfolio-details' },
        { title: 'Dignissimos wisi cillum', desc: 'Design', image: '../../../assets/images/portfolio/02.png', class: 'creative html-ecommerce', link: '/portfolio-details' },
        { title: 'Dignissimos wisi cillum', desc: 'html — eCommerce', image: '../../../assets/images/portfolio/03.png', class: 'design print-branding', link: '/portfolio-details' },
        { title: 'Dignissimos wisi cillum', desc: 'Print — Branding', image: '../../../assets/images/portfolio/04.png', class: 'creative print-branding html-ecommerce', link: '/portfolio-details' },
        { title: 'Dignissimos wisi cillum', desc: 'html — eCommerce', image: '../../../assets/images/portfolio/05.png', class: 'creative design print-branding', link: '/portfolio-details' },
        { title: 'Dignissimos wisi cillum', desc: 'html — eCommerce', image: '../../../assets/images/portfolio/06.png', class: 'design html-ecommerce', link: '/portfolio-details' },
    ]);
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="iq-masonry-block w-100 ">
                            <div className="isotope-filters isotope-tooltip">
                                <button data-filter="" className="active">All<span className="post_no"></span></button>
                                <button data-filter=".creative">Creative<span className="post_no"></span></button>
                                <button data-filter=".design">Design<span className="post_no"></span></button>
                                <button data-filter=".print-branding">Print — Branding<span className="post_no"></span></button>
                                <button data-filter=".html-ecommerce">Html — eCommerce<span className="post_no"></span></button>
                            </div>
                            <div className=" iq-masonry iq-columns-3">
                                <PortfolioBox portfolioData={List} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index