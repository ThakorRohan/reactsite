import React from 'react';
const Index = props => {
    return (
        <>
            <div className="main-bg" >
                <div className="container-fluid p-0">
                    <div className="text-left iq-breadcrumb-one iq-bg-over black">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12">
                                    <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                                        <h2 className="title">{props.title}</h2>
                                        <ol className="breadcrumb main-bg">
                                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-home mr-2"></i>Home</a></li>
                                            <li className="breadcrumb-item active"> {props.title}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Index