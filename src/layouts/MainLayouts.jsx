import React from 'react';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/HomeLayouts/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../components/HomeLayouts/RightAside';

const MainLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </section>
            </header>

            <main className='grid grid-cols-12 gap-5 w-11/12 mx-auto'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default MainLayouts;