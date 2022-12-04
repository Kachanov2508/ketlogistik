import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import classes from './Layout.module.scss';

const Layout = ({children}) => {
	return (
        <>
            <Navbar />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
