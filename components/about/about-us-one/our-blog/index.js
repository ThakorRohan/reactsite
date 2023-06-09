import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
import BlogOwl from '../../../qloud/blogowl'

const Index = props => {
    const [List] = useState([
        {
            img: '../../../../assets/images/blog/01.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Build Construction',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '../../../../assets/images/blog/02.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'Official Terraform Provider',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        },
        {
            img: '../../../../assets/images/blog/03.png',
            name: 'Marketing',
            time: 'February 17, 2020',
            title: 'CCPA Compliance Update',
            desc: 'It is a long established fact that a reader will be distracted by the readable.',
        }
    ]);
    return (
        <>
            <section className="iq-pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Recent Blog'
                                subTitle='Blog'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <BlogOwl blogList={List} />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Index