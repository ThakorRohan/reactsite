import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
const Index = props => {
    const [List] = useState([
        { question: 'How Much Your Product Price?', answer: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.', active: true },
        { question: 'Do you improve your product continuously?', answer: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.' },
        { question: 'How Does Your Product Work?', answer: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.' },
        { question: 'This Book Is A Treatise On The Theory?', answer: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.' },
        { question: 'Where Does It Come From?', answer: ' There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.' },
    ]);
    return (
        <>
            <section className="iq-pricing-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Frequently Asked Questions'
                                subTitle='Faq'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-accordion  iq-accordion-semi-round iq-accordion-classic">
                                {
                                    List.map((list, index) => (
                                        <div key={index} className={list.active !== undefined && list.active ? 'accordion-active iq-accordion-block' : 'iq-accordion-block'}>
                                            < div className="iq-accordion-title" >
                                                <div className="iq-icon-right"><i aria-hidden="true" className="ion ion-minus-round active"></i><i aria-hidden="true" className="ion ion-plus inactive"></i></div>
                                                <h5 className="mb-0 accordion-title">{list.question}</h5>
                                            </div>
                                            <div className="iq-accordion-details">
                                                <p className="iq-content-text">{list.answer}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Index