import Sidebar from "../Sidebar/Sidebar";

import classes from './Layout.module.scss';

const Layout = ({children}) => {
	return (
        <>
            <Sidebar />
            <main className={classes.main}>
                {children}
            </main>
        </>
    );
};

export default Layout;
