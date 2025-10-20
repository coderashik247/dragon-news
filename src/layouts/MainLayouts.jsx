import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';

const MainLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
            </header>
        </div>
    );
};

export default MainLayouts;