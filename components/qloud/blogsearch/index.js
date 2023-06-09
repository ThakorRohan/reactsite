import React from 'react';
const Index = props => {
    return (
        <>
            <div className="widget widget_search">
                <form className="search-form">
                    <label htmlFor="search-form">
                        <span className="screen-reader-text">Search for:</span>
                    </label>
                    <input type="search" id="search-form" className="search-field" placeholder="Search &hellip;" defaultValue="" name="s" />
                    <button type="submit" className="search-submit"><i className="fa fa-search"></i><span className="screen-reader-text">Search</span></button>
                </form>
            </div>
        </>
    );
}

export default Index