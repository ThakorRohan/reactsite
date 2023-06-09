import React, { useState } from 'react';
import TitleSection from '../../qloud/titlesection'
import TestimonalOwl from '../../qloud/testimonial'

const Index = props => {
    const [List] = useState([
        {
            name: 'Haris Morgan',
            designation: 'Designer, Qloud',
            desc: 'Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
            image: '../../../assets/images/testimonial/01.png'
        },
        {
            name: 'Nik Jorden',
            designation: 'Designer, Qloud',
            desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
            image: '../../../assets/images/testimonial/02.png'
        },
        {
            name: 'Rinks Cooper',
            designation: 'Designer, Qloud',
            desc: 'Text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
            image: '../../../assets/images/testimonial/03.png'
        }
    ]);
    return (
        <>
            <section className="iq-testimonial-section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 align-self-center">
                            <TitleSection
                                className='text-left iq-title-box-2'
                                title='Some Awesome Words By Our Customers'
                                subTitle='Testimonial'
                                description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                            />
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 align-self-center">
                            <TestimonalOwl testimonalData={List} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index