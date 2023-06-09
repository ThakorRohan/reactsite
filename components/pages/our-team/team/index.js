import React, { useState } from 'react';
import TitleSection from '../../../qloud/titlesection'
import TeamOwl from '../../../qloud/teamowl'

const Index = props => {
    const [List1] = useState([
        {
            name: 'Marcash Dane', design: 'Developer', image: '../../../../assets/images/team/05.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Greta Life', design: 'Designer', image: '../../../../assets/images/team/04.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Petey Cruiser', design: 'Developer', image: '../../../../assets/images/team/03.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Anna Mull', design: 'CEO', image: '../../../../assets/images/team/02.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Handry White', design: 'Project Manager', image: '../../../../assets/images/team/01.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        }
    ]);
    const [List2] = useState([
        {
            name: 'Marcash Dane', design: 'Developer', image: '../../../../assets/images/team/05.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Greta Life', design: 'Designer', image: '../../../../assets/images/team/04.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Petey Cruiser', design: 'Developer', image: '../../../../assets/images/team/03.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Anna Mull', design: 'CEO', image: '../../../../assets/images/team/02.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        },
        {
            name: 'Handry White', design: 'Project Manager', image: '../../../../assets/images/team/01.jpg',
            socialLink: [
                { icon: 'fa fa-facebook', link: '#' },
                { icon: 'fa fa-twitter', link: '#' },
                { icon: 'fa fa-instagram', link: '#' }
            ]
        }
    ]);
    return (
        <>
            <section className="iq-pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <TitleSection
                                className='text-center iq-title-box-2'
                                title='Meet The Best Team	'
                                subTitle='Work With Us'
                                titleIcon=''
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <TeamOwl teamOwlData={List1} />
                            <TeamOwl teamOwlData={List2} />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
}

export default Index