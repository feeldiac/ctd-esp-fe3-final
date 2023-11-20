import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const BasicLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default BasicLayout;