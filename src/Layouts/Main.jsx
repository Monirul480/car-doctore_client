import {Outlet } from 'react-router-dom'
import Footer from '../pages/Home/Home/Shared/Footer';
import Navbar from '../pages/Home/Home/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;