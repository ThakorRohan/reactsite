import React from 'react';

const List = (props) => {

    const list = props.list;
    const listing = list.map((item, index) => (
        <li key={index} >
            <a href="tel:+0123456789"><i className={item.iconClass}></i><span>{item.text}</span></a>
        </li>
    ));
    return (
        <ul className="iq-contact"> {listing} </ul>
    );
};

const Index = (props) => {
    return (
        <>
            <div className="widget">
                <h4 className="footer-title ">{props.addressTitle}</h4>
                <div className="row">
                    <div className="col-sm-12">
                        <List addressClass={props.addressClass} list={props.addressContent} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Index;