import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'

const Index = props => {
    const [List] = useState([
        { title: 'Cloud SQL', btnText: 'Find out More', image: '../../../assets/images/product/01.png', desc: 'It is a long established fact that a the areader will be distracted.' },
        { title: 'Cloud Spanner', btnText: 'Find out More', image: '../../../assets/images/product/02.png', desc: 'It is a long established fact that a the areader will be distracted.' },
        { title: 'Cloud Memorystore', btnText: 'Find out More', image: '../../../assets/images/product/03.png', desc: 'It is a long established fact that a the areader will be distracted.' },
        { title: 'Cloud Firestore', btnText: 'Find out More', image: '../../../assets/images/product/04.png', desc: 'It is a long established fact that a the areader will be distracted.' }
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 wow fadeInUp">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Powerful Control Panel & APIs'
                                subTitle='Products'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        {
                            List.map((list, index) => (
                                <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="0.2s" key={index}>
                                    <div className="iq-icon-box iq-icon-box-style-5 iq-box-shadow">
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title"> <a href="#">{list.title}</a> </h4>
                                            <p className="icon-box-desc"> {list.desc} </p>
                                            <div className="iq-btn-container">
                                                <a className="iq-button d-inline" href="#">{list.btnText}</a>
                                            </div>
                                        </div>
                                        <div className="icon-box-img">
                                            <img src={list.image} className="img-fluid" alt="01s" />
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