import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GlobalContext } from '../contexts/GlobalContext';

const BasicLayout = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <div id='layout' className={theme === "dark" ? "dark-mode" : ""}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default BasicLayout;