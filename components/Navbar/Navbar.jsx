import { useRouter } from "next/router";
import MyLink from "../MyLink/MyLink";
import classes from "./Navbar.module.scss";

const Navbar = () => {

	const router = useRouter();




	return (
		<div className={classes.navbar}>
			<div className={classes.logo}>
			<img src="/images/omega.png" alt="omega" />
			</div>
			<ul>
				<li><MyLink className={router.pathname == '/' && 'active'} href='/' text='Главная' /></li>
				<li><MyLink className={router.pathname == '/about' && 'active'} href='/about' text='О компании' /></li>
				<li><MyLink className={router.pathname == '/contacts' && 'active'} href='/contacts' text='Контакты' /></li>
			</ul>
		</div>
	);
};

export default Navbar;
