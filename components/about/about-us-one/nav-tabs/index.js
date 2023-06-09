import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
const Index = props => {
    const [navList] = useState([
        {
            id: 'tab-one-click-deploy',
            title: 'One Click Deploy',
            sub_title: "It is a long established fact that a reader will be distracted.",
            image: "../../../../assets/images/tab/02-2.png",
            content_image: "../../../../assets/images/tab/01.png",
            active: true
        },
        {
            id: 'tab-powerful-api',
            title: 'Powerful API',
            sub_title: "It is a long established fact that a reader will be distracted.",
            image: "../../../../assets/images/tab/02-2.png",
            content_image: "../../../../assets/images/tab/02.png"
        },
        {
            id: 'tab-easy-management',
            title: 'Easy Management',
            sub_title: "It is a long established fact that a reader will be distracted.",
            image: "../../../../assets/images/tab/03-3.png",
            content_image: "../../../../assets/images/tab/03.png"
        },
        {
            id: 'tab-help-desk-services',
            title: 'Help Desk Services',
            sub_title: "It is a long established fact that a reader will be distracted.",
            image: "../../../../assets/images/tab/04-4.png",
            content_image: "../../../../assets/images/tab/04.png"

        }
    ]);
    return (
        <>
            <section className="pt-0 iq-sahpe">
                <img src="../../../../assets/images/others/shape1.png" className="img-fluid shape" alt="QLOUD" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Powerful Control Panel & APIs'
                                subTitle='Our Services'
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-tabs iq-tab-vertical-1 iq-box-shadow">
                                <div className="row align-items-stretch">
                                    <div className="col-lg-4">
                                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                            {
                                                navList.map((nav, index) => (
                                                    <li className="nav-item" key={index}>
                                                        <a className="nav-link" data-toggle="pill" href={'#' + nav.id} role="tab" aria-selected={nav.active !== undefined ? true : false}>
                                                            <div className="media">
                                                                <img src={nav.image} className="img-fluid" alt="QLOUD" />
                                                                <div className="media-body">
                                                                    <h6 className="tab-title">{nav.title}</h6>
                                                                    <p className="mb-0 tab-title-desc">{nav.sub_title}</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                ))
                                            }

                                        </ul>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="tab-content">
                                            {
                                                navList.map((nav, index1) => (
                                                    <div key={index1} id={nav.id} className={nav.active !== undefined && nav.active ? 'tab-pane fade show active' : 'tab-pane fade'}>
                                                        < div >
                                                            <img className="img-fluid" src={nav.content_image} alt="qloud" />
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index